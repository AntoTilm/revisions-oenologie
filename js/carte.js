/* ===== Carte des vignobles ===== */
(function(){
/* n nom · w situation · b en bref · r rouges · bl blancs · s sous-régions [titre, texte] · k à retenir · t dégustés en cours · l liens vers le cours · top appellations phares (tableau) · q indices du quiz */
const VM={
alsace:{n:"Alsace",w:"Nord-Est, entre les Vosges et le Rhin",
 b:"Une bande étroite de vignes sur les contreforts des Vosges, qui arrêtent les pluies : climat semi-continental, sec et ensoleillé. Près de 90 % de blancs, étiquetés par cépage, en bouteille « flûte ».",
 r:["Pinot noir"],bl:["Riesling","Gewurztraminer","Pinot gris","Muscat","Sylvaner","Pinot blanc"],
 s:[["AOC Alsace","Le nom du cépage figure sur l'étiquette."],["Alsace Grand Cru","51 lieux-dits classés."],["Crémant d'Alsace","Effervescent en méthode traditionnelle."],["Vendanges Tardives, Sélection de Grains Nobles","Mentions des vins doux (raisins surmûris ou botrytisés)."]],
 k:"Riesling, gewurztraminer, pinot gris et muscat sont les 4 cépages « nobles » de l'Alsace. Le pinot noir est le seul cépage rouge.",
 t:[["Cattin Sauvage Pinot noir (cours 4)","#d-c4"]],l:[],
 top:"Alsace, Alsace Grand Cru, Crémant d'Alsace",q:["Gewurztraminer","Riesling grand cru","Bouteille flûte","Vendanges Tardives","Colmar"]},
champagne:{n:"Champagne",w:"Nord-Est, autour de Reims et d'Épernay, plus l'Aube",
 b:"Un des vignobles les plus au nord : climat frais, sous-sol de craie qui garde l'eau et la restitue. Presque uniquement des effervescents élaborés en méthode traditionnelle (prise de mousse en bouteille).",
 r:["Pinot noir","Meunier"],bl:["Chardonnay"],
 s:[["Montagne de Reims","Surtout du pinot noir."],["Vallée de la Marne","Surtout du meunier."],["Côte des Blancs","Le chardonnay."],["Côte des Bar (Aube)","Surtout du pinot noir."],["Autres AOC","Coteaux champenois (vins tranquilles), Rosé des Riceys."]],
 k:"Blanc de blancs = 100 % chardonnay. Blanc de noirs = raisins noirs (pinot noir, meunier) vinifiés en blanc.",
 t:[],l:[["Les effervescents (cours 5)","#c5-effervescents"]],
 top:"Champagne, Coteaux champenois, Rosé des Riceys",q:["Côte des Blancs","Meunier","Montagne de Reims","Épernay","Blanc de blancs effervescent"]},
loire:{n:"Vallée de la Loire",w:"Ouest et Centre, le long de la Loire, de Nantes à Sancerre",
 b:"Un vignoble qui s'étire sur des centaines de kilomètres : climat océanique à l'ouest, plus continental vers l'est. Surtout des blancs vifs, aussi des rouges légers de cabernet franc et des rosés.",
 r:["Cabernet franc","Gamay","Pinot noir","Grolleau","Côt"],bl:["Melon de Bourgogne","Chenin","Sauvignon"],
 s:[["Pays nantais","Melon de Bourgogne : Muscadet, souvent « sur lie »."],["Anjou-Saumur","Chenin : Savennières, Coteaux du Layon, Quarts de Chaume (liquoreux). Cabernet franc : Saumur-Champigny. Rosé d'Anjou."],["Touraine","Chenin : Vouvray, Montlouis. Cabernet franc : Chinon, Bourgueil."],["Centre-Loire","Sauvignon : Sancerre, Pouilly-Fumé, Menetou-Salon, Quincy, Reuilly. Pinot noir : Sancerre rouge."]],
 k:"Ne pas confondre Pouilly-Fumé (sauvignon, Loire) et Pouilly-Fuissé (chardonnay, Bourgogne). Muscadet sur lie : élevé sur ses lies jusqu'au printemps, ce qui lui donne du gras et parfois un léger perlant.",
 t:[["Domaine de la Foliette, Muscadet (cours 1)","#d-c1"],["Domaine de Mihoudy, Coteaux du Layon (cours 3)","#d-c3"]],l:[["Moelleux et liquoreux (cours 3)","#c3-speciaux"]],
 top:"Muscadet, Coteaux du Layon, Chinon, Vouvray, Sancerre, Pouilly-Fumé",q:["Muscadet","Sancerre","Chinon","Vouvray","Coteaux du Layon","Pouilly-Fumé","Melon de Bourgogne"]},
bourgogne:{n:"Bourgogne",w:"Centre-Est, de Chablis (Yonne) au Mâconnais",
 b:"Le vignoble des « climats » : de petites parcelles délimitées et classées selon leur terroir. Pratiquement deux cépages, vinifiés seuls (pas d'assemblage).",
 r:["Pinot noir","Gamay"],bl:["Chardonnay","Aligoté"],
 s:[["Chablis (Yonne)","Chardonnay vif et minéral."],["Côte de Nuits","Grands rouges de pinot noir : Gevrey-Chambertin, Vosne-Romanée, Nuits-Saint-Georges, Clos de Vougeot."],["Côte de Beaune","Grands blancs : Meursault, Puligny-Montrachet, Corton-Charlemagne. Rouges : Pommard, Volnay."],["Côte chalonnaise","Mercurey, Givry, Rully."],["Mâconnais","Chardonnay : Pouilly-Fuissé, Saint-Véran, Mâcon-Villages."]],
 k:"Hiérarchie en 4 niveaux : appellation régionale (Bourgogne), village (Pommard), premier cru, grand cru. Côte de Nuits + Côte de Beaune = la Côte-d'Or.",
 t:[],l:[],
 top:"Chablis, Gevrey-Chambertin, Meursault, Pommard, Pouilly-Fuissé",q:["Chablis","Meursault","Gevrey-Chambertin","Pouilly-Fuissé","Côte de Nuits","Aligoté"]},
beaujolais:{n:"Beaujolais",w:"Au sud de la Bourgogne, au nord de Lyon",
 b:"Le royaume du gamay. Au nord, les sols granitiques donnent les 10 crus ; au sud (pays des « pierres dorées »), les Beaujolais simples. Vinification souvent en macération carbonique ou semi-carbonique : vins fruités, peu tanniques. Souvent rattaché à la Bourgogne.",
 r:["Gamay noir à jus blanc"],bl:["Chardonnay"],
 s:[["Beaujolais, Beaujolais-Villages","Rouges fruités, à boire jeunes."],["Les 10 crus","Saint-Amour, Juliénas, Chénas, Moulin-à-Vent, Fleurie, Chiroubles, Morgon, Régnié, Brouilly, Côte de Brouilly."]],
 k:"Beaujolais nouveau : vin primeur mis en vente le 3e jeudi de novembre.",
 t:[],l:[["Vinification en rouge (cours 4)","#c4-rouge"]],
 top:"Beaujolais-Villages, Morgon, Fleurie, Moulin-à-Vent",q:["Morgon","Fleurie","Moulin-à-Vent","Brouilly","Primeur du 3e jeudi de novembre"]},
jura:{n:"Jura",w:"Est, entre la Bresse et le massif du Jura",
 b:"Petit vignoble aux vins très typés. Beaucoup de blancs sont élevés « sous voile » : en fût non ouillé, une fine couche de levures se forme à la surface du vin et lui donne des notes de noix.",
 r:["Poulsard","Trousseau","Pinot noir"],bl:["Savagnin","Chardonnay"],
 s:[["Appellations","Arbois, Côtes du Jura, L'Étoile, Château-Chalon (uniquement du vin jaune), Crémant du Jura."],["Vin jaune","100 % savagnin, élevé sous voile au moins 6 ans, vendu en clavelin de 62 cl."],["Vin de paille","Raisins passerillés sur paille ou claies : vin doux."],["Macvin du Jura","Vin de liqueur (VDL) : moût muté au marc."]],
 k:"Vin jaune = savagnin + élevage sous voile + clavelin 62 cl.",
 t:[],l:[["VDN et VDL (cours 3)","#c3-speciaux"]],
 top:"Arbois, Château-Chalon, Côtes du Jura, Macvin",q:["Vin jaune","Savagnin","Château-Chalon","Clavelin","Macvin","Poulsard"]},
savoie:{n:"Savoie",w:"Alpes, autour de Chambéry et jusqu'au lac Léman",
 b:"Vignoble de montagne aux parcelles dispersées sur des pentes bien exposées. Surtout des blancs vifs et légers, à boire jeunes.",
 r:["Mondeuse","Gamay","Pinot noir"],bl:["Jacquère","Altesse","Roussanne (bergeron)","Chasselas"],
 s:[["Vin de Savoie et ses crus","Apremont, Abymes, Chignin, Chignin-Bergeron."],["Roussette de Savoie","Altesse."],["Autres","Seyssel, Crémant de Savoie."]],
 k:"La jacquère est le cépage le plus planté ; la mondeuse est le rouge typique, poivré.",
 t:[],l:[],
 top:"Vin de Savoie (Apremont, Chignin), Roussette de Savoie",q:["Jacquère","Apremont","Mondeuse","Roussette (altesse)"]},
rhone:{n:"Vallée du Rhône",w:"Sud-Est, le long du Rhône, de Vienne à Avignon",
 b:"Deux vignobles très différents. Au nord (septentrional) : coteaux granitiques en terrasses, climat continental, la syrah seule en rouge. Au sud (méridional) : climat méditerranéen, galets roulés, vins d'assemblage dominés par le grenache.",
 r:["Syrah","Grenache","Mourvèdre","Cinsault","Carignan","Counoise"],bl:["Viognier","Marsanne","Roussanne","Grenache blanc","Clairette","Muscat"],
 s:[["Rhône nord","Côte-Rôtie (syrah, avec un peu de viognier possible), Condrieu (100 % viognier), Hermitage, Crozes-Hermitage, Saint-Joseph, Cornas (100 % syrah)."],["Rhône sud","Châteauneuf-du-Pape (jusqu'à 13 cépages), Gigondas, Vacqueyras, Lirac, Tavel (uniquement du rosé), Rasteau, Muscat de Beaumes-de-Venise (VDN)."],["Côtes du Rhône","L'appellation régionale, produite surtout dans le sud. Au-dessus : Côtes du Rhône Villages."]],
 k:"Nord = un seul cépage rouge (syrah). Sud = assemblage, souvent « GSM » : grenache, syrah, mourvèdre.",
 t:[["Roulepierre blanc, Côtes du Rhône (cours 2)","#d-c2"],["Terre de Bussière, IGP Principauté d'Orange (cours 2)","#d-c2"],["Muscat de Beaumes de Venise (cours 3)","#d-c3"],["Domaine de la Janasse rosé, Côtes du Rhône (cours 4)","#d-c4"],["Martin Clerc Syrah, Collines Rhodaniennes (cours 4)","#d-c4"]],l:[["VDN et VDL (cours 3)","#c3-speciaux"]],
 top:"Côtes du Rhône, Côte-Rôtie, Hermitage, Condrieu, Châteauneuf-du-Pape, Tavel",q:["Côte-Rôtie","Châteauneuf-du-Pape","Condrieu (viognier)","Tavel","Hermitage","Muscat de Beaumes-de-Venise","Gigondas"]},
provence:{n:"Provence",w:"Sud-Est, entre le Rhône et les Alpes-Maritimes",
 b:"Le plus ancien vignoble de France, planté par les Grecs autour de Marseille. Climat méditerranéen, mistral. Très majoritairement du rosé, pâle et sec.",
 r:["Grenache","Cinsault","Syrah","Mourvèdre","Tibouren","Carignan"],bl:["Rolle (vermentino)","Ugni blanc","Clairette"],
 s:[["Grandes AOC","Côtes de Provence, Coteaux d'Aix-en-Provence, Coteaux Varois."],["Bandol","Rouges de garde, au moins 50 % de mourvèdre."],["Petites AOC","Cassis (blancs), Bellet, Palette."]],
 k:"Le rosé de Provence est surtout obtenu par pressurage direct, d'où sa robe très pâle.",
 t:[["Château des Platanes, Côtes de Provence (cours 4)","#d-c4"]],l:[["Les rosés (cours 4)","#c4-roses"]],
 top:"Côtes de Provence, Bandol, Cassis",q:["Bandol (mourvèdre)","Cassis","Coteaux d'Aix-en-Provence","Tibouren","Côtes de Provence"]},
corse:{n:"Corse",w:"L'île, en Méditerranée",
 b:"Vignoble insulaire et méditerranéen, avec des cépages qu'on ne trouve presque nulle part ailleurs en France. Forte influence italienne.",
 r:["Nielluccio","Sciaccarello"],bl:["Vermentino"],
 s:[["Patrimonio","Rouges de nielluccio (parent du sangiovese)."],["Ajaccio","Rouges de sciaccarello."],["Autres","Vin de Corse, Muscat du Cap Corse (VDN)."]],
 k:"Nielluccio = Patrimonio ; sciaccarello = Ajaccio ; vermentino pour les blancs.",
 t:[],l:[],
 top:"Patrimonio, Ajaccio, Muscat du Cap Corse",q:["Nielluccio","Sciaccarello","Patrimonio","Muscat du Cap Corse"]},
languedoc:{n:"Languedoc-Roussillon",w:"Sud, de Nîmes aux Pyrénées",
 b:"Le plus grand vignoble de France en surface. Climat méditerranéen chaud et sec. Longtemps un vignoble de volume, aujourd'hui de nombreuses AOC de qualité et la grande IGP Pays d'Oc (vins de cépage).",
 r:["Carignan","Grenache","Syrah","Mourvèdre","Cinsault"],bl:["Picpoul","Grenache blanc","Macabeu","Muscat","Mauzac"],
 s:[["Languedoc","Corbières, Minervois, Fitou, Faugères, Saint-Chinian, Pic Saint-Loup, Picpoul de Pinet (blanc)."],["Limoux","Blanquette de Limoux (mauzac), souvent présentée comme le plus ancien effervescent (1531)."],["Roussillon","Vins doux naturels : Banyuls, Maury, Rivesaltes, Muscat de Rivesaltes. Secs : Collioure, Côtes du Roussillon."],["Muscats du Languedoc","Muscat de Frontignan, de Lunel… (VDN)."]],
 k:"Le Roussillon produit l'essentiel des VDN français : on ajoute de l'alcool pendant la fermentation (mutage) pour garder le sucre.",
 t:[],l:[["VDN et VDL (cours 3)","#c3-speciaux"]],
 top:"Corbières, Minervois, Pic Saint-Loup, Picpoul de Pinet, Banyuls, Blanquette de Limoux",q:["Banyuls","Corbières","Picpoul de Pinet","Blanquette de Limoux","Fitou","Pic Saint-Loup","Maury"]},
bordeaux:{n:"Bordeaux",w:"Sud-Ouest, autour de la Gironde, de la Garonne et de la Dordogne",
 b:"Un des plus grands vignobles d'AOC au monde. Climat océanique tempéré. Des vins d'assemblage, produits par des « châteaux ».",
 r:["Merlot","Cabernet sauvignon","Cabernet franc","Petit verdot","Malbec"],bl:["Sémillon","Sauvignon","Muscadelle"],
 s:[["Rive gauche : Médoc et Graves","Sols de graves (cailloux) : cabernet sauvignon dominant. Pauillac, Margaux, Saint-Julien, Saint-Estèphe, Pessac-Léognan."],["Rive droite : Libournais","Argiles et calcaires : merlot dominant. Saint-Émilion, Pomerol, Fronsac."],["Entre-deux-Mers","Blancs secs, entre Garonne et Dordogne."],["Sauternes et Barsac","Liquoreux de sémillon, grâce à la pourriture noble favorisée par les brumes du Ciron."],["Côtes de Bordeaux","Blaye, Castillon, Cadillac…"]],
 k:"Rive gauche = cabernet sauvignon, rive droite = merlot. Le classement de 1855 hiérarchise les crus du Médoc et de Sauternes.",
 t:[["Château Haut-Grelot 2024 et 2023, Blaye Côtes de Bordeaux (cours 3)","#d-c3"]],l:[["Moelleux et liquoreux (cours 3)","#c3-speciaux"]],
 top:"Pauillac, Margaux, Pessac-Léognan, Saint-Émilion, Pomerol, Sauternes",q:["Pauillac","Saint-Émilion","Sauternes","Pomerol","Entre-deux-Mers","Classement de 1855","Margaux"]},
sudouest:{n:"Sud-Ouest",w:"Sud-Ouest, de Bergerac aux Pyrénées",
 b:"Une mosaïque de petits vignobles. Près de Bordeaux, on retrouve les cépages bordelais ; plus au sud, beaucoup de cépages locaux anciens.",
 r:["Malbec (côt)","Tannat","Négrette","Fer servadou (braucol)","Duras"],bl:["Petit manseng","Gros manseng","Mauzac","Loin de l'œil","Colombard"],
 s:[["Bergerac et Monbazillac","Cépages bordelais ; Monbazillac en liquoreux."],["Cahors","Malbec (côt) : rouges très sombres, le « vin noir »."],["Gaillac","Mauzac, loin de l'œil, braucol, duras."],["Fronton","Négrette."],["Madiran","Tannat : rouges très tanniques. En blanc : Pacherenc du Vic-Bilh."],["Jurançon","Petit et gros manseng, en sec ou en moelleux."],["Côtes de Gascogne (IGP)","Blancs vifs (colombard) et assemblages."]],
 k:"Tannat = Madiran ; malbec (côt) = Cahors ; manseng = Jurançon.",
 t:[["Château d'Aydie, Madiran (cours 1)","#d-c1"],["La Poule aux Œufs d'Or, moelleux de manseng (cours 1)","#d-c1"],["L'Ombre Fraîche, Gaillac (cours 2)","#d-c2"],["Domaine de Pellehaut, Côtes de Gascogne (cours 2)","#d-c2"]],l:[],
 top:"Cahors, Madiran, Jurançon, Gaillac, Bergerac, Monbazillac",q:["Madiran (tannat)","Cahors (malbec)","Jurançon","Gaillac","Monbazillac","Fronton (négrette)"]}
};
window.VM=VM; /* aussi lu par js/regions.js pour les pages régions */
const ORDER=["champagne","alsace","loire","bourgogne","beaujolais","jura","savoie","rhone","provence","corse","languedoc","sudouest","bordeaux"];
const root=document.getElementById("vm");if(!root)return;
const E=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const regs=[...root.querySelectorAll(".vm-reg")],info=document.getElementById("vm-info"),chips=document.getElementById("vm-chips");
let mode="explore",cur=null,deck=[],qi=0,q=null,good=0,tried=0,answered=false;
chips.innerHTML=ORDER.map(r=>'<button type="button" data-r="'+r+'" aria-pressed="false">'+E(VM[r].n)+'</button>').join("");
function mark(r){
  regs.forEach(p=>p.classList.toggle("is-on",p.dataset.r===r));
  root.querySelectorAll(".vm-mk,.vm-lab").forEach(m=>m.classList.toggle("is-on",m.dataset.r===r));
  chips.querySelectorAll("button").forEach(b=>b.setAttribute("aria-pressed",b.dataset.r===r?"true":"false"));
}
function show(r){
  cur=r;mark(r);const d=VM[r];
  const g=(lab,arr,cls)=>'<p><b>'+lab+'</b>'+arr.map(x=>'<span class="vm-g'+cls+'">'+E(x)+'</span>').join("")+'</p>';
  const rp=(window.REGION_OF||{})[r],page=rp&&document.getElementById("r-"+rp);
  info.innerHTML='<p class="kicker">'+E(d.w)+'</p><h3>'+E(d.n)+'</h3><p>'+E(d.b)+'</p>'
   +(page?'<p class="vm-go"><a class="btn" href="#r-'+rp+'">Ouvrir la page '+E(page.dataset.n)+'</a></p>':'')
   +'<div class="vm-grapes">'+g("Rouges",d.r," r")+g("Blancs",d.bl,"")+'</div>'
   +subsHtml(r,d)
   +'<div class="retenir"><p class="mini">À retenir</p><p>'+E(d.k)+'</p></div>'
   +(d.t.length?'<div><p class="mini">Goûté en cours</p><p class="vm-tasted">'+d.t.map(x=>'<a href="'+x[1]+'">'+E(x[0])+'</a>').join("")+'</p></div>':'')
   +(d.l.length?'<div><p class="mini">Voir aussi dans le cours</p><p class="vm-tasted">'+d.l.map(x=>'<a href="'+x[1]+'">'+E(x[0])+'</a>').join("")+'</p></div>':'');
}
function subsHtml(r,d){
  const X=(window.VMX||{})[r];
  if(!X)return '<div class="vm-subs">'+d.s.map(x=>'<div><h4>'+E(x[0])+'</h4><p>'+E(x[1])+'</p></div>').join("")+'</div>';
  const Y=window.YEAR,cn=id=>{const c=Y&&Y.courses.find(c=>c.id===id);return c?(c.ess?'<a href="#f-'+c.id+'">'+E(c.n)+'</a>':E(c.n)+' (à venir)'):"";};
  const crs=[...new Set(X.flatMap(s=>s.crs||[]))];
  return '<p class="mini">Les sous-régions · clique pour ouvrir</p><div class="vm-subs">'+X.map((s,i)=>'<details id="vms-'+r+'-'+i+'"><summary><h4>'+E(s.t)+'</h4><span class="vm-sum">'+E(s.s)+'</span></summary><div class="vm-sub-body"><dl>'+
    (s.ap?'<dt>Appellations</dt><dd>'+E(s.ap)+'</dd>':'')+(s.c?'<dt>Cépages</dt><dd>'+E(s.c)+'</dd>':'')+(s.x?'<dt>À savoir</dt><dd>'+E(s.x)+'</dd>':'')+
    ((s.crs||[]).length?'<dt>Cours</dt><dd>'+s.crs.map(cn).join(" · ")+'</dd>':'')+'</dl></div></details>').join("")+'</div>'+
    (crs.length?'<div><p class="mini">Les cours de l\'année sur cette région</p><p class="vm-tasted">'+crs.map(id=>{const c=Y.courses.find(c=>c.id===id);return c&&c.ess?'<a href="#f-'+c.id+'">'+E(c.n+" · "+c.t)+'</a>':'';}).join("")+'</p></div>':'');
}
window.VM_NAMES={};ORDER.forEach(k=>window.VM_NAMES[k]=VM[k].n);
window.vmOpen=function(r,i){if(!VM[r])return;if(mode!=="explore")setMode("explore");show(r);
  if(i!=null){const d=document.getElementById("vms-"+r+"-"+i);if(d){d.open=true;d.classList.add("vm-flash");requestAnimationFrame(()=>d.scrollIntoView({block:"center"}));return;}}
  requestAnimationFrame(()=>info.scrollIntoView({block:"start"}));};
function empty(){info.innerHTML='<p class="vm-empty">Choisis une région sur la carte ou dans la liste ci-dessus pour afficher sa fiche.</p>';}
function newQ(){
  if(qi>=deck.length){deck=[];ORDER.forEach(r=>VM[r].q.forEach(c=>deck.push([r,c])));for(let i=deck.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[deck[i],deck[j]]=[deck[j],deck[i]];}qi=0;}
  q=deck[qi++];answered=false;regs.forEach(p=>p.classList.remove("is-ok","is-ko","is-on"));
  info.innerHTML='<p class="kicker">Quiz · où est-ce ?</p><h3>'+E(q[1])+'</h3><p>Clique sur la région de la carte où l\'on trouve ceci.</p><div class="ex-foot"><p id="vm-fb" aria-live="polite"></p><div class="ex-actions"><span class="score">'+good+' / '+tried+'</span><button type="button" class="btn" id="vm-next">Suivant</button></div></div>';
  document.getElementById("vm-next").onclick=newQ;
}
function answer(r){
  if(answered)return;answered=true;tried++;const ok=r===q[0];if(ok)good++;
  regs.forEach(p=>{if(p.dataset.r===q[0])p.classList.add("is-ok");else if(p.dataset.r===r)p.classList.add("is-ko");});
  info.querySelector(".score").textContent=good+" / "+tried;
  document.getElementById("vm-fb").innerHTML=ok?'<span class="ok">Juste !</span> '+E(VM[q[0]].n)+'.':'<span class="ko">Non.</span> Réponse : '+E(VM[q[0]].n)+' (tu as cliqué : '+E(VM[r].n)+').';
}
function setMode(m){
  mode=m;root.classList.toggle("vm-quiz",m==="quiz");chips.hidden=m==="quiz";
  document.getElementById("vm-explore").setAttribute("aria-pressed",m==="explore"?"true":"false");
  document.getElementById("vm-quiz").setAttribute("aria-pressed",m==="quiz"?"true":"false");
  if(m==="quiz"){mark(null);newQ();}else{regs.forEach(p=>p.classList.remove("is-ok","is-ko"));cur?show(cur):empty();}
}
function pickR(r){if(mode==="quiz")answer(r);else show(r);}
regs.forEach(p=>{
  p.addEventListener("click",()=>pickR(p.dataset.r));
  p.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();pickR(p.dataset.r);}});
});
chips.addEventListener("click",e=>{const b=e.target.closest("button");if(b)show(b.dataset.r);});
document.getElementById("vm-explore").onclick=()=>setMode("explore");
document.getElementById("vm-quiz").onclick=()=>setMode("quiz");
/* Tableau récapitulatif */
document.getElementById("vm-tbody").innerHTML=ORDER.map(r=>{const d=VM[r];return '<tr><td><a href="#carte" data-vm="'+r+'">'+E(d.n)+'</a></td><td>'+E(d.r.join(", "))+'</td><td>'+E(d.bl.join(", "))+'</td><td>'+E(d.top)+'</td></tr>';}).join("");
document.getElementById("vm-tbody").addEventListener("click",e=>{const a=e.target.closest("a[data-vm]");if(a){if(mode!=="explore")setMode("explore");show(a.dataset.vm);}});
function fromHash(){if(location.hash==="#vm-quiz"&&mode!=="quiz")setMode("quiz");}
window.addEventListener("hashchange",fromHash);
empty();fromHash();
})();
