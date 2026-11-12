/* ===== Accueil : tableau de bord =====
   Les échéances viennent d'AGENDA (js/programme.js), le module en cours est celui du prochain examen.
   Les cases (QCM réussis, fiches remises) sont gardées dans ce navigateur, clé « oeno-suivi-v1 ». */
(function(){
  const box=document.getElementById("dash");if(!box||!window.YEAR)return;
  const Y=window.YEAR,R=window.REGIONS||[],A=(window.AGENDA||[]).slice().sort((a,b)=>a.d<b.d?-1:a.d>b.d?1:0);
  const E=s=>String(s==null?"":s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
  const KEY="oeno-suivi-v1";let S={};
  try{S=JSON.parse(localStorage.getItem(KEY)||"{}")||{};}catch(e){S={};}
  const save=()=>{try{localStorage.setItem(KEY,JSON.stringify(S));}catch(e){}};

  /* dates */
  const day=s=>{const p=s.split("-").map(Number);return new Date(p[0],p[1]-1,p[2]);};
  const today=new Date();today.setHours(0,0,0,0);
  const diff=s=>Math.round((day(s)-today)/864e5);
  const JOURS=["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"];
  const fmt=s=>{const d=day(s);return JOURS[d.getDay()]+" "+String(d.getDate()).padStart(2,"0")+"/"+String(d.getMonth()+1).padStart(2,"0")+(d.getFullYear()!==today.getFullYear()?"/"+d.getFullYear():"");};
  const rel=n=>n===0?"aujourd'hui":n===1?"demain":"dans "+n+" jours";

  const up=A.filter(a=>diff(a.d)>=0);
  const nextExam=up.find(a=>a.exam);
  const cm=nextExam?nextExam.m:(up.find(a=>a.m)||{m:Y.modules.length}).m;
  const M=Y.modules[cm-1],regs=R.filter(r=>r.m===cm),byId={};R.forEach(r=>byId[r.id]=r);
  const ready=c=>!!(c&&c.ess);
  let h="";

  /* 1. la prochaine échéance */
  h+='<section id="ac-agenda"><header class="sec-head"><p class="kicker">Prochaine échéance</p>';
  if(up.length){
    const a=up[0],r=byId[a.r];
    h+='<h2>'+E(a.t)+'</h2><p class="ac-when">'+E(fmt(a.d))+' · '+rel(diff(a.d))+'</p></header>';
    const acts=[];
    if(a.h)acts.push('<a class="btn" href="'+a.h+'">'+(r?'S\'entraîner':'Voir les épreuves')+'</a>');
    if(r)acts.push('<a class="btn ghost" href="#r-'+r.id+'">Revoir : '+E(r.n)+'</a>');
    if(acts.length)h+='<p class="ac-actions">'+acts.join("")+'</p>';
    if(up.length>1)h+='<ol class="ac-list">'+up.slice(1,5).map(x=>'<li><span class="ac-d">'+E(fmt(x.d))+'</span><span class="ac-t">'+(x.h?'<a href="'+x.h+'">'+E(x.t)+'</a>':E(x.t))+'</span><span class="ac-j">'+rel(diff(x.d))+'</span></li>').join("")+'</ol>';
  }else h+='<h2>Aucune échéance à venir</h2></header>';
  h+='</section>';

  /* 2. valider le module : les deux acquis */
  const row=(k,r)=>{const i="s-"+k+"-"+r.id;return '<li class="check"><input type="checkbox" id="'+i+'" data-k="'+k+':'+r.id+'"'+(S[k+":"+r.id]?' checked':'')+'><label for="'+i+'">'+E(k==="fiche"&&r.fiche?r.fiche:r.n)+'</label><a href="#r-'+r.id+'">Revoir</a></li>';};
  h+='<section id="ac-acquis"><header class="sec-head"><p class="kicker">'+E(M.t)+' · la base de 50 %</p><h2>Valider le module</h2>'+
    '<p class="sub">Deux conditions, sans exception : réussir tous les QCM des régions, et remettre une fiche de dégustation par région, remplie, au format original, sur papier, avec ton nom, agrafée.</p></header>'+
    '<div class="cols two"><div class="panel"><h4>QCM réussis · <span data-p="qcm"></span></h4><ul class="checklist">'+regs.map(r=>row("qcm",r)).join("")+'</ul></div>'+
    '<div class="panel"><h4>Fiches remises · <span data-p="fiche"></span></h4><ul class="checklist">'+regs.map(r=>row("fiche",r)).join("")+'</ul></div></div>'+
    '<p class="more-hint">Les cases cochées restent dans ce navigateur : le téléphone et l\'ordinateur ne se synchronisent pas.</p></section>';

  /* 3. les épreuves de l'examen */
  const card=(t,pts,txt,links)=>'<div class="panel"><h3>'+t+' <span class="pts">'+pts+'</span></h3><p>'+txt+'</p><p class="links">'+links.map(l=>'<a href="'+l[0]+'">'+l[1]+'</a>').join("")+'</p></div>';
  h+='<section id="ac-epreuves"><header class="sec-head"><p class="kicker">'+E(M.exam)+'</p><h2>Les épreuves de l\'examen</h2>'+
    '<p class="sub">Trois épreuves sur 100, ramenées sur 100. Une épreuve sous 50 compte pour 50 si les acquis sont atteints. 3 h en tout, 1 h 30 pour le théorique seul.</p></header><div class="ac-ep">'+
    card("Étiquettes","/100","Région /3, sous-région, appellation, niveau /4, vinification /4, quatre cépages /4 et une question /5 : "+E(M.q5.charAt(0).toLowerCase()+M.q5.slice(1))+". Des mentions peuvent être effacées.",[["#cles-etiquette","Les clés de l'étiquette"],["#xg-etiq","S'entraîner"]])+
    card("Dégustation à l'aveugle","/100","Cinq vins de cinq régions, déjà dégustés en classe : région /5, cépage /5, puis cinq cases sur 2 points.",[["#fiche-express","La fiche express"],["#xg-degust","S'entraîner"]])+
    card("Accords mets-vins","/100","Un plat par vin, choisi dans la liste donnée à l'examen ("+M.mets.length+" plats).",[["#accords","La liste des plats"],["#xg-acc","S'entraîner"]])+
    card("QCM des régions","acquis","Un QCM par région, au fil des cours : tous réussis pour valider le module.",[["#xg-qcm","S'entraîner"]])+
    '</div></section>';

  /* 4. les régions du module */
  h+='<section id="ac-regions"><header class="sec-head"><p class="kicker">'+E(M.t)+' · '+E(M.st)+'</p><h2>Les régions du module</h2></header><div class="rl-grid">'+
    regs.map(r=>{
      const cs=Y.courses.filter(c=>(window.REGION_OF||{})[c.r]===r.id),nr=cs.filter(ready).length;
      const nw=document.querySelectorAll('#degustations .block[data-r="'+r.id+'"] article.wine').length;
      const meta=[nr?nr+" cours":"à venir"].concat(nw?[nw+" vins goûtés"]:[]).join(" · ");
      return '<a class="rl-card'+(nr?'':' is-soon')+'" href="#r-'+r.id+'"><span class="rl-top"><span class="rl-n">'+E(r.n)+'</span><span class="rl-meta">'+E(meta)+'</span></span>'+
        '<span class="rl-badges"><span data-b="qcm:'+r.id+'">QCM</span><span data-b="fiche:'+r.id+'">Fiche</span>'+(r.ex?'<span class="on">Exercices</span>':'')+'</span></a>';
    }).join("")+'</div><p class="more-hint"><a href="#annee">Toutes les régions</a> · <a href="#carte">La carte</a></p></section>';

  /* 5. raccourcis */
  h+='<section id="ac-liens"><header class="sec-head"><p class="kicker">À garder sous la main</p><h2>Raccourcis</h2></header><div class="yr-grid">'+
    [["#fiche-express","Dégustation","La fiche express"],["#cepages","Dégustation","Les cépages"],["#accords","Dégustation","Les plats de l'examen"],["#degustations","Dégustation","Les vins goûtés"],["#cles-etiquette","Régions","Les clés de l'étiquette"],["#initiation","Archive","L'initiation, réussie"]]
      .map(x=>'<a class="yr-card is-ready" href="'+x[0]+'"><span class="yr-n">'+x[1]+'</span><span class="yr-t">'+x[2]+'</span></a>').join("")+'</div></section>';

  box.innerHTML=h;

  function upd(){
    ["qcm","fiche"].forEach(k=>{const n=regs.filter(r=>S[k+":"+r.id]).length;box.querySelectorAll('[data-p="'+k+'"]').forEach(x=>{x.textContent=n+" / "+regs.length;});});
    box.querySelectorAll("[data-b]").forEach(x=>{const on=!!S[x.dataset.b];x.classList.toggle("on",on);x.textContent=(x.dataset.b.startsWith("qcm")?"QCM":"Fiche")+(on?" ✓":"");});
  }
  box.addEventListener("change",e=>{const c=e.target.closest("input[data-k]");if(!c)return;S[c.dataset.k]=c.checked;save();upd();});
  upd();
})();
