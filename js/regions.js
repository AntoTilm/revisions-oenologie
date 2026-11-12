/* ===== Régions : la liste du programme et une page par région =====
   Rien n'est saisi ici : tout vient des données existantes.
   - REGIONS (js/programme.js) : ordre, module, régions de la carte réunies, exercices disponibles ;
   - YEAR (js/annee.js) : cours (essentiel, détail, accords) et synthèse ;
   - VM (js/carte.js) et VMX (js/sous-regions.js) : en bref, cépages, à retenir, sous-régions ;
   - les vins goûtés : les blocs de #degustations marqués data-r="<région>", et VM.t pour l'initiation.
   Chaque page a l'id r-<région> ; un cours garde son ancienne adresse #f-<cours>. */
(function(){
  const Y=window.YEAR,VM=window.VM||{},VMX=window.VMX||{},R=window.REGIONS||[];
  if(!Y||!R.length)return;
  const E=s=>String(s==null?"":s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
  const OF={};R.forEach(r=>{OF[r.id]=r.id;r.carte.forEach(k=>OF[k]=r.id);});
  window.REGION_OF=OF;
  const ready=c=>!!(c&&c.ess);
  const coursesOf=r=>Y.courses.filter(c=>OF[c.r]===r.id);
  const synOf=r=>Y.syn.filter(s=>{const c=Y.courses.find(x=>x.id===s[1]);return c&&OF[c.r]===r.id;});
  const blocksOf=r=>[...document.querySelectorAll('#degustations .block[data-r="'+r.id+'"]')];
  const winesOf=r=>blocksOf(r).flatMap(b=>[...b.querySelectorAll("article.wine")]);
  const initOf=r=>r.carte.flatMap(k=>(VM[k]&&VM[k].t)||[]);
  const keysOf=r=>r.carte.filter(k=>VM[k]);

  /* cépages : lien vers la fiche du cépage (Dégustation) quand elle existe */
  const CEP={};
  document.querySelectorAll("#cep-grid .cep").forEach(a=>{CEP[a.querySelector("h4").textContent.trim().toLowerCase()]=a.id;});
  const ALIAS={"gamay noir à jus blanc":"gamay","roussanne (bergeron)":"roussanne","rolle (vermentino)":"rolle / vermentino","malbec (côt)":"côt / malbec","malbec":"côt / malbec","côt":"côt / malbec","vermentino":"rolle / vermentino","petit manseng":"gros et petit manseng","gros manseng":"gros et petit manseng"};
  function cep(name){
    const n=name.toLowerCase(),k=CEP[n]?n:ALIAS[n];
    return k&&CEP[k]?'<a class="chip-l" href="#'+CEP[k]+'">'+E(name)+'</a>':'<span class="chip-l">'+E(name)+'</span>';
  }

  /* ---------- la liste des régions (#year) ---------- */
  let L="";
  Y.modules.forEach((m,mi)=>{
    const rs=R.filter(r=>r.m===mi+1);
    L+='<div class="yr-mod" id="'+m.id+'"><div class="yr-mod-head"><h3>'+E(m.t)+' · '+E(m.st)+'</h3><span class="yr-exam">'+E(m.exam)+'</span></div><div class="rl-grid">'+
      rs.map(r=>{
        const cs=coursesOf(r),nr=cs.filter(ready).length,nw=winesOf(r).length;
        const meta=[nr?nr+" cours":"à venir"].concat(nw?[nw+" vins goûtés"]:[]).concat(r.ex?["exercices"]:[]).join(" · ");
        return '<a class="rl-card'+(nr?'':' is-soon')+'" href="#r-'+r.id+'"><span class="rl-top"><span class="rl-n">'+E(r.n)+(r.sous?' <span class="rl-sous">'+E(r.sous)+'</span>':'')+'</span><span class="rl-meta">'+E(meta)+'</span></span>'+
          '<span class="rl-syn">'+E(synOf(r).map(s=>s[2]).join(" "))+'</span></a>';
      }).join("")+'</div></div>';
  });
  const miss=Y.courses.filter(c=>!ready(c)).map(c=>c.n);
  if(miss.length)L+='<p class="yr-legend">Il manque encore '+(miss.length>1?'les supports ':'le support ')+miss.map(n=>'<b>'+E(n)+'</b>').join(" et ")+' dans le projet : '+(miss.length>1?'leurs pages se rempliront':'sa page se remplira')+' dès qu\''+(miss.length>1?'ils seront ajoutés':'il sera ajouté')+'.</p>';
  document.getElementById("year").innerHTML=L;

  /* ---------- une page par région (#year-courses) ---------- */
  function page(r,i){
    const keys=keysOf(r),cs=coursesOf(r),M=Y.modules[r.m-1],prev=R[i-1],next=R[i+1],ex=r.ex||{};
    const syn=synOf(r),blocks=blocksOf(r),nW=winesOf(r).length,init=initOf(r);
    const acc=[];cs.forEach(c=>(c.acc||[]).forEach(a=>acc.push([c].concat(a))));
    const id=s=>'rp-'+r.id+'-'+s;
    let h='<section id="r-'+r.id+'" class="rp" data-n="'+E(r.n)+'" hidden>';
    h+='<header class="sec-head"><p class="kicker"><a href="#annee">Régions</a> · '+E(M.t)+'</p><h2>'+E(r.n)+(r.sous?' <span class="rp-sous">'+E(r.sous)+'</span>':'')+'</h2>'+
       '<p class="sub">'+keys.map(k=>E(VM[k].w)).join(" · ")+'</p></header>';
    h+='<nav class="rp-nav" aria-label="Dans la page '+E(r.n)+'">'+[["ess","L'essentiel"],["cours","Les cours"],["sous","Sous-régions"],["vins","Vins goûtés"],["acc","Accords"],["ex","S'entraîner"]].map(x=>'<a href="#'+id(x[0])+'">'+x[1]+'</a>').join("")+'</nav>';

    /* l'essentiel : synthèse de l'année + « à retenir » de la carte, puis en bref et cépages */
    h+='<div class="rp-block" id="'+id("ess")+'"><div class="essentiel rp-ess"><p class="mini">L\'essentiel de la région</p><ul>'+
       syn.map(s=>'<li><b>'+E(s[0])+' :</b> '+E(s[2])+'</li>').join("")+
       keys.map(k=>'<li><b>À retenir'+(keys.length>1?' ('+E(VM[k].n)+')':'')+' :</b> '+E(VM[k].k)+'</li>').join("")+'</ul></div>'+
       '<div class="rp-cols">'+keys.map(k=>{const d=VM[k];return '<div class="panel"><h4>'+(keys.length>1?E(d.n)+' · ':'')+'En bref</h4><p>'+E(d.b)+'</p>'+
         '<p class="rp-grapes"><b>Rouges</b>'+d.r.map(cep).join("")+'</p><p class="rp-grapes"><b>Blancs</b>'+d.bl.map(cep).join("")+'</p></div>';}).join("")+'</div></div>';

    /* les cours : essentiel + détail repliable, à leur ancienne adresse #f-<cours> */
    h+='<div class="rp-block" id="'+id("cours")+'"><h3 class="rp-h">Les cours <span class="tag">'+cs.filter(ready).length+' / '+cs.length+'</span></h3>'+
      cs.map(c=>ready(c)
        ?'<section class="rc" id="f-'+c.id+'" data-n="'+E(c.n)+'"><header class="rc-head"><p class="kicker">'+E(c.n)+' · support « '+E(c.src)+' »</p><h3>'+E(c.t)+'</h3></header>'+
          '<div class="essentiel"><p class="mini">L\'essentiel de '+E(c.n)+'</p><ul>'+c.ess.map((t,k)=>'<li><span class="ess-t num">'+(k+1)+'</span><span>'+t+'</span></li>').join("")+'</ul></div>'+
          (c.det||[]).map((d,k)=>'<details class="block" id="f-'+c.id+'-'+(k+1)+'"><summary><h3>'+E(d[0])+'</h3></summary><div class="prose">'+d[1]+'</div></details>').join("")+'</section>'
        :'<div class="rc is-soon" id="f-'+c.id+'" data-n="'+E(c.n)+'"><p class="kicker">'+E(c.n)+'</p><p>'+E(c.t)+' · support à ajouter dans le projet</p></div>').join("")+'</div>';

    /* sous-régions et appellations */
    h+='<div class="rp-block" id="'+id("sous")+'"><h3 class="rp-h">Sous-régions et appellations</h3>'+keys.map(k=>{const X=VMX[k],d=VM[k];
        const items=X?X.map((s,j)=>'<details id="rs-'+k+'-'+j+'"><summary><h4>'+E(s.t)+'</h4><span class="vm-sum">'+E(s.s)+'</span></summary><div class="vm-sub-body"><dl>'+
            (s.ap?'<dt>Appellations</dt><dd>'+E(s.ap)+'</dd>':'')+(s.c?'<dt>Cépages</dt><dd>'+E(s.c)+'</dd>':'')+(s.x?'<dt>À savoir</dt><dd>'+E(s.x)+'</dd>':'')+'</dl></div></details>').join("")
          :d.s.map(x=>'<div class="rs-plain"><h4>'+E(x[0])+'</h4><p>'+E(x[1])+'</p></div>').join("");
        return (keys.length>1?'<p class="mini">'+E(d.n)+'</p>':'')+'<div class="vm-subs">'+items+'</div>';}).join("")+
      '<p class="more-hint"><a href="#carte" data-vm="'+keys[0]+'">Voir la région sur la carte</a></p></div>';

    /* vins goûtés en cours : l'année (fiches dans Dégustation), puis l'initiation */
    const wl=blocks.map(b=>{const t=b.querySelector("h3").cloneNode(true);t.querySelectorAll(".tag").forEach(x=>x.remove());
        return '<div class="rw-block"><p class="mini">'+E(t.textContent.trim())+' · <a href="#'+b.id+'">les fiches</a></p><ul class="rw-list">'+
          [...b.querySelectorAll("article.wine")].map(a=>{const n=a.querySelector("h4").textContent.replace(/^\s*\d+\s*·\s*/,"").trim(),m=(a.querySelector(".dg-meta")||{}).textContent||"";
            return '<li><a href="#'+a.id+'">'+E(n)+'</a><span class="muted">'+E(m)+'</span></li>';}).join("")+'</ul></div>';}).join("");
    const il=init.length?'<div class="rw-block"><p class="mini">Pendant l\'initiation</p><ul class="rw-list">'+init.map(x=>'<li><a href="'+x[1]+'">'+E(x[0])+'</a></li>').join("")+'</ul></div>':'';
    h+='<div class="rp-block" id="'+id("vins")+'"><h3 class="rp-h">Vins goûtés en cours <span class="tag">'+(nW+init.length)+'</span></h3>'+
      (wl||'<p class="muted">Pas encore de vin de l\'année pour cette région. Après le cours, envoie tes fiches ou les photos des bouteilles : elles arriveront ici et dans <a href="#degustations">Vins dégustés</a>.</p>')+il+'</div>';

    /* accords mets-vins des cours de la région */
    h+='<div class="rp-block" id="'+id("acc")+'"><h3 class="rp-h">Accords mets-vins <span class="tag">'+acc.length+'</span></h3>'+
      (acc.length?'<div class="tbl"><table><thead><tr><th>Vin</th><th>Cépage</th><th>Profil</th><th>Plat</th></tr></thead><tbody>'+
        acc.map(a=>'<tr><td><b>'+E(a[1])+'</b><br><span class="muted">'+E(a[0].n)+'</span></td><td>'+E(a[2])+'</td><td>'+E(a[3])+'</td><td>'+E(a[4])+'</td></tr>').join("")+'</tbody></table></div>'
        :'<p class="muted">À venir avec le support du cours.</p>')+
      '<p class="more-hint">À l\'examen, le plat se choisit dans <a href="#accords">la liste du '+E(M.t)+'</a>.</p></div>';

    /* s'entraîner : les quatre épreuves pour cette région */
    h+='<div class="rp-block" id="'+id("ex")+'"><h3 class="rp-h">S\'entraîner sur la région</h3><div class="rp-ex">'+
      [["qcm","QCM"],["etiq","Étiquettes"],["degust","Dégustation à l'aveugle"],["acc","Accords mets-vins"]].map(x=>ex[x[0]]
        ?'<a class="yr-card is-ready" href="#x-'+ex[x[0]]+'"><span class="yr-n">'+x[1]+'</span><span class="yr-t">'+E(r.n)+' : '+x[1].toLowerCase()+'</span></a>'
        :'<div class="yr-card is-soon"><span class="yr-n">'+x[1]+'</span><span class="yr-t">À venir</span></div>').join("")+'</div>'+
      '<p class="more-hint">Pour toutes les régions : <a href="#vm-quiz">le quiz de la carte</a> et <a href="#cles-etiquette">les clés de l\'étiquette</a>.</p></div>';

    h+='<nav class="yc-nav">'+(prev?'<a href="#r-'+prev.id+'">← '+E(prev.n)+'</a>':'<span></span>')+'<a href="#annee">Toutes les régions</a>'+(next?'<a href="#r-'+next.id+'">'+E(next.n)+' →</a>':'<span></span>')+'</nav>';
    return h+'</section>';
  }
  document.getElementById("year-courses").innerHTML=R.map(page).join("");

  /* ---------- S'entraîner : les régions encore sans exercice, épreuve par épreuve ---------- */
  document.querySelectorAll("[data-soon]").forEach(p=>{
    const k=p.dataset.soon,m1=R.filter(r=>r.m===1&&!(r.ex&&r.ex[k]));
    p.textContent=m1.length?"À venir pour le module France 1 : "+m1.map(r=>r.n).join(", ")+" ; puis les régions du module France 2.":"Toutes les régions du module France 1 sont prêtes ; le module France 2 suivra.";
  });
})();
