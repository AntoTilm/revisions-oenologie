/* ===== L'année 2026–2027 : modules vins de France =====
   Ajouter un cours : compléter son entrée dans YEAR.courses (ess = l'essentiel, det = blocs repliables [titre, html], acc = accords [appellation, cépage, profil, plat]).
   Une entrée sans "ess" s'affiche « à venir » dans le programme. */
window.YEAR={
modules:[
 {id:"m1",t:"Module France 1",st:"Continental et méditerranéen",regions:"Alsace, Bourgogne, Rhône, Provence-Corse, Languedoc-Roussillon",
  exam:"Examen : lundi 15/02 · 2e session lundi 08/03 à 16 h",fiches:"5 fiches à remettre : Alsace, Bourgogne, Rhône, Provence ou Corse, Languedoc-Roussillon",
  q5:"Expliquer une mention (ex. « Gentil » en Alsace) ou présenter le niveau hiérarchique d'une appellation",
  mets:["Dos de saumon mi-cuit au beurre blanc citronnelle","Lotte à la badiane","Croquettes au fromage","Escargots à l'ail","Côte de bœuf maturée grillée","Mignon de veau rosé, jus réduit","Salade de caille fumée et gésiers confits","Huîtres ou moules marinières de l'étang de Thau","Magret de canard aux fruits rouges","Carpaccio de melon et langoustines à la coriandre","Canard rôti aux cerises noires","Gardianne de taureau","Fleur de courgette farcie","Daube provençale","Tartare de veau aux tomates confites et olives","Dorade en croûte de sel","Navarin d'agneau","Brochettes de bœuf marinées","Tartare de truite, citron et aneth","Terrine de lapereau","Coquelet à l'estragon","Saint-Jacques snackées, crumble au parmesan","Côte de veau aux girolles","Foie gras poêlé, chutney d'orange","Vol-au-vent","Carré de porc saumuré","Tajine, nems au curry","Asperges blanches sauce maltaise","Tartare de daurade au citron vert","Joues de porc braisées","Volaille de Bresse aux champignons","Pigeonneau rosé à la française","Gigot d'agneau de 7 h aux épices orientales"]},
 {id:"m2",t:"Module France 2",st:"Continental et océanique",regions:"Sud-Ouest, Bordeaux, Loire, Savoie, Jura, Champagne",
  exam:"Examen : lundi 14/06 · 2e session mardi 31/08 à 16 h",fiches:"6 fiches à remettre : Sud-Ouest, Bordeaux, Loire, Savoie, Jura, Champagne",
  q5:"Expliquer l'échelle des crus d'une AOP ou présenter le fonctionnement d'un classement historique (1855, Saint-Émilion, Graves…)",
  mets:["Plateau de fruits de mer","Volaille rôtie, butternut au miel","Blanquette de veau","Risotto aux champignons","Homard grillé aux herbes","Salade de crevettes grises","Tarte à l'oignon","Saumon fumé à l'aneth","Sandre au beurre blanc et asperges","Sole meunière","Poulet aux morilles","Tomme de Savoie","Feuilleté d'écrevisses au persil","Plateau de sushis","Ris de veau rôti à la vanille","Dos de saumon à l'oseille","Lard confit et crème de petits pois frais","Plateau de charcuteries","Carpaccio de canard, pickles de betterave rouge","Onglet à l'échalote","Tartare de bœuf","Pot-au-feu","Poivron farci","Tournedos Rossini","Canard à l'orange","Cassoulet","Carré d'agneau rôti au thym","Caille farcie au ris de veau","Poêlée de champignons des bois","Saucisse de Morteau grillée","Petit salé aux lentilles","Civet de sanglier","Burger de canard","Thon rouge grillé"]}
],
refs:[
 {n:"Fiche de dégustation de l'année",h:"#fiche-france"},
 {n:"Les cépages blancs et rouges",h:"#cepages"},
 {n:"Accords mets-vins de l'examen",h:"#accords"}
],
courses:[
/* ---------------- MODULE 1 ---------------- */
{id:"alsace1",n:"Alsace 1",t:"Situation, cépages et AOP Alsace",m:1,r:"alsace",src:"Alsace partie 1",
 ess:[
 "Bas-Rhin et Haut-Rhin : une bande de 100 km sur 2 à 4 km entre les <b>Vosges</b> et le <b>Rhin</b>. Climat <b>semi-continental</b>, sec et ensoleillé : les Vosges arrêtent la pluie.",
 "<b>53 AOP</b> : Alsace, Alsace Grand Cru (51 crus), Crémant d'Alsace.",
 "Le nom du cépage sur l'étiquette <b>n'est pas l'AOP</b> et n'est pas obligatoire.",
 "<b>Gentil</b> = assemblage plus exigeant, au moins 50 % de riesling, pinot gris, muscat ou gewurztraminer. <b>Edelzwicker</b> = assemblage simple.",
 "Bouteille <b>flûte d'Alsace</b> (vin du Rhin) obligatoire, sauf pour le crémant.",
 "Cépages : riesling 22 %, pinot blanc 21 %, gewurztraminer 19 %, pinot gris 15 %, pinot noir 10 % (seul rouge), sylvaner 8 %.",
 "Crémant d'Alsace : méthode traditionnelle, surtout pinot blanc ; 21 % de la production."],
 det:[
 ["Situation, climat et sols","<p>15 500 ha en production. Pluviométrie <b>faible</b>, temps sec et ensoleillé : un micro-climat protégé par le massif vosgien. Sols très variés d'un village à l'autre : granit, argile, calcaire, grès, schiste, marno-calcaire.</p>"],
 ["Les cépages","<p>Chasselas, auxerrois, pinot blanc, pinot gris, pinot noir, sylvaner, muscat, gewurztraminer, riesling, savagnin rose… et le chardonnay (pour le crémant).</p><ul class='plain'><li><b>Riesling</b> : robe pâle à reflets verts, citron, fleurs blanches, minéral, hydrocarbures avec l'âge ; corps longiligne, acidité vive.</li><li><b>Pinot gris</b> : robe paille à dorée, orange confite, miel, épices, sous-bois ; volumineux, souvent du sucre résiduel.</li><li><b>Gewurztraminer</b> : jaune doré intense, litchi, rose, épices ; ample, suave, souvent du sucre résiduel.</li><li><b>Sylvaner</b> : robe claire à reflets verts, nez discret (agrumes, fleurs blanches, herbe coupée), bouche franche et fraîche.</li></ul>"],
 ["L'AOP Alsace et ses mentions","<p>L'AOP Alsace fait <b>74 %</b> de la production, dont 92 % de blancs. Elle se décline :</p><ul class='plain'><li>+ <b>nom du cépage</b> (mention classique)</li><li>+ <b>dénomination géographique</b> : Côte de Rouffach, Blienschwiller, Côtes de Barr, Klevener de Heiligenstein (uniquement savagnin rose), Saint-Hippolyte, Ottrot, Rodern, Vallée Noble, Val Saint-Grégoire, Scherwiller, Wolxheim, Bergheim, Coteaux du Haut-Kœnigsbourg</li><li>+ <b>nom d'un lieu-dit</b></li><li>+ <b>Gentil</b> (assemblage, au moins 50 % de riesling, pinot gris, muscat, gewurztraminer)</li><li>+ <b>Edelzwicker</b> (assemblage)</li></ul><p>Plus l'AOP Crémant d'Alsace (blanc et rosé) et l'AOP Alsace Grand Cru (avec le nom du terroir) : voir <a href='#f-alsace2'>Alsace 2</a>.</p>"],
 ["Le complantage","<p>Planter plusieurs variétés sur le même terrain. Le grand cru <b>Altenberg de Bergheim</b> autorise des assemblages de raisins pressés ensemble (riesling, pinot gris, gewurztraminer, plus chasselas, pinot noir, pinot blanc, muscat), sans mentionner les cépages. Le <b>Kaefferkopf</b> autorise aussi l'assemblage.</p>"]],
 acc:[["Alsace Sylvaner","Sylvaner","Léger, vif, désaltérant","Quiche aux légumes"],["Alsace Pinot blanc","Pinot blanc","Souple, rond, discret","Tarte à l'oignon, terrine de lapereau"],["Alsace Riesling","Riesling","Sec, tendu, minéral","Poissons ou viandes fumés, choucroute"],["Alsace Muscat","Muscat à petits grains / ottonel","Sec, aromatique, croquant","Asperges blanches sauce maltaise"],["Alsace Pinot gris","Pinot gris","Gourmand, structuré, demi-sec possible","Terrine de foie gras, volaille rôtie aux épices"],["Alsace Gewurztraminer","Gewurztraminer","Riche, épicé, floral, parfois demi-sec","Curry de volaille, munster affiné"],["Alsace Pinot noir","Pinot noir","Fruité, léger à structuré","Sandre au pinot noir"]]},

{id:"alsace2",n:"Alsace 2",t:"Grands crus, VT et SGN",m:1,r:"alsace",src:"Alsace partie 2",
 ess:[
 "<b>51 grands crus</b> de 3 à 80 ha, 700 ha au total : seulement <b>4 %</b> des vins d'Alsace.",
 "Étiquette : <b>millésime</b> et <b>nom du grand cru</b> obligatoires ; cépages admis : <b>riesling, gewurztraminer, pinot gris, muscat</b>.",
 "Exceptions : <b>Zotzenberg</b> autorise le sylvaner ; <b>Kirchberg de Barr</b>, <b>Hengst</b> (2022) et <b>Vorbourg</b> (2024) le pinot noir ; <b>Altenberg de Bergheim</b> et <b>Kaefferkopf</b> (dernier reconnu, 2007) les assemblages.",
 "<b>Vendanges tardives (VT)</b> : raisins en surmaturité, les 4 cépages nobles, vins moelleux.",
 "<b>Sélection de grains nobles (SGN)</b> : tries successives de grains atteints de <i>Botrytis cinerea</i>, vins liquoreux ; le cépage s'efface derrière la concentration.",
 "<b>Vins orange</b> : blancs vinifiés avec macération des peaux, comme un rouge : couleur, tanins, structure.",
 "Accords à l'apéritif : éviter le sucre résiduel (crémant, pinot blanc, sylvaner, muscat sec)."],
 det:[
 ["Les 51 grands crus, du nord au sud","<p><b>Bas-Rhin</b> : Steinklotz (Marlenheim), Engelberg, Altenberg de Bergbieten, Altenberg de Wolxheim, Bruderthal (Molsheim), Kirchberg de Barr, Zotzenberg (Mittelbergheim), Kastelberg, Wiebelsberg et Moenchberg (Andlau), Muenchberg (Nothalten), Winzenberg (Blienschwiller), Frankstein (Dambach-la-Ville), Praelatenberg (Kintzheim), Gloeckelberg (Rodern, Saint-Hippolyte).</p><p><b>Autour de Ribeauvillé et Riquewihr</b> : Altenberg de Bergheim, Kanzlerberg (Bergheim), Geisberg, Kirchberg de Ribeauvillé, Osterberg (Ribeauvillé), Rosacker (Hunawihr), Froehn (Zellenberg), Schoenenbourg (Riquewihr, Zellenberg), Sporen (Riquewihr), Sonnenglanz (Beblenheim), Mandelberg, Marckrain, Mambourg (Sigolsheim), Furstentum, Schlossberg (Kientzheim).</p><p><b>Autour de Colmar</b> : Kaefferkopf (Ammerschwihr), Wineck-Schlossberg, Sommerberg, Florimont, Brand (Turckheim), Hengst (Wintzenheim), Steingrubler (Wettolsheim), Eichberg et Pfersigberg (Eguisheim), Hatschbourg, Goldert (Gueberschwihr), Steinert, Vorbourg (Rouffach), Zinnkoepflé (Soultzmatt), Pfingstberg (Orschwihr).</p><p><b>Sud</b> : Spiegel, Kessler, Kitterlé, Saering (Guebwiller), Ollwiller (Wuenheim), Rangen (Thann et Vieux-Thann).</p>"],
 ["Deux exemples à connaître","<ul class='plain'><li><b>Rangen</b> (Thann et Vieux-Thann, 22 ha) : roche volcanique ; le plus méridional d'Alsace ; finesse, puissance, longue garde.</li><li><b>Schoenenbourg</b> (Riquewihr et Zellenberg, 53 ha) : marnes gypseuses et grès vosgien ; vins amples, minéralité « pierre à fusil » apportée par le gypse, longue garde.</li></ul>"],
 ["VT et SGN en détail","<p><b>VT</b> : récolte plusieurs semaines après le début officiel des vendanges ; riesling, pinot gris, muscat, gewurztraminer ; richesse en sucre de 235 à 257 g/L selon le cours.</p><p><b>SGN</b> : mêmes cépages, tries des grains botrytisés ; richesse de 276 à 306 g/L. Accords : VT avec un munster ou un dessert aux fruits exotiques, SGN avec un pain perdu aux épices ou un kougelhopf.</p>"]],
 acc:[["Alsace Grand Cru Riesling","Riesling","Sec, très minéral, intense, long","Dos de saumon mi-cuit, beurre blanc citronnelle"],["Alsace Grand Cru Muscat","Muscat","Aromatique, floral, sec à demi-sec","Carpaccio de melon et langoustines à la coriandre"],["Alsace Grand Cru Sylvaner","Sylvaner","Vif, droit, parfois demi-sec","Tartare de truite, citron et aneth"],["Alsace Grand Cru Pinot gris","Pinot gris","Moelleux, riche, grande amplitude","Foie gras poêlé, chutney d'orange"],["Alsace Grand Cru Gewurztraminer","Gewurztraminer","Sec à demi-sec, épicé, puissant","Tajine, nems au curry"],["Alsace Grand Cru Pinot noir","Pinot noir","Structuré, boisé, concentré","Filet de biche sauce poivrade"],["Alsace ou GC Vendanges tardives","Riesling, PG, gewurz, muscat","Moelleux, richesse et fraîcheur","Munster, dessert aux fruits exotiques"],["Alsace ou GC SGN","Riesling, PG, gewurz, muscat","Liquoreux, intense, botrytis","Pain perdu aux épices, kougelhopf"]]},

{id:"bourgogne1",n:"Bourgogne 1",t:"Hiérarchie, Chablis et Grand Auxerrois",m:1,r:"bourgogne",src:"Bourgogne 1 Auxerre et Chablis",
 ess:[
 "Yonne, Côte-d'Or, Saône-et-Loire : 200 km de Dijon au nord de Lyon ; 32 300 ha (+ 13 500 ha de Beaujolais). Climat <b>continental</b> : hivers rigoureux, gelées tardives, étés chauds.",
 "Deux grands cépages, vinifiés seuls : <b>pinot noir</b> et <b>chardonnay</b> ; aussi gamay, aligoté, sauvignon.",
 "<b>84 AOP en 4 niveaux</b> : régionales (7 · 51 % de la production) → communales (44 · 38 %) → communales + climat <b>1er cru</b> (10 %) → <b>grands crus</b> (33 · 1 %).",
 "<b>Climat</b> = parcelle délimitée aux qualités uniques, au cœur d'une AOP communale. 635 climats classés 1er cru.",
 "Un <b>grand cru</b> est une AOP autonome : seul le nom du climat figure, avec « Grand Cru » (ex. Chambertin).",
 "<b>Chablis</b> : sol <b>kimméridgien</b> (marnes à petites huîtres fossiles), les blancs les plus vifs de Bourgogne. Petit Chablis → Chablis → Chablis 1er cru (40) → Chablis grand cru (7).",
 "Histoire : les moines cisterciens ; 1395, Philippe le Hardi interdit le gamay ; 1859, première vente des Hospices de Beaune."],
 det:[
 ["Situation, sols et histoire","<p>Sols : argilo-calcaire, marno-calcaire, argilo-siliceux et, à Chablis, le kimméridgien. Vignoble gallo-romain mis en valeur par les moines cisterciens ; morcelé à la Révolution (1790, biens du clergé confisqués) ; les Bourguignons montrent après le phylloxéra qu'on fait de grands vins avec des pieds greffés.</p>"],
 ["Les 7 AOP régionales","<ul class='plain'><li><b>Bourgogne</b> (rouge, blanc, rosé), seul ou avec une dénomination géographique (« identifiés ») : Hautes-Côtes de Nuits, Hautes-Côtes de Beaune, Côte d'Or, Le Chapitre, Montrecul, Chitry, Tonnerre, Épineuil, Coulanges-la-Vineuse, Côtes d'Auxerre, Côte Saint-Jacques, La Chapelle Notre-Dame, Côte chalonnaise, Côtes du Couchois</li><li><b>Bourgogne Aligoté</b></li><li><b>Bourgogne Passe-tout-grains</b> (pinot noir et gamay)</li><li><b>Bourgogne mousseux</b> (rouge)</li><li><b>Crémant de Bourgogne</b> (blanc, rosé)</li><li><b>Coteaux bourguignons</b> (couvre aussi le Beaujolais)</li><li><b>Mâcon</b> (Mâcon, Mâcon-Villages, Mâcon + village)</li></ul>"],
 ["Communales, 1ers crus et grands crus","<p><b>Communale</b> : le nom de la commune (Gevrey-Chambertin, Fixin, Vosne-Romanée, Beaune, Pommard, Saint-Aubin, Mercurey, Saint-Véran…), éventuellement + un lieu-dit (Pommard « Les Épenots »).</p><p><b>1er cru</b> : commune + nom du climat + « 1er cru ».</p><p><b>Grand cru</b> : 33 climats exceptionnels devenus des AOP autonomes ; seul le nom du climat et « Grand Cru » figurent sur l'étiquette.</p>"],
 ["Chablis et le Grand Auxerrois","<p><b>Chablis</b> : Petit Chablis, Chablis, Chablis 1er cru (40 climats), Chablis grand cru (7 climats) : <b>Valmur, Bougros, Les Grenouilles, Blanchot, Vaudésir, Les Clos, Les Preuses</b>. « La Moutonne » (Long-Depaquit) est un cru historique à cheval sur Vaudésir et Les Preuses, parfois appelé le 8e.</p><p><b>Autres communales</b> : <b>Saint-Bris</b> (sauvignon), <b>Irancy</b> (rouge uniquement), <b>Vézelay</b> (blanc uniquement).</p><p>Le kimméridgien : calcaire marin de plus de 150 millions d'années, mêlé d'argile, riche en petites huîtres fossiles (<i>Exogyra virgula</i>) : pureté, finesse, minéralité.</p>"]],
 acc:[["Saint-Bris","Sauvignon","Tendu, vif, salin","Tartare de daurade au citron vert"],["Petit Chablis","Chardonnay","Léger, frais, floral","Gougères, croquettes au fromage"],["Chablis","Chardonnay","Tendu, droit, minéral","Huîtres creuses au naturel"],["Chablis 1er cru","Chardonnay","Structuré, élégant, salin","Saint-Jacques snackées, crumble au parmesan"],["Chablis grand cru","Chardonnay","Puissant, ample, racé","Homard rôti au beurre d'algues"]]},

{id:"bourgogne2",n:"Bourgogne 2",t:"La Côte de Nuits",m:1,r:"bourgogne",src:"Bourgogne 2 Côte de Nuits",
 ess:[
 "Les plus grands <b>rouges</b> de Bourgogne (pinot noir) : 9 AOP communales et <b>24 grands crus</b>. Les blancs y sont rares.",
 "Du nord au sud : <b>M</b>arsannay, <b>F</b>ixin, <b>G</b>evrey-Chambertin, <b>M</b>orey-Saint-Denis, <b>C</b>hambolle-Musigny, <b>V</b>ougeot, <b>V</b>osne-Romanée, <b>N</b>uits-Saint-Georges : « Monsieur Faites Gaffe, Mon Chien Vous Voit Noir ».",
 "<b>Marsannay</b> : seule AOP communale de Bourgogne qui produit du rosé.",
 "<b>Gevrey-Chambertin</b> : 9 grands crus, dont Chambertin et Chambertin-Clos de Bèze.",
 "<b>Vosne-Romanée</b> : La Romanée-Conti (1,81 ha) et La Tâche, monopoles du Domaine de la Romanée-Conti ; aussi Richebourg, Romanée-Saint-Vivant, La Romanée, La Grande Rue.",
 "<b>Clos de Vougeot</b> : 51 ha, le plus grand grand cru de la Côte de Nuits.",
 "Côte de Nuits-Villages : communes voisines (Brochon, Corgoloin…)."],
 det:[
 ["Gevrey-Chambertin et Morey-Saint-Denis","<p><b>Gevrey-Chambertin</b> (communale et 1ers crus), grands crus : Chambertin (13 ha), Chambertin-Clos de Bèze (15 ha), Charmes-Chambertin (29 ha), Mazoyères-Chambertin, Griotte-Chambertin (2,5 ha), Chapelle-Chambertin, Latricières-Chambertin, Mazis-Chambertin, Ruchottes-Chambertin (3 ha).</p><p><b>Morey-Saint-Denis</b> : Clos de Tart, Clos Saint-Denis, Clos de la Roche, Clos des Lambrays, et une partie des Bonnes-Mares.</p>"],
 ["Chambolle, Vougeot, Vosne, Nuits","<p><b>Chambolle-Musigny</b> : Musigny (10,6 ha, aussi un peu de blanc) et Bonnes-Mares (15,5 ha, partagé avec Morey).</p><p><b>Vougeot</b> : Clos de Vougeot (51 ha).</p><p><b>Flagey-Échezeaux</b> : Échezeaux (36 ha) et Grands-Échezeaux (9 ha).</p><p><b>Vosne-Romanée</b> : La Romanée-Conti, La Tâche, Richebourg, Romanée-Saint-Vivant, La Romanée (0,85 ha), La Grande Rue.</p><p><b>Nuits-Saint-Georges</b> : communale et 1ers crus, pas de grand cru.</p>"],
 ["Les blancs de la Côte de Nuits","<p>Rares : Marsannay, Fixin, Morey-Saint-Denis, Musigny grand cru, Vougeot, Nuits-Saint-Georges.</p>"]],
 acc:[["Hautes-Côtes de Nuits rouge","Pinot noir","Rond, souple, tanins savoureux","Volaille rôtie, jus court au thym"],["Marsannay rosé","Pinot noir","Plaisant à croquant","Charcuterie fine, salade de lentilles au lard"],["Marsannay rouge","Pinot noir","Gourmand et structuré","Filet mignon de porc, jus au cassis"],["Gevrey-Chambertin","Pinot noir","Élégant, charpenté, tanins fins","Côte de veau aux girolles"],["Nuits-Saint-Georges 1er cru","Pinot noir","Puissant, profond, tanins fermes","Canard rôti aux cerises noires"],["Clos de Vougeot","Pinot noir","Large, dense, riche, de garde","Filet de bœuf Rossini"]]},

{id:"bourgogne3",n:"Bourgogne 3",t:"Côte de Beaune et Côte chalonnaise",m:1,r:"bourgogne",src:"Bourgogne 3 Côte de Beaune et Chalonnaise",
 ess:[
 "Côte de Beaune : les grands <b>blancs</b> de chardonnay, et des rouges. <b>8 grands crus</b>. Le prof : « pas d'astuce, il faut mémoriser les villages ».",
 "Au nord, la colline de Corton : <b>Corton</b> (grand cru surtout rouge), <b>Corton-Charlemagne</b> et <b>Charlemagne</b> (blancs).",
 "Au sud, les <b>Montrachet</b> (Puligny et Chassagne) : Montrachet, Bâtard-, Chevalier-, Bienvenues-Bâtard-, Criots-Bâtard-Montrachet, <b>blanc uniquement</b>.",
 "Rouge uniquement : <b>Volnay, Pommard, Blagny</b> et la Côte de Beaune-Villages.",
 "<b>Meursault</b> : grand village de blancs, avec des 1ers crus mais pas de grand cru.",
 "Côte chalonnaise : <b>pas de grand cru</b>, des 1ers crus, un bon rapport qualité-prix. Rully, Mercurey, Givry (blanc et rouge), Montagny (blanc), <b>Bouzeron = 100 % aligoté</b>."],
 det:[
 ["Les villages de la Côte de Beaune, du nord au sud","<p><b>Nord</b> : Ladoix, Aloxe-Corton, Pernand-Vergelesses, Savigny-lès-Beaune, Chorey-lès-Beaune, Beaune.</p><p><b>Centre</b> : Pommard (rouge), Volnay (rouge), Monthélie, Auxey-Duresses, Saint-Romain, Meursault, Blagny (rouge).</p><p><b>Sud</b> : Puligny-Montrachet, Saint-Aubin, Chassagne-Montrachet, Santenay, Maranges.</p><p>Presque tous existent en 1er cru et en blanc comme en rouge, sauf ceux marqués « rouge ».</p>"],
 ["Corton et Charlemagne","<p>Le grand cru <b>Corton</b> peut être suivi du nom d'un climat (25 possibles : Les Bressandes, Le Clos du Roi, Les Renardes, Les Pougets…). <b>Charlemagne</b> : même aire et même cahier des charges que le Corton-Charlemagne, blanc uniquement ; un seul domaine en produit (La Vougeraie).</p>"],
 ["Autres appellations","<p>Côte de Beaune-Villages (rouge), Bourgogne Hautes-Côtes de Beaune et Côte de Beaune (blanc et rouge).</p>"]],
 acc:[["Bouzeron","Aligoté","Vif, tendu, floral","Escargots à l'ail"],["Rully 1er cru blanc","Chardonnay","Équilibré, légèrement boisé","Vol-au-vent"],["Chassagne-Montrachet 1er cru","Chardonnay","Large, minéral, gras","Turbot aux petits légumes"],["Corton-Charlemagne","Chardonnay","Puissant, racé, grande garde","Ris de veau sauce mousseline"],["Mercurey","Pinot noir","Structuré, fruité, tannique jeune","Joues de porc braisées"],["Volnay","Pinot noir","Fin, élégant, soyeux","Mignon de veau rosé, jus réduit"],["Pommard","Pinot noir","Charpenté, ferme jeune","Bœuf bourguignon"],["Corton","Pinot noir","Dense, profond, de garde","Chevreuil sauce grand veneur"]]},

{id:"bourgogne4",n:"Bourgogne 4",t:"Mâconnais et Beaujolais",m:1,r:"beaujolais",src:"Bourgogne 4 Mâconnais et Beaujolais",
 ess:[
 "<b>Mâconnais</b> : des blancs ronds de chardonnay. Pas de grand cru, pas d'AOP communale en rouge.",
 "AOP communales du Mâconnais : <b>Pouilly-Fuissé</b> (1ers crus depuis 2020), Pouilly-Loché et Pouilly-Vinzelles (1ers crus en 2025), Viré-Clessé, <b>Saint-Véran</b>. Plus Mâcon, Mâcon-Villages, Mâcon + l'un des 27 villages.",
 "<b>Beaujolais</b> : 13 500 ha, le royaume du <b>gamay noir à jus blanc</b>. Ni grand cru ni 1er cru.",
 "Hiérarchie : Beaujolais (et Beaujolais supérieur) → Beaujolais-Villages (38 villages) → <b>10 crus</b>, rouges uniquement.",
 "Les 10 crus du nord au sud : Saint-Amour, Juliénas, Chénas, Moulin-à-Vent, Fleurie, Chiroubles, Morgon, Régnié, Côte de Brouilly, Brouilly.",
 "<b>Macération carbonique</b> : grappes entières dans une cuve saturée de CO₂, fermentation dans chaque baie, puis pressurage et fin de fermentation classique.",
 "Beaujolais nouveau : vendu dès le <b>3e jeudi de novembre</b>, la moitié de la production. Vendange mécanique interdite (grappes entières)."],
 det:[
 ["Le Mâconnais","<p>Les 27 villages qui peuvent suivre « Mâcon » : Azé, Bray, Burgy, Bussières, Chaintré, Chardonnay, Charnay-lès-Mâcon, Cruzille, Davayé, Fuissé, Igé, Loché, Lugny, Mancey, Milly-Lamartine, Montbellet, Péronne, Pierreclos, Prissé, La Roche-Vineuse, Saint-Gengoux-le-National, Serrières, Sologny, Solutré-Pouilly, Uchizy, Vergisson, Verzé, Vinzelles.</p>"],
 ["Le Beaujolais : sols et climats","<p>Climat continental à tendance méditerranéenne. Au nord, <b>granite et schistes</b> (les crus) ; au sud, argilo-calcaire et argile. Rendement autorisé 58 hl/ha.</p><p>Les crus ont des « climats » mais pas de 1ers crus : Côte du Py (Morgon), La Madone (Fleurie), Les Carquelins, La Rochelle (Moulin-à-Vent), Les Capitans (Juliénas), Les Brureaux (Chénas), La Grosse Pierre (Chiroubles), Pisse-Vieille (Brouilly)…</p>"],
 ["La macération carbonique pas à pas","<ol class='plain'><li>Grappes entières (ni éraflées ni foulées) en cuve fermée, saturée de CO₂ : pas d'oxygène.</li><li>Fermentation <b>intracellulaire</b> : dans chaque baie, les enzymes du raisin transforment une partie du sucre en alcool et en arômes.</li><li>Quelques jours à quinze jours, à 25–32 °C pour accélérer.</li><li>Pressurage, puis fermentation alcoolique classique par les levures.</li></ol><p>Résultat : vins très fruités, peu tanniques.</p>"]],
 acc:[["Mâcon-Villages blanc","Chardonnay","Fruité, souple, floral","Terrine de poissons, crème citronnée"],["Saint-Véran","Chardonnay","Frais, fruité, minéral","Truite au four, herbes fraîches"],["Pouilly-Fuissé 1er cru","Chardonnay","Complexe, ample, boisé noble","Volaille de Bresse aux champignons"],["Mâcon rouge","Gamay","Léger, croquant, souple","Saucisson brioché"],["Moulin-à-Vent","Gamay","Gourmand, structuré, tanins","Salade de caille fumée et gésiers confits"],["Morgon","Gamay","Élégant à puissant, apte à vieillir","Carré de porc saumuré"]]},

{id:"rhone1",n:"Rhône 1",t:"Présentation et Rhône septentrional",m:1,r:"rhone",src:"Rhône 1",
 ess:[
 "69 000 ha sur 6 départements (Rhône, Loire, Ardèche, Drôme, Vaucluse, Gard). <b>Nord semi-continental</b>, <b>sud méditerranéen</b>.",
 "<b>18 crus</b> (8 au nord, 10 au sud) + 2 VDN. Les catégories : Côtes du Rhône → Côtes du Rhône-Villages (sud) → CdR-Villages + nom (21) → AOP communales.",
 "Nord : terrasses escarpées, <b>granite et schiste</b>, taille en <b>échalas</b>, vendange mécanique impossible.",
 "Au nord, un seul rouge : la <b>syrah</b>. Blancs : <b>viognier</b>, marsanne, roussanne.",
 "<b>Condrieu</b> et <b>Château-Grillet</b> : 100 % viognier. Château-Grillet = monopole de 4 ha.",
 "<b>Côte-Rôtie</b> : syrah + jusqu'à 20 % de viognier en complantage. <b>Cornas</b> : 100 % syrah.",
 "Hermitage, Crozes-Hermitage : syrah + 15 % max de marsanne/roussanne (Saint-Joseph : 10 %). Saint-Péray : blancs, aussi en effervescent."],
 det:[
 ["Les AOP du Rhône","<p><b>Crus du nord</b> : Côte-Rôtie, Condrieu, Château-Grillet, Saint-Joseph, Crozes-Hermitage, Hermitage, Cornas, Saint-Péray.</p><p><b>Crus du sud</b> : voir <a href='#f-rhone2'>Rhône 2</a>. <b>Autres AOP de la Vallée du Rhône</b> : voir <a href='#f-rhone3'>Rhône 3</a>.</p><p>32 cépages : 14 blancs (viognier, marsanne, roussanne, grenache blanc, clairette, bourboulenc, muscat…), 18 rouges (grenache, syrah, mourvèdre, carignan, cinsault…).</p>"],
 ["Le nord en détail","<ul class='plain'><li><b>Blancs uniquement</b> : Condrieu, Château-Grillet (propriété de François Pinault depuis 2011, 96 hl par an), Saint-Péray (marsanne, roussanne).</li><li><b>Rouges uniquement</b> : Côte-Rôtie (Côte Brune au nord, Côte Blonde au sud ; La Mouline, La Turque, La Landonne), Cornas.</li><li><b>Blancs et rouges</b> : Saint-Joseph, Crozes-Hermitage, Hermitage (lieux-dits : Greffieux, Bessards, Méal, Murets, Dionnières). Hermitage fait aussi un rare vin de paille.</li></ul>"],
 ["Nord ou sud : le paysage","<p>Nord : coteaux escarpés en terrasses, vigne sur échalas, tout à la main. Sud : plaine ou vallons, sols caillouteux, taille en <b>gobelet</b>.</p>"]],
 acc:[["Saint-Péray blanc","Marsanne / roussanne","Frais, floral, amertume, parfois effervescent","Coquelet à l'estragon"],["Saint-Joseph blanc","Marsanne / roussanne","Rond, floral, légèrement gras","Mignon de veau"],["Condrieu","Viognier","Aromatique, gras, riche","Foie gras, pintade à l'abricot"],["Crozes-Hermitage rouge","Syrah","Fruité, souple, épicé","Côtes d'agneau grillées"],["Hermitage rouge","Syrah","Structuré, puissant, complexe","Côte de bœuf maturée grillée"],["Cornas","Syrah","Concentré, sauvage, tannique","Lièvre en sauce, civet de sanglier"],["Côte-Rôtie","Syrah (+ viognier)","Élégant, racé, floral et épicé","Pigeonneau rosé à la française"]]},

{id:"rhone2",n:"Rhône 2",t:"Les crus du Rhône méridional",m:1,r:"rhone",src:"Rhône 2",
 ess:[
 "10 crus au sud : Vinsobres (Drôme, R) ; Châteauneuf-du-Pape (R, B), Gigondas (R, rosé, B depuis 2023), Vacqueyras (3 couleurs), Beaumes-de-Venise (R), Rasteau (R), Cairanne (R, B) dans le Vaucluse ; Laudun (R, B, depuis 2024), Lirac (3 couleurs), <b>Tavel (rosé uniquement)</b> dans le Gard.",
 "<b>Châteauneuf-du-Pape</b> : <b>13 cépages</b> autorisés.",
 "Le sud assemble : grenache en tête, avec syrah et mourvèdre (« GSM »).",
 "2 VDN : <b>Muscat de Beaumes-de-Venise</b> et <b>Rasteau</b>.",
 "Tavel : un rosé puissant et vineux, à table (thon rouge)."],
 det:[
 ["Les 13 cépages de Châteauneuf-du-Pape","<p>Grenache, syrah, mourvèdre, cinsault, picardan, muscardin, counoise, vaccarèse, terret noir, picpoul, roussanne, clairette, bourboulenc.</p>"],
 ["Les crus du sud par couleur","<ul class='plain'><li><b>Rouge uniquement</b> : Vinsobres, Beaumes-de-Venise, Rasteau.</li><li><b>Rosé uniquement</b> : Tavel.</li><li><b>Rouge et blanc</b> : Châteauneuf-du-Pape, Cairanne, Laudun.</li><li><b>Trois couleurs</b> : Vacqueyras, Lirac, Gigondas (blanc depuis 2023).</li></ul>"]],
 acc:[["Lirac blanc","Grenache blanc / clairette / bourboulenc","Rond, floral, frais","Chèvre rôti au miel et thym"],["Gigondas blanc","Clairette / grenache blanc / roussanne","Structuré, généreux, floral","Lotte à la badiane"],["Châteauneuf-du-Pape blanc","Grenache blanc / roussanne / clairette","Ample, gras, complexe","Bar sauce safranée, ris de veau"],["Tavel","Grenache / cinsault / syrah","Puissant, vineux","Thon rouge, tartare de tomates"],["Vacqueyras rouge","Grenache / syrah / mourvèdre","Gourmand, épicé, solaire","Agneau rôti au romarin"],["Rasteau rouge sec","Grenache / syrah","Gourmand, riche, solaire","Daube de bœuf à la provençale"],["Châteauneuf-du-Pape rouge","Grenache / syrah / mourvèdre","Complexe, structuré, de garde","Gigot d'agneau de 7 h aux épices"],["Rasteau VDN · Muscat VDN","Grenache · muscat","Riche, ample, moelleux","Dessert au chocolat · aux fruits"]]},

{id:"rhone3",n:"Rhône 3",t:"Côtes du Rhône et Vallée du Rhône",m:1,r:"rhone",src:"Rhône 3",
 ess:[
 "<b>Côtes du Rhône</b> (régionale) → <b>Côtes du Rhône-Villages</b> (sud uniquement) → CdR-Villages + <b>21 noms géographiques</b>.",
 "Les plus connus des 21 : Sablet, Séguret, Plan de Dieu, Visan, Valréas, Roaix, Signargues, Chusclan, Gadagne.",
 "10 AOP « Vallée du Rhône » : Côtes du Vivarais, Grignan-les-Adhémar (ex-Coteaux du Tricastin), Ventoux, Luberon, Costières de Nîmes, Clairette de Bellegarde, Duché d'Uzès (2013), Clairette de Die, Coteaux de Die, Châtillon-en-Diois.",
 "<b>Clairette de Die</b> : <b>méthode ancestrale</b>, au moins 75 % de muscat : doux, pétillant, floral.",
 "<b>Crémant de Die</b> : méthode traditionnelle, surtout clairette. Coteaux de Die : 100 % clairette."],
 det:[
 ["Les 21 villages par département","<p><b>Vaucluse (11)</b> : Gadagne, Massif d'Uchaux, Plan de Dieu, Puyméras, Sainte-Cécile, Roaix, Sablet, Séguret, Vaison-la-Romaine, Valréas, Visan.</p><p><b>Drôme (6)</b> : Rochegude, Rousset-les-Vignes, Saint-Maurice, Saint-Pantaléon-les-Vignes, Suze-la-Rousse, Nyons.</p><p><b>Gard (3)</b> : Chusclan, Saint-Gervais, Signargues. <b>Ardèche (1)</b> : Saint-Andéol.</p>"],
 ["Le Diois","<p>Cépages blancs : muscat, clairette, chardonnay, aligoté ; rouges : gamay, pinot noir, syrah. Châtillon-en-Diois en blanc et rouge.</p>"]],
 acc:[["Clairette de Die","Muscat à petits grains / clairette","Doux, pétillant, floral","Tarte aux fruits, salade d'agrumes"],["Grignan-les-Adhémar blanc","Grenache blanc / clairette / viognier","Frais, souple, floral","Tian de légumes à la sauge"],["Luberon blanc","Vermentino / grenache blanc / ugni blanc","Fruité, expressif, vif","Salade César, chèvre frais"],["Ventoux rouge","Grenache / syrah","Souple, fruits rouges, épices douces","Travers de porc grillés"],["Costières de Nîmes","Syrah / grenache / mourvèdre","Structuré, solaire, garrigue","Tajine d'agneau aux olives"],["Côtes du Rhône-Villages rouge","Grenache / syrah","Généreux, épicé, souple","Poivron farci"],["CdR-Villages Roaix rouge","Grenache / syrah","Plus concentré, poivré","Gardianne de taureau"]]},

{id:"provence",n:"Provence-Corse",t:"Provence et Corse",m:1,r:"provence",src:"PROVENCE CORSE",
 ess:[
 "Provence : climat méditerranéen chaud et sec, <b>mistral</b> ; sols pierreux argilo-calcaires et siliceux. 27 000 ha (Corse : 7 000 ha, granite et schiste).",
 "Le <b>royaume du rosé</b> : 88,5 % des Côtes de Provence, environ 45 % du rosé français. Surtout en <b>pressurage direct</b> : robe très pâle.",
 "AOP : Côtes de Provence (+ Fréjus, Pierrefeu, Notre-Dame des Anges, La Londe), <b>Sainte-Victoire</b> (AOP à part depuis 2025), Coteaux Varois, Coteaux d'Aix, Pierrevert, Baux de Provence.",
 "<b>Bandol</b> : rouges de 50 à 95 % de <b>mourvèdre</b>, de garde. <b>Cassis</b> : blancs (clairette, marsanne). <b>Palette</b> : 52 ha (Château Simone). <b>Bellet</b> (Nice) : braquet, folle noire, rolle.",
 "<b>Crus classés</b> des Côtes de Provence (1955) : un classement de <b>domaines</b>, 23 au départ, 18 aujourd'hui, jamais révisé.",
 "Corse : <b>niellucciu</b> (= sangiovese) à <b>Patrimonio</b>, <b>sciaccarellu</b> à <b>Ajaccio</b>, <b>vermentinu</b> en blanc ; Muscat du Cap Corse (VDN)."],
 det:[
 ["Les cépages","<p><b>Blancs</b> : rolle (vermentino), sémillon, sauvignon, roussanne, bourboulenc, grenache blanc, clairette, ugni blanc. <b>Rouges</b> : cabernet sauvignon, syrah, grenache, carignan, cinsault, mourvèdre, tibouren, braquet, folle noire ; en Corse, niellucciu et sciaccarellu.</p>"],
 ["Les petites AOP de Provence","<ul class='plain'><li><b>Pierrevert</b> (175 ha, près de Manosque, influence alpine) : 60 % de rosé.</li><li><b>Baux de Provence</b> (325 ha, Alpilles) : 60 % de rouge.</li><li><b>Bandol</b> (1 500 ha) : rouge mourvèdre 50–95 %, rosé, blanc de clairette.</li><li><b>Cassis</b> (204 ha) : blanc clairette et marsanne, rosé ; rouge anecdotique.</li><li><b>Palette</b> (52 ha) : la plus petite AOP aux trois couleurs, 5 producteurs.</li><li><b>Bellet</b> (55 ha, hauteurs de Nice).</li></ul>"],
 ["Les crus classés (1955)","<p>Uniquement en AOP Côtes de Provence, classement permanent de domaines (pas de parcelles), surtout sur le littoral varois (schistes et mer : finesse, fraîcheur). Exemples : Château Minuty, Château Sainte-Roseline, Clos Mireille et Château de Selle (Domaines Ott), Château de Brégançon, Clos Cibonne.</p>"],
 ["La Corse","<p>AOP Vin de Corse (+ Calvi, Figari, Porto-Vecchio, Sartène, Coteaux du Cap Corse), Patrimonio (410 ha), Ajaccio (260 ha), Muscat du Cap Corse (VDN). Niellucciu : robe rubis, fruits confits, prune, tabac, épices douces ; tanins savoureux. Beaucoup de cépages endémiques (carcajolo, minustellu, bianco gentile, biancone…).</p>"]],
 acc:[["Côtes de Provence blanc","Rolle / ugni blanc / clairette","Frais, fruité, souple","Fleur de courgette farcie"],["Cassis blanc","Marsanne / clairette","Minéral, floral, amertume","Poisson grillé aux herbes"],["Palette blanc","Clairette / bourboulenc","Structuré, ample, complexe","Loup, fenouil braisé"],["Baux de Provence rouge","Grenache / syrah / mourvèdre","Épicé, charpenté, puissant","Tajine d'agneau aux figues"],["Côtes de Provence rouge","Grenache / cinsault / syrah","Souple, fruits rouges, épicé","Brochettes de bœuf marinées"],["Bellet rouge","Folle noire / braquet","Épicé, corsé","Daube provençale"],["Bandol rouge","Mourvèdre","Puissant, structuré, de garde","Gibier, bœuf maturé"],["Patrimonio rouge","Niellucciu","Structuré, tannique, garrigue","Charcuterie corse, agneau rôti"],["Ajaccio rouge","Sciaccarellu","Souple, fruité, épicé","Tartare de veau aux tomates confites et olives"],["Muscat du Cap Corse","Muscat à petits grains","Doux, musqué, suave","Gratin d'agrumes aux amandes"]]},

{id:"languedoc1",n:"Languedoc 1",t:"AOP régionale et IGP",m:1,r:"languedoc",src:"Languedoc 1 REGIONAL ET IGP",
 ess:[
 "Environ 220 000 ha : <b>le plus grand vignoble de France</b>. Gard, Hérault, Aude, Pyrénées-Orientales ; climat méditerranéen ; 54 cépages.",
 "AOP régionale <b>Languedoc</b> (ex-« Coteaux du Languedoc » jusqu'en 2007) + dénominations : Pézenas, Sommières, Cabrières, Saint-Christol, La Méjanelle, Saint-Drézéry, Saint-Saturnin, Quatourze, Saint-Georges-d'Orques.",
 "<b>IGP</b> = l'ancien vin de pays (depuis 2009) : 76 en France, en 3 niveaux : <b>régionales</b> (ex. Pays d'Oc), <b>départementales</b> (Gard, Pays d'Hérault, Aude, Côtes Catalanes), <b>de zone</b> (18 en Languedoc-Roussillon).",
 "Le Languedoc produit l'essentiel des IGP françaises (85 % en 2009).",
 "Règles IGP : raisins récoltés et vinifiés dans la zone, cépages recommandés, <b>90 hl/ha maximum</b>.",
 "« Vin de pays » n'est plus qu'une mention facultative ; la mention <b>IGP</b> (ou son logo européen) est obligatoire."],
 det:[
 ["Les IGP régionales","<p>IGP Val de Loire, Comté Tolosan (Sud-Ouest), Comtés Rhodaniens (Rhône, Savoie), Méditerranée (Rhône, Provence, Corse), <b>Pays d'Oc / Terres du Midi</b> (Languedoc), Atlantique (Bordeaux, Charentes).</p>"],
 ["Les IGP de zone du Languedoc-Roussillon","<ul class='plain'><li><b>Gard</b> : Cévennes, Pont du Gard.</li><li><b>Hérault</b> : Haute Vallée de l'Orb, Saint-Guilhem-le-Désert, Vicomté d'Aumelas, Côtes de Thau, Côtes de Thongue, Coteaux de Béziers, Coteaux d'Ensérune.</li><li><b>Aude</b> : Haute Vallée de l'Aude, Cité de Carcassonne, Coteaux de Narbonne, Coteaux de Peyriac, Pays Cathare, Vallée du Paradis, Vallée du Torgan.</li><li><b>Pyrénées-Orientales</b> : Côtes Catalanes (presque tout le département), Côte Vermeille (le vignoble le plus méridional de France continentale, schistes, fortes pentes).</li></ul>"],
 ["Lire une étiquette d'IGP","<p>Trois présentations possibles d'un même vin : « Indication géographique protégée » + nom (obligatoire) ; ou « Vin de pays » + nom avec le logo IGP européen ; le cépage (ex. merlot) est facultatif.</p>"]],
 acc:[]},

{id:"languedoc2",n:"Languedoc 2",t:"Les AOP du Languedoc",m:1,r:"languedoc",src:"Languedoc 2 AOP communales du Languedoc",
 ess:[
 "Blancs : <b>Clairette du Languedoc</b> (100 % clairette) et <b>Picpoul de Pinet</b> (100 % picpoul : iodé, citronné, pour les huîtres de Thau).",
 "Rouges du nord : <b>Faugères</b> (schistes, fraîcheur), <b>Saint-Chinian</b> (+ Roquebrun, Berlou), <b>Terrasses du Larzac</b>, <b>Pic Saint-Loup</b> (2016), Grès de Montpellier (2023), Montpeyroux (2026).",
 "Rouges de l'Aude : <b>Minervois</b> et <b>La Livinière</b> (rouge, fin 2024), <b>Corbières</b> (± 8 000 ha ; Boutenac en rouge), <b>Fitou</b> (rouge, carignan).",
 "Malepère, Cabardès : cépages océaniques (cabernets, merlot) et méditerranéens.",
 "<b>Limoux</b> : Blanquette de Limoux en méthode traditionnelle (mauzac jusqu'à 90 %) ou <b>ancestrale</b> (100 % mauzac) ; Crémant de Limoux (chardonnay et chenin).",
 "Sable de Camargue (2023) : vins gris de <b>grenache gris</b>. La Clape (2015) : bourboulenc et syrah.",
 "VDN : Muscats de Saint-Jean-de-Minervois, Lunel, Mireval, Frontignan."],
 det:[
 ["Les Corbières","<p>4 zones : Corbières maritimes, Hautes Corbières, Corbières de l'Alaric, Corbières centrales. 10 terroirs : Durban, Fontfroide, Lagrasse, Lézignan, Montagne d'Alaric, Quéribus, Saint-Victor, Serviès, Sigean, Termenès. Cépages présents : carignan, lledoner pelut…</p>"],
 ["Deux cépages à reconnaître","<ul class='plain'><li><b>Carignan</b> : robe grenat à rubis, fraise confiturée, parfois animal, épices douces ; entre la fraîcheur de la syrah et la chaleur du grenache. Très présent à Corbières, Fitou, Côtes du Roussillon.</li><li><b>Picpoul</b> : robe pâle, nez discret de fleurs blanches et d'agrumes, parfois artichaut, finale saline.</li></ul>"],
 ["Les couleurs par AOP","<p>Faugères : 85 % rouge. Saint-Chinian : 89 % rouge. Minervois : 94 % rouge. Rouge uniquement : La Livinière, Boutenac, Fitou, Terrasses du Larzac, Grès de Montpellier, Montpeyroux. Rouge et rosé : Pic Saint-Loup, Malepère, Cabardès.</p>"]],
 acc:[["Picpoul de Pinet","Picpoul blanc","Sec, vif, iodé, citronné","Huîtres ou moules de l'étang de Thau"],["La Clape blanc","Bourboulenc / grenache blanc","Rond, floral, salin","Huîtres gratinées, Saint-Jacques"],["Limoux blanc","Chardonnay / mauzac / chenin","Frais, boisé fin, élégant","Dos de cabillaud aux petits légumes"],["IGP Pays d'Hérault","Cinsault","Fruité, souple, peu tannique","Grillades, tartare de bœuf"],["Pic Saint-Loup rouge","Syrah / grenache / mourvèdre","Gourmand, épicé, crème de cassis","Magret de canard aux fruits rouges"],["Faugères rouge","Syrah / grenache / carignan","Droit, ferme, tanins fins","Côte de bœuf sauce au poivre"],["La Livinière","Syrah / grenache / mourvèdre","Concentré, charpenté, de garde","Couronne d'agneau en croûte d'herbes"]]},

{id:"languedoc3",n:"Languedoc 3",t:"Le Roussillon et ses VDN",m:1,r:"languedoc",src:"Languedoc 3 AOP communales du Roussillon",
 ess:[
 "Cépages : grenache (noir, blanc, gris), carignan, syrah, mourvèdre ; blancs : macabeu, malvoisie, muscat, roussanne, vermentino…",
 "Vins secs : <b>Côtes du Roussillon</b> (3 couleurs, + Les Aspres en rouge), <b>Côtes du Roussillon-Villages</b> (rouge ; + Caramany, Latour-de-France, Lesquerde, Tautavel), <b>Collioure</b> (3 couleurs) et <b>Maury sec</b> (rouge, 60–80 % de grenache noir).",
 "<b>VDN</b> : Muscat de Rivesaltes, Rivesaltes, Maury, <b>Banyuls</b>, <b>Banyuls Grand Cru</b> (rouge, au moins 75 % de grenache noir, 30 mois d'élevage).",
 "Élevage <b>réducteur</b> (cuve inox, à l'abri de l'air) : fruit préservé → <b>grenat</b>, <b>rimage</b>.",
 "Élevage <b>oxydatif</b> (fûts, bonbonnes de verre) : <b>ambré</b> (blancs), <b>tuilé</b> (rouges), <b>rancio</b> (noix, curry, caramel), <b>hors d'âge</b> (au moins 5 ans).",
 "Collioure = même zone que Banyuls (4 communes : Collioure, Port-Vendres, Banyuls, Cerbère).",
 "<b>Muscat de Noël</b> : mis en bouteille au plus tard le 1er décembre de l'année de récolte."],
 det:[
 ["Les types de VDN","<ul class='plain'><li><b>Grenat</b> : rouges (75 % grenache noir), macération pendant la fermentation, élevage réducteur 12 mois.</li><li><b>Rimage / vintage</b> : à l'abri de l'air, fruit et fraîcheur (cerise, cassis, mûre, violette, cacao).</li><li><b>Ambré</b> : blancs, moûts séparés des peaux, élevage oxydatif 24 mois : vieil or, fruits confits.</li><li><b>Tuilé</b> : rouges (50 % grenache noir), élevage oxydatif 24 mois : brique, pruneau, orange, cacao.</li><li><b>Rancio</b> : oxydation longue (noix, fruits secs, curry, caramel, cuir).</li><li><b>Hors d'âge</b> : ambrés ou tuilés, 5 ans d'élevage minimum.</li></ul>"],
 ["Deux blancs typiques","<ul class='plain'><li><b>Macabeu</b> : jaune paille, riche en alcool, parfois peu acide ; ananas, anis, miel, noix de coco, fenouil, pain d'épices. Aussi pour les effervescents.</li><li><b>Grenache gris</b> : puissant mais pas brûlant, fenouil, anis, menthol, abricot, fins amers.</li></ul>"],
 ["Côtes du Roussillon-Villages","<p>Exclusivement rouges, en coteaux au nord de Perpignan, le long de l'Agly : schistes, calcaires et granites.</p>"]],
 acc:[["IGP Côtes Catalanes blanc","Grenache blanc et gris / macabeu","Rond, minéral","Anchois, poulpe grillé"],["Collioure blanc","Grenache blanc / gris","Ample, salin","Dorade en croûte de sel"],["Maury sec","Grenache noir","Ample, sec, riche","Navarin d'agneau"],["Côtes du Roussillon-Villages","Grenache / syrah / carignan","Corsé, charpenté, épicé","Gardianne de taureau, grillades"],["Maury VDN","Grenache noir","Doux, fruité, puissant","Fondant au chocolat noir"],["Banyuls Grand Cru","Grenache noir","Doux, intense, chocolaté","Tarte aux figues, fromages bleus"],["Rivesaltes ambré","Grenache blanc / gris","Doux oxydatif, noix","Tarte aux noix, dessert praliné"]]},

/* ---------------- MODULE 2 ---------------- */
{id:"sudouest1",n:"Sud-Ouest 1",t:"Piémont pyrénéen et Gaillac",m:2,r:"sudouest",src:"Sud-Ouest partie 1",
 ess:[
 "50 000 ha sur 12 départements ; IGP régionale <b>Comté Tolosan</b> ; climat océanique ; sols très divers.",
 "<b>Madiran</b> : rouge, <b>tannat</b> (+ cabernets, fer servadou). Même zone en blanc : <b>Pacherenc du Vic-Bilh</b> (sec ou moelleux).",
 "<b>Jurançon</b> : <b>petit et gros manseng</b> ; moelleux ou liquoreux (mention vendanges tardives possible), ou « Jurançon sec ». L'acidité équilibre le sucre.",
 "Autres AOP pyrénéennes : <b>Irouléguy</b> (Pays basque, 3 couleurs), Béarn, Béarn-Bellocq (raffiat), Saint-Mont, Tursan (baroque).",
 "<b>Gaillac</b> (Tarn, le plus méditerranéen) : <b>mauzac</b>, <b>len de l'el</b> ; rouges de <b>duras</b>, <b>fer servadou (braucol)</b>, syrah.",
 "Gaillac fait tout : blanc sec, doux, perlé, rosé, rouge, primeur, méthode ancestrale et traditionnelle, vendanges tardives, vin de voile.",
 "<b>Len de l'el</b> (« loin de l'œil ») : la grappe, au long pédoncule, pousse loin du bourgeon."],
 det:[
 ["Les cépages","<p><b>Blancs</b> : sémillon, sauvignon, muscadelle, mauzac, petit et gros manseng, courbu, ugni blanc, ondenc, arrufiac, len de l'el. <b>Rouges</b> : cabernets, merlot, côt, tannat, braucol, négrette, duras, gamay, syrah.</p>"],
 ["Le Jurançon liquoreux","<p>Petit manseng (parfois avec du gros manseng) : robe or, fruits exotiques (ananas, passion), agrumes, miel, épices, truffe blanche ; la vivacité contrebalance la sucrosité, longue finale.</p>"],
 ["Gaillac en détail","<p>AOP Gaillac et Gaillac Premières Côtes (blanc). Le <b>duras</b>, très ancien cépage gaillacois, presque disparu après le phylloxéra, est revenu avec le décret de 1970 : couleur soutenue, tanins fins, épices, poivre ; assemblé au braucol ou à la syrah. Gaillac perlé : mis en bouteille à la sortie de l'hiver.</p>"]],
 acc:[["Pacherenc du Vic-Bilh sec","Gros manseng / petit courbu","Vif, structuré, citronné","Sushis, tartare de poisson"],["Irouléguy blanc","Petit courbu / gros manseng","Frais, droit, minéral","Ossau-Iraty, fromages de brebis"],["Gaillac blanc sec","Mauzac / len de l'el / sauvignon","Fruité, souple, floral","Feuilleté d'écrevisses au persil"],["Gaillac rouge","Braucol / duras / syrah","Fruité, épicé","Confit ou magret de canard"],["Madiran","Tannat","Puissant, tannique, de garde","Côte de bœuf, civet de sanglier"],["Jurançon moelleux","Petit manseng","Moelleux, exotique, équilibré","Tarte aux fruits exotiques, foie gras"],["Gaillac vendanges tardives","Len de l'el / mauzac","Liquoreux, confit, floral","Bleu des Causses, dessert aux pommes"]]},

{id:"sudouest2",n:"Sud-Ouest 2",t:"Fronton, Cahors, Bergerac",m:2,r:"sudouest",src:"Sud-Ouest partie 2",
 ess:[
 "<b>Fronton</b> : <b>négrette</b> (fruits noirs, violette, épices, tanins souples).",
 "Aveyron : <b>Marcillac</b> (au moins 90 % de <b>fer servadou</b>, appelé mansois), Entraygues-le-Fel, Estaing, Côtes de Millau.",
 "<b>Cahors</b> : <b>malbec</b> (= côt = auxerrois), le « vin noir » ; le Cahors « moderne » est plus fin et fruité.",
 "Lot-et-Garonne : Buzet, Brulhois, Côtes du Marmandais, Côtes de Duras : cépages bordelais.",
 "Dordogne : <b>Bergerac</b> (Bergerac sec en blanc), Côtes de Bergerac, Montravel, <b>Pécharmant</b> (rouge).",
 "Liquoreux botrytisés de sémillon, sauvignon, muscadelle : <b>Monbazillac</b>, Saussignac, Haut-Montravel, Côtes de Montravel, Rosette."],
 det:[
 ["Cahors traditionnel et moderne","<p>Traditionnel : très sombre, rustique, tannique, des décennies de garde. Moderne : extraction plus douce, élevage maîtrisé, parfois amphore ou béton : tanins plus fins, fruit noir, accessible jeune.</p>"],
 ["Marcillac et le fer servadou","<p>Robe intense à reflets violets, fruits rouges épicés, structure tannique présente, une note « ferreuse ».</p>"]],
 acc:[["Côtes de Duras blanc","Sauvignon / sémillon","Frais, floral, fruité","Fromage de chèvre"],["Bergerac sec","Sauvignon / sémillon / muscadelle","Sec, structuré, aromatique","Salade landaise, truite au bleu"],["Marcillac rouge","Fer servadou","Tannique, rustique, ferreux","Charcuterie, cassoulet"],["Fronton rouge","Négrette","Souple, fruité, floral","Carpaccio de canard, pickles de betterave"],["Cahors traditionnel","Malbec","Dense, rustique, tannique","Confit de canard, gigot d'agneau"],["Cahors moderne","Malbec","Rond, fruit noir, accessible","Burger de canard"],["Monbazillac","Sémillon / muscadelle / sauvignon","Liquoreux, fruits confits, miel","Tarte au citron, fromage bleu"]]},

{id:"bordeaux1",n:"Bordeaux 1",t:"Entre-deux-Mers, Graves, Sauternais",m:2,r:"bordeaux",src:"BORDEAUX 1",
 ess:[
 "95 000 ha en Gironde ; climat océanique. <b>Merlot</b> = le cépage le plus planté. Blancs : sémillon, sauvignon, muscadelle.",
 "3 ensembles : <b>rive gauche</b> de la Garonne et de la Gironde (Médoc, Graves, Sauternais), <b>Entre-deux-Mers</b> (entre Garonne et Dordogne), <b>rive droite</b> (Blaye, Bourg, Libournais).",
 "AOP régionales : Bordeaux, Bordeaux rosé, Bordeaux Clairet, Bordeaux Supérieur, Crémant de Bordeaux.",
 "Entre-deux-Mers : blancs secs ; moelleux de Cadillac, Loupiac, Sainte-Croix-du-Mont.",
 "Graves et <b>Pessac-Léognan</b> (blanc sec et rouge) : <b>classement des Graves de 1959</b> ; Haut-Brion, seul vin hors Médoc classé en 1855.",
 "Sauternais (Sauternes, Barsac, Cérons) : le <b>Ciron</b> amène les brouillards du matin → <b>Botrytis</b> ; vendange par <b>tries</b>, moins de 20 hl/ha.",
 "Classement 1855 de Sauternes-Barsac : un seul <b>1er cru supérieur</b>, <b>Château d'Yquem</b>."],
 det:[
 ["Sols et cépages","<p>Médoc : silice, quartz, sols ferrugineux ; Sauternais : silice sur calcaire et argile ; Entre-deux-Mers : marnes et calcaires. Rouges : cabernet sauvignon, cabernet franc, merlot, malbec, carménère, petit verdot ; blancs : sémillon, sauvignon, muscadelle, colombard, ugni blanc.</p>"],
 ["Les AOP de l'Entre-deux-Mers","<ul class='plain'><li><b>Blanc sec</b> : Entre-deux-Mers, Entre-deux-Mers Haut-Benauge.</li><li><b>Moelleux</b> : Bordeaux Haut-Benauge, Cadillac, Sainte-Croix-du-Mont, Loupiac, Premières Côtes de Bordeaux.</li><li><b>Blanc sec et moelleux</b> : Côtes de Bordeaux Saint-Macaire.</li><li><b>Rouge</b> : Cadillac Côtes de Bordeaux.</li><li><b>Sec, moelleux et rouge</b> : Graves de Vayres, Sainte-Foy Bordeaux.</li></ul>"],
 ["Le classement des Graves (1959)","<p>Pas de hiérarchie interne : une seule catégorie « cru classé », par couleur. Blancs : Couhins, Couhins-Lurton, Laville Haut-Brion. Rouges : Fieuzal, Haut-Bailly, La Mission Haut-Brion, Latour Haut-Brion, Pape Clément, Smith Haut-Lafitte. Blancs et rouges : Bouscaut, Carbonnieux, Olivier, Malartic-Lagravière, Latour-Martillac, Domaine de Chevalier. Haut-Brion : 1er grand cru classé en 1855. Graves Supérieures : moelleux, non classé.</p>"],
 ["Le Sauternes","<p>Robe jaune or puis ambrée, vieil or, cuivrée, jusqu'à la couleur du thé. Nez : mangue, ananas, agrumes confits, miel, cire, colle, amande, pain d'épices, safran. Bouche riche, ample, sucre équilibré par l'acidité, finale longue.</p><p><b>1855</b> : Yquem (1er cru supérieur) ; 1ers crus : La Tour Blanche, Lafaurie-Peyraguey, Clos Haut-Peyraguey, Rayne Vigneau, Suduiraut, Coutet, Climens, Guiraud, Rieussec, Rabaud-Promis, Sigalas Rabaud ; puis des 2es crus (Doisy-Daëne, Filhot, Nairac, de Malle…).</p>"]],
 acc:[["Entre-deux-Mers","Sauvignon / sémillon","Frais, vif, fruité","Moules, salade de crevettes"],["Graves sec","Sauvignon / sémillon","Élégant, minéral, boisé discret","Filet de sole, chèvre frais"],["Pessac-Léognan blanc","Sauvignon / sémillon","Complexe, gras, toasté","Risotto aux champignons, turbot"],["Cadillac Côtes de Bordeaux","Merlot / cabernet franc","Souple, fruité","Rôti de bœuf saignant"],["Pessac-Léognan rouge","Cabernet sauvignon / merlot","Structuré, noble, boisé fondu","Magret rôti, tournedos Rossini"],["Sauternes jeune","Sémillon / sauvignon","Liquoreux, exotique, vif","Cannelés, roquefort"],["Sauternes de 20 ans et plus","Sémillon / sauvignon","Fondu, miel, safran","Canard à l'orange, en digestif"]]},

{id:"bordeaux2",n:"Bordeaux 2",t:"La rive droite",m:2,r:"bordeaux",src:"BORDEAUX 2",
 ess:[
 "Rive droite = <b>royaume du merlot</b> : rond, souple, tanins soyeux, moins tannique et moins acide que le cabernet sauvignon.",
 "Blaye (rouge), Côtes de Blaye (blanc), Blaye Côtes de Bordeaux, Bourg, Côtes de Bourg.",
 "Libournais : <b>Saint-Émilion</b> et Saint-Émilion Grand Cru, ses satellites (Lussac, Montagne, Saint-Georges, Puisseguin), <b>Pomerol</b>, Lalande-de-Pomerol, Fronsac, Canon-Fronsac, Castillon et Francs Côtes de Bordeaux.",
 "<b>Classement de Saint-Émilion</b> (1955), révisé tous les 10 ans environ (dernier : 2022) : 1ers grands crus classés <b>A</b> (Pavie, Figeac), <b>B</b>, puis grands crus classés.",
 "Critères 2022 : dégustation 50 %, notoriété 20 %, terroirs 20 %, conduite de l'exploitation 10 %.",
 "<b>Pomerol</b> : argile, merlot, vins veloutés ; seulement un classement semi-officiel ; <b>Petrus</b>.",
 "<b>Primeurs</b> : vente au printemps qui suit la vendange, livraison 18 à 24 mois plus tard."],
 det:[
 ["Pomerol","<p>L'argile du sous-sol retient l'eau de pluie et la rend à la vigne en cas de chaleur. Vins très colorés, fruits rouges, sous-bois, venaison, tanins soyeux ; accessibles plus jeunes que les Médocs.</p>"],
 ["Les primeurs : pour et contre","<p><b>Pour</b> : trésorerie pour le château, prix intéressant pour l'acheteur, semaine de dégustation très médiatisée. <b>Contre</b> : échantillons parfois différents du vin final, flambée des prix.</p>"]],
 acc:[["Blaye Côtes de Bordeaux","Merlot / cabernet franc","Souple, fruité","Viande grillée, tartare"],["Côtes de Bourg","Merlot / malbec","Fruité, structuré, généreux","Cassoulet, daube de bœuf"],["Lussac-Saint-Émilion","Merlot / cabernet franc","Riche, rond, fruits noirs","Rôti de bœuf saignant"],["Saint-Émilion Grand Cru classé","Merlot / cabernet franc","Concentré, complexe, de garde","Tournedos aux cèpes"],["Fronsac","Merlot / cabernet franc","Charpenté, minéral","Onglet à l'échalote"],["Pomerol","Merlot","Velouté, intense, soyeux","Filet de bœuf sauce truffe"]]},

{id:"bordeaux3",n:"Bordeaux 3",t:"Le Médoc et le classement de 1855",m:2,r:"bordeaux",src:"BORDEAUX 3",
 ess:[
 "Médoc (régionale, blanc sec reconnu en 2025), Haut-Médoc (sous-régionale), 6 communales : <b>Saint-Estèphe, Pauillac, Saint-Julien, Listrac-Médoc, Moulis, Margaux</b>.",
 "Rive gauche : <b>cabernet sauvignon</b> dominant, des rouges ; les blancs des grands châteaux sortent en AOP Bordeaux.",
 "<b>Classement de 1855</b> : demandé par Napoléon III pour l'Exposition universelle, établi par les courtiers d'après les <b>prix</b> ; 5 niveaux.",
 "1ers grands crus : <b>Latour, Lafite Rothschild, Mouton Rothschild</b> (Pauillac ; Mouton promu en 1973), <b>Margaux</b>, plus Haut-Brion (Graves).",
 "Profils : Pauillac puissant et charpenté ; Saint-Estèphe austère jeune ; Margaux élégant et souple ; Saint-Julien équilibré, velouté.",
 "<b>Crus bourgeois</b> (classement 2025, pour 5 ans) : 120 crus bourgeois, 36 supérieurs, 14 exceptionnels. <b>Crus artisans</b> : petites exploitations familiales des 8 AOC du Médoc.",
 "Second vin : jeunes vignes ou lots écartés du grand vin, environ 3 fois moins cher."],
 det:[
 ["Le classement de 1855 (rouges)","<p><b>2es</b> : Brane-Cantenac, Durfort-Vivens, Lascombes, Rauzan-Ségla, Rauzan-Gassies (Margaux) ; Cos d'Estournel, Montrose (Saint-Estèphe) ; Ducru-Beaucaillou, Gruaud Larose, Léoville Las Cases, Léoville Poyferré, Léoville Barton (Saint-Julien) ; Pichon Baron, Pichon Comtesse (Pauillac).</p><p><b>3es</b> : Palmer, Giscours, Kirwan, d'Issan, Malescot Saint-Exupéry… (Margaux) ; Calon-Ségur (Saint-Estèphe) ; Lagrange, Langoa Barton (Saint-Julien) ; La Lagune (Haut-Médoc).</p><p><b>4es</b> : Beychevelle, Branaire-Ducru, Talbot, Saint-Pierre (Saint-Julien) ; Duhart-Milon (Pauillac) ; Lafon-Rochet (Saint-Estèphe) ; Prieuré-Lichine, Marquis de Terme, Pouget (Margaux) ; La Tour Carnet (Haut-Médoc).</p><p><b>5es</b> : Lynch-Bages, Pontet-Canet, Grand-Puy-Lacoste, d'Armailhac, Clerc Milon, Batailley… (Pauillac) ; Cos Labory (Saint-Estèphe) ; Dauzac, du Tertre (Margaux) ; Belgrave, Camensac, Cantemerle (Haut-Médoc).</p>"],
 ["Crus bourgeois exceptionnels 2025 (exemples)","<p>Médoc : La Cardonne, Castéra, Laujac ; Listrac : Reverdi ; Margaux : d'Arsac, Mongravey, Paveil de Luze ; Saint-Estèphe : Le Crock, Laffitte Carcasset ; Haut-Médoc : Malescasse, de Malleret, Paloumey, Reysson, du Taillan.</p>"]],
 acc:[["Médoc","Cabernet sauvignon / merlot","Droit, tanins fermes","Entrecôte à la bordelaise"],["Haut-Médoc","Cabernet sauvignon / merlot","Structuré, classique, boisé","Carré d'agneau rôti au thym"],["Moulis","Merlot / cabernet sauvignon","Souple, équilibré","Filet d'agneau, jus de viande"],["Saint-Julien","Cabernet sauvignon / merlot","Fin, harmonieux, long","Canard sauvage aux petits oignons"],["Saint-Estèphe","Cabernet sauvignon","Puissant, austère, de garde","Civet de sanglier, joue de bœuf"],["Margaux","Cabernet sauvignon / merlot","Élégant, floral, raffiné","Caille farcie au ris de veau"],["Grand cru classé de 20 ans","Cabernet sauvignon / merlot","Complexe, fondu, truffe, cuir","Gibier rôti, champignons"]]},

{id:"savoie",n:"Savoie",t:"Savoie et Bugey",m:2,r:"savoie",src:"SAVOIE",
 ess:[
 "Environ 2 000 ha sur 4 départements (Savoie, Haute-Savoie, Isère, Ain pour le Bugey) ; climat <b>semi-continental</b> montagnard, fortes amplitudes jour-nuit : l'acidité se garde.",
 "Fortes pentes (250–550 m) : vendange mécanique pratiquement impossible.",
 "Blancs : <b>jacquère</b> (frais, agrumes, minéral), <b>altesse</b> (poire, miel, noisette), <b>roussanne (bergeron)</b>, chasselas. Rouges : <b>mondeuse</b> (tannique, violette, poivre), gamay, pinot noir, persan.",
 "AOP <b>Vin de Savoie</b> + 15 dénominations (Apremont, Abymes, Arbin, Chignin…). <b>Chignin-Bergeron = 100 % roussanne</b>.",
 "<b>Roussette de Savoie</b> : 100 % altesse (+ Frangy, Marestel, Monthoux, Monterminod).",
 "Autres : Crépy, Seyssel, Crémant de Savoie ; <b>Bugey</b> (+ Manicle, Montagnieu), Roussette du Bugey, <b>Cerdon du Bugey</b> (rosé, méthode ancestrale).",
 "IGP la plus courante : <b>Vin des Allobroges</b>."],
 det:[
 ["Sols","<p>Calcaires jurassiques, marnes grises, schistes, éboulis morainiques, alluvions glaciaires autour des lacs ; argilo-calcaires compacts dans le Bugey. Les lacs (Léman, lacs alpins) régulent la température.</p>"],
 ["Les 15 dénominations du Vin de Savoie","<p>Abymes, Apremont, Arbin, Ayze, Chautagne, Chignin, Chignin-Bergeron, Cruet, Jongieux, Marignan, Marin, Montmélian, Ripaille, Saint-Jean-de-la-Porte, Saint-Jeoire-Prieuré.</p>"],
 ["Cépages rares","<p>Gringet (blanc vif et aromatique), persan (rouge tannique, coloré, de garde), mondeuse blanche, verdesse, étraire de la Dhuy, bia blanc.</p>"]],
 acc:[["Crémant de Savoie","Jacquère / altesse / chardonnay","Frais, mousse fine","Apéritif, fondue savoyarde"],["Apremont","Jacquère","Très vif, léger, floral","Raclette, fondue, sushis"],["Chignin-Bergeron","Roussanne","Ample, aromatique, abricot","Volaille rôtie, butternut au miel"],["Roussette de Savoie","Altesse","Frais, tendu, miellé","Tomme de Savoie, poissons de lac"],["Arbin","Mondeuse","Tannique, épicé, rustique","Charcuterie fumée, petit salé aux lentilles"],["Bugey","Gamay / pinot noir / chardonnay","Fruité, souple","Poulet rôti, tarte salée"],["Cerdon du Bugey","Gamay","Demi-sec, fruité, rosé mousseux","Dessert aux fraises, tarte aux myrtilles"]]},

{id:"jura",n:"Jura",t:"Le Jura",m:2,r:"jura",src:"(support à ajouter)"},
{id:"loire1",n:"Loire 1",t:"(Centre-Loire, à confirmer)",m:2,r:"loire",src:"(support à ajouter)"},

{id:"loire2",n:"Loire 2",t:"La Touraine",m:2,r:"loire",src:"LOIRE 2 TOURAINE",
 ess:[
 "AOP <b>Touraine</b> (blanc, rouge, rosé, pétillant, mousseux) + dénominations : Azay-le-Rideau, Amboise, Mesland, Chenonceaux, <b>Oisly</b> (blanc sec uniquement), <b>Noble Joué</b> (rosé uniquement).",
 "<b>Chenin</b> : <b>Vouvray</b> et <b>Montlouis-sur-Loire</b>, blancs du sec au liquoreux, pétillants et mousseux.",
 "<b>Cabernet franc</b> : <b>Chinon</b> (aussi un peu de blanc), <b>Bourgueil</b>, <b>Saint-Nicolas-de-Bourgueil</b>.",
 "<b>Cour-Cheverny</b> = 100 % <b>romorantin</b>, blanc ; Cheverny : 3 couleurs.",
 "Au nord : Jasnières (chenin), Coteaux du Loir (chenin, pineau d'Aunis), Coteaux du Vendômois. Aussi Valençay, Orléans, Orléans-Cléry (cabernet franc)."],
 det:[
 ["Les autres AOP de Touraine","<ul class='plain'><li><b>Cheverny</b> : cabernet franc, pinot noir, gamay ; sauvignon, chenin, chardonnay.</li><li><b>Coteaux du Loir</b> : chenin ; pineau d'Aunis, gamay, cabernet franc, côt, grolleau.</li><li><b>Jasnières</b> : chenin, blanc tranquille uniquement.</li><li><b>Valençay</b> : comme le fromage du même nom.</li><li><b>Orléans</b> : chardonnay, pinot gris, meunier ; <b>Orléans-Cléry</b> : cabernet franc, rouge, 30 ha.</li></ul>"]],
 acc:[["Jasnières","Chenin","Sec à demi-sec, minéral, floral","Légumes rôtis au miel"],["Montlouis tendre","Chenin","Tendre, doux, fruits jaunes","Foie gras, cuisine asiatique, chèvre sec"],["Cour-Cheverny","Romorantin","Vif, minéral, herbacé","Truite à l'oseille, quenelles de brochet"],["Touraine Amboise","Côt / cabernet franc","Croquant, souple","Grillades, charcuterie"],["Bourgueil","Cabernet franc","Structuré, fruits noirs","Poivron farci, bœuf au poivre vert"],["Chinon","Cabernet franc","Souple, herbacé","Poêlée de champignons, pot-au-feu"],["Vouvray moelleux","Chenin","Moelleux, miellé","Dessert à la poire"]]},

{id:"loire3",n:"Loire 3",t:"Anjou-Saumur et Pays nantais",m:2,r:"loire",src:"LOIRE 3 Anjou et Pays nantais",
 ess:[
 "Pays nantais : <b>melon de Bourgogne</b> → Muscadet (+ Sèvre et Maine, Coteaux de la Loire, Côtes de Grandlieu) ; <b>folle blanche</b> → Gros Plant ; Coteaux d'Ancenis.",
 "<b>Sur lie</b> : le vin reste sur ses lies jusqu'à la mise en bouteille au printemps → plus de fruit, de gras, un léger perlant.",
 "Saumurois : Saumur (3 couleurs, pétillant, mousseux), <b>Saumur-Champigny</b> (rouge, cabernet franc), Cabernet de Saumur (rosé), Coteaux de Saumur (moelleux).",
 "Anjou : Anjou, Anjou-Villages (Brissac), <b>Cabernet d'Anjou</b> (rosé moelleux).",
 "Grands moelleux de <b>chenin</b> : <b>Coteaux du Layon</b> (+ villages, 1er cru Chaume), Coteaux de l'Aubance, <b>Bonnezeaux</b>, <b>Quarts de Chaume Grand Cru</b> (2014).",
 "<b>Savennières</b> : grand blanc sec de chenin ; Coulée de Serrant (7 ha) et Roche aux Moines.",
 "Vendée : <b>Fiefs vendéens</b> (Brem, Chantonnay, Mareuil, Pissotte, Vix)."],
 det:[
 ["Muscadet Sèvre et Maine + crus","<p>Clisson, Gorges, Le Pallet, Goulaine, Château-Thébaud, Monnières-Saint-Fiacre, Mouzillon-Tillières, Champtoceaux, La Haie-Fouassière (le Domaine de la Foliette goûté au cours 1 en vient), Vallet (en cours).</p>"],
 ["Toutes les AOP d'Anjou","<p>Anjou (blanc, rouge, rosé, primeur), Anjou pétillant et mousseux, Anjou Coteaux de la Loire (moelleux), Anjou Gamay, Anjou-Villages et Anjou-Villages Brissac (rouge), Cabernet d'Anjou (rosé moelleux).</p>"]],
 acc:[["Muscadet Sèvre et Maine","Melon de Bourgogne","Sec, vif, iodé","Huîtres, fruits de mer"],["Saumur blanc","Chenin","Rond à ferme, minéral","Sandre au beurre blanc, asperges"],["Savennières","Chenin","Puissant, tendu, complexe","Blanquette de veau, champignons"],["Saumur-Champigny","Cabernet franc","Rond, élégant, gourmand","Filet de veau, onglet à l'échalote"],["Anjou rouge","Cabernet franc","Franc, croquant","Côte de porc, boudin noir"],["Coteaux du Layon","Chenin","Moelleux, frais, fruits confits","Toast au chèvre et miel"],["Bonnezeaux","Chenin","Liquoreux, concentré","Tarte Tatin, fromage bleu"]]},

{id:"champagne",n:"Champagne",t:"La Champagne",m:2,r:"champagne",src:"Champagne",
 ess:[
 "34 000 ha : Marne (66 %), Aube (23 %), Aisne (10 %). Climat continental et océanique, très au nord ; sous-sol de <b>craie</b>.",
 "Cépages : <b>pinot noir</b> (± 40 %), <b>meunier</b> (± 30 %), <b>chardonnay</b> (± 30 %) ; arbane, petit meslier, pinot blanc et gris : moins de 0,3 %.",
 "3 AOP : <b>Champagne</b>, <b>Coteaux champenois</b> (tranquilles), <b>Rosé des Riceys</b>. Le Champagne n'est pas tenu d'écrire « appellation contrôlée ».",
 "Échelle des crus (1920–2003) : <b>17 grands crus</b> (100 %), <b>44 premiers crus</b> (90–99 %).",
 "Dosage, du plus sec au plus doux : brut nature (rien) · extra-brut (0–6 g/L) · <b>brut (moins de 12)</b> · extra-dry (12–17) · sec (17–32) · demi-sec (32–50) · doux (plus de 50).",
 "Sur lattes : <b>15 mois</b> minimum (non millésimé), <b>36 mois</b> (millésimé).",
 "Statut sur l'étiquette : <b>RM</b> récoltant-manipulant, <b>NM</b> négociant-manipulant, CM coopérative, RC, SR, ND, MA."],
 det:[
 ["Les sous-régions","<p>14 sous-régions sur 320 communes, dont <b>Montagne de Reims</b> (pinot noir), <b>Vallée de la Marne</b> (meunier), <b>Côte des Blancs</b> (chardonnay), Côte de Sézanne, <b>Côte des Bar</b> (Aube, pinot noir), Massif de Saint-Thierry, Vallée de l'Ardre, région d'Épernay, Butte de Montgueux…</p>"],
 ["Les 17 grands crus","<p>Côte des Blancs : Cramant, Avize, Oiry, Oger, Le Mesnil-sur-Oger, Chouilly. Montagne de Reims : Ambonnay, Bouzy, Louvois, Beaumont-sur-Vesle, Mailly, Verzenay, Verzy, Sillery, Puisieulx. Vallée de la Marne : Aÿ, Tours-sur-Marne. Premiers crus (44) : Avenay, Cumières, Chigny-les-Roses, Dizy, Rilly-la-Montagne, Vertus, Hautvillers…</p>"],
 ["Assemblage, millésime et étiquette","<p><b>Non millésimé</b> : assemblage de plusieurs années grâce aux vins de réserve, pour garder le style de la maison. <b>Millésimé</b> : une seule année jugée remarquable. Le chef de cave assemble la cuvée à la fin de l'hiver. Rosé : par macération ou assemblage de blanc et de vin rouge tranquille. La date de dégorgement aide à gérer la cave. « Clos » : vignes entourées de murs (Clos du Mesnil de Krug, Clos des Goisses de Philipponat). Liqueur d'expédition : sucre de canne dans du vin, 500 à 750 g/L.</p>"],
 ["Coteaux champenois et Rosé des Riceys","<p>Coteaux champenois : vins tranquilles blancs et rouges (Ambonnay, Aÿ, Bouzy, Cumières, Mailly…). Rosé des Riceys (Aube) : rosé tranquille de pinot noir, structuré.</p>"]],
 acc:[["Champagne non dosé","Pinot noir / chardonnay","Très sec, tendu, pur","Huîtres, sashimi"],["Champagne blanc de noirs","Pinot noir / meunier","Charnu, fruits rouges","Jambon ibérique, volaille rôtie"],["Champagne blanc de blancs","Chardonnay","Fin, citronné, crayeux","Ceviche, carpaccio de Saint-Jacques"],["Champagne millésimé","Chardonnay / pinot noir","Complexe, vineux, de garde","Homard, ris de veau"],["Champagne rosé","Chardonnay / pinot noir","Fruité, élégant","Saumon fumé, dessert aux fruits rouges"],["Rosé des Riceys","Pinot noir","Structuré, tannique, sec","Gibier à plumes, charcuterie fumée"]]}
],
/* Synthèse : l'essentiel de toute l'année, région par région */
syn:[
 ["Alsace","alsace1","Riesling, gewurztraminer, pinot gris, muscat (+ sylvaner, pinot blanc ; pinot noir seul rouge). AOP Alsace (+ cépage, Gentil, Edelzwicker), 51 grands crus, Crémant. VT et SGN. Bouteille flûte."],
 ["Bourgogne","bourgogne1","Pinot noir et chardonnay, sans assemblage. 4 niveaux : régionale, communale, 1er cru (climat), grand cru (33). Chablis (kimméridgien) · Côte de Nuits (rouges, 24 grands crus) · Côte de Beaune (blancs, Montrachet, Corton) · Côte chalonnaise · Mâconnais."],
 ["Beaujolais","bourgogne4","Gamay, macération carbonique. Beaujolais → Villages → 10 crus (rouges). Pas de 1er ni de grand cru. Primeur le 3e jeudi de novembre."],
 ["Rhône","rhone1","Nord : syrah seule en rouge, viognier (Condrieu), terrasses de granite. Sud : assemblages de grenache, galets, gobelet ; Châteauneuf (13 cépages), Tavel (rosé). CdR → CdR-Villages (+ 21 noms). VDN : Beaumes-de-Venise, Rasteau. Clairette de Die (ancestrale)."],
 ["Provence et Corse","provence","Rosé de pressurage direct. Bandol = mourvèdre. Crus classés 1955 (domaines). Corse : niellucciu (Patrimonio), sciaccarellu (Ajaccio), vermentinu."],
 ["Languedoc-Roussillon","languedoc1","Plus grand vignoble ; IGP (Pays d'Oc). Picpoul de Pinet, Corbières, Fitou, Minervois, Pic Saint-Loup, Limoux (Blanquette, ancestrale). Roussillon : Collioure, Maury, VDN (Banyuls, Rivesaltes) en élevage réducteur ou oxydatif."],
 ["Sud-Ouest","sudouest1","Tannat (Madiran), manseng (Jurançon), négrette (Fronton), malbec (Cahors), fer servadou (Marcillac), mauzac et len de l'el (Gaillac). Monbazillac liquoreux."],
 ["Bordeaux","bordeaux1","Assemblages. Rive gauche cabernet sauvignon (Médoc, 1855), rive droite merlot (Saint-Émilion, classement révisé ; Pomerol). Graves 1959. Sauternes : Botrytis, Yquem."],
 ["Loire","loire3","Melon (Muscadet sur lie), chenin (Vouvray, Savennières, Layon), cabernet franc (Chinon, Saumur-Champigny), romorantin (Cour-Cheverny)."],
 ["Savoie","savoie","Jacquère, altesse (Roussette), roussanne (Chignin-Bergeron), mondeuse. Vin de Savoie + 15 crus ; Cerdon du Bugey."],
 ["Jura","jura","À compléter avec le support du cours."],
 ["Champagne","champagne","Craie ; pinot noir, meunier, chardonnay. 17 grands crus, 44 premiers. Dosage brut < 12 g/L. 15 mois (NM) / 36 mois (millésimé) sur lattes. RM, NM."]
]
};
