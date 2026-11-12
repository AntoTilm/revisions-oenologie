const COURSES={1:"Histoire, étiquette, dégustation",2:"Le raisin et l'analyse gustative",3:"Fermentations, blanc et vins doux",4:"Rouge, rosé et soins du vin",5:"Stockage et effervescents"};
/* [id, cours, n° slide, titre, à retenir, explication, piège] */
const SLIDES=[
 ["c1-24",1,24,"Les buts de la dégustation","Verticale = un même vin sur plusieurs millésimes.","Le post-it est collé à côté de « La verticale ». On déguste le même vin (même appellation, même domaine) sur plusieurs millésimes, par exemple château Mouton Rothschild de 1998 à 2002. On voit ainsi comment le vin évolue avec le temps et ce que chaque millésime apporte. Les autres buts : analyse globale, comparaison, classement, horizontale et dégustation à l'aveugle.","Verticale : même vin, années différentes. Horizontale : même année, vins différents."],
 ["c2-16",2,16,"La maturité du raisin","Quatre éléments : sucre (17 g/L = 1° d'alcool), acidité (malique, tartrique), couleur, arômes.","La maturité est le moment crucial pour la qualité des vins. Le sucre donnera l'alcool : il faut 17 g de sucre par litre pour obtenir 1° d'alcool. L'acidité vient surtout des acides malique et tartrique. La couleur compte pour l'aspect du vin, et les composants aromatiques donnent l'expression du cépage. Le vigneron vendange quand l'équilibre entre ces éléments est idéal.","17 g par litre, pas 1,7 g ni 170 g."],
 ["c2-17",2,17,"Pourquoi la maturité compte","Trop tôt : vins acides et verts. Trop tard : vins mous et alcooleux.","La maturité fixe l'équilibre entre sucres, acides et arômes. Une bonne maturité donne une richesse aromatique et une structure harmonieuse : c'est le moment où le fruit exprime tout son potentiel. C'est aussi la réponse à la question d'examen « Qu'est-ce que le vigneron recherche principalement lors de la vendange ? » : la maturation parfaite du raisin.",""],
 ["c2-24",2,24,"Conditions climatiques défavorables","Raisins pas assez mûrs → peu de sucre → peu d'alcool → chaptalisation.","Quand la météo est mauvaise, les raisins n'atteignent pas une maturité suffisante et contiennent trop peu de sucre. Le vin serait trop faible en alcool. On peut alors chaptaliser : ajouter du saccharose au moût, 2 à 3 kg par hectolitre. 1,7 kg par hectolitre donne 1° d'alcool en plus.","1,7 kg par hectolitre, c'est le même rapport que 17 g par litre."],
 ["c2-25",2,25,"La chaptalisation","Ajout contrôlé de sucre au moût pour augmenter le degré, pas pour sucrer.","Le sucre est ajouté avant ou pendant la fermentation ; les levures le transforment en alcool, donc le vin n'est pas plus sucré. La pratique compense un manque naturel de sucre dû à une maturité insuffisante. Elle est réglementée et autorisée seulement dans certaines régions et conditions.","Ne pas confondre avec le mutage, qui ajoute de l'alcool pour garder du sucre."],
 ["c2-27",2,27,"Sucrosité des vins","Extra sec → sec → sec avec une pointe de sucre → demi-sec → moelleux → liquoreux.","C'est la première étape de l'analyse gustative, pour les blancs et les rosés. On juge surtout à la salive : fluide et abondante pour un vin sec, elle s'épaissit avec le sucre, jusqu'à une sensation épaisse comme une liqueur pour un liquoreux. La plupart des vins sont secs.",""],
 ["c2-28",2,28,"Acidité","Souple → frais → nerveux → vert. Acidité élevée = vin jeune ou climat froid.","L'acidité donne la fraîcheur, et il y en a dans tous les vins. Plus elle est forte, plus on salive : souple (pas de fraîcheur), frais (rafraîchissant), nerveux (léger picotement, un peu citrique), vert (agressif, frissonnant). Une acidité élevée oriente vers un vin jeune ou une région au climat froid.",""],
 ["c2-29",2,29,"Alcool","Léger → modéré → généreux → corsé → capiteux. Alcool élevé = climat chaud.","On juge la sensation de chaleur en bouche : manque d'alcool (léger), normale (modéré), chaleureuse sans gêner (généreux), évidente dès le milieu de bouche (corsé), brûlante comme une eau-de-vie (capiteux). Un climat chaud donne des raisins plus sucrés, donc des vins plus alcoolisés.",""],
 ["c2-30",2,30,"Tanin","Fondu → savoureux → présent → astringent. Tanin élevé = vin jeune, macération longue et/ou élevage en fûts.","Les tanins (vins rouges) se sentent à l'assèchement de la bouche. Fondu : aucun assèchement. Savoureux : un peu, sans déranger. Présent : la salive disparaît en fin de bouche. Astringent : très asséchant, il agresse les gencives. Les tanins viennent de la pellicule, des pépins, de la rafle et du bois, d'où le lien avec une macération longue et le fût.",""],
 ["c2-31",2,31,"Corps","Décharné → mince → rond → ferme → volumineux → musclé.","Le corps est la carrure du vin, liée à l'alcool, à l'acidité et aux tanins. Décharné : sans matière. Mince : léger, il manque un peu d'acidité, d'alcool ou de tanins. Rond : équilibré. Ferme : austère, droit (tanins, acidité). Volumineux : il emplit la bouche (alcool). Musclé : de la chair, de la mâche, de la puissance.","« Ferme » décrit le corps ; « fermé » décrit le bouquet ou le stade d'évolution."],
 ["c2-32",2,32,"Persistance et équilibre","Courte (< 4 s), moyenne (4–8 s), longue (8–12 s), prolongée (> 12 s).","La persistance mesure combien de temps les sensations restent en bouche après la gorgée. Elle établit la hiérarchie des vins : un grand vin est long en bouche. La prédominance de l'équilibre dit quelle sensation domine : sucrosité (douceur), acidité (fraîcheur), alcool (chaleur), tanins (assèchement), ou harmonieux si rien ne domine. La slide cite aussi « plat ».",""],
 ["c3-12",3,12,"L'éraflage","Séparer les baies de la rafle avant la vinification.","La rafle est la partie ligneuse de la grappe. La retirer évite d'apporter des tanins verts et des goûts herbacés, surtout dans les rouges. L'éraflage, ou égrappage, peut être total ou partiel selon le style recherché. En rouge, il est facultatif.",""],
 ["c3-14",3,14,"Le pressurage en blanc","En blanc, on presse juste après la récolte, avant toute macération.","Les raisins, entiers ou légèrement foulés, sont pressés tout de suite pour extraire le jus sans tirer les tanins ni les composés de la peau. On veut un moût clair, pur et aromatiquement frais, prêt pour le débourbage puis la fermentation.","En rouge, le pressurage vient après la fermentation."],
 ["c3-16",3,16,"Le sulfitage","Ajout de SO₂ au moût, juste après le pressurage.","Le dioxyde de soufre protège immédiatement le jus de l'oxydation et freine les levures et bactéries indésirables avant la fermentation. Il préserve la fraîcheur aromatique et la couleur du futur vin. En rouge, il est facultatif. Le SO₂ fait partie des additifs soumis à étiquetage.",""],
 ["c3-18",3,18,"Le débourbage","Clarifier le moût avant la fermentation en retirant les bourbes.","Après le pressurage, le jus contient des particules solides en suspension : les bourbes. On les élimine par décantation naturelle (on laisse reposer) ou par action mécanique. On obtient un jus limpide, pour un vin plus pur et plus aromatique.","Débourbage : le moût, avant la fermentation. Soutirage : le vin, pendant l'élevage."],
 ["c3-20",3,20,"Le levurage","Ajout de levures sélectionnées au début de la fermentation.","Il assure un départ rapide et régulier de la fermentation alcoolique et permet de maîtriser le profil aromatique. Il complète ou remplace les levures naturellement présentes sur la peau des raisins. En rouge, il est facultatif.",""],
 ["c3-22",3,22,"La fermentation alcoolique","Sucres (glucose, fructose) + levures → alcool + CO₂.","C'est l'étape centrale de la vinification. Elle produit aussi de la chaleur et des composés aromatiques. On l'observe au bouillonnement, à la hausse de la température et du degré, à la baisse de la densité (et au chapeau en rouge). Température idéale : 20 à 28 °C ; elle s'arrête à 40 °C. Sa durée et sa température influencent fortement le style.",""],
 ["c3-24",3,24,"La fermentation malolactique","Acide malique → acide lactique, par des bactéries.","C'est une désacidification biologique : le vin devient plus rond et plus stable microbiologiquement. Elle est indispensable pour les rouges et au choix pour les blancs, selon le style recherché.","Levures pour la fermentation alcoolique, bactéries pour la malolactique."],
 ["c3-26",3,26,"L'élevage","La maturation du vin entre la fermentation et la mise en bouteille.","En cuve, en fût ou dans d'autres contenants, l'élevage affine les arômes, assouplit les tanins et stabilise le vin. Sa durée, son mode et les matériaux choisis influencent directement le style et la complexité. C'est pendant l'élevage qu'ont lieu les soins : ouillage, collage, soutirage, filtration.",""],
 ["c3-30",3,30,"Passerillage et Botrytis cinerea","Deux façons de concentrer le sucre pour les vins naturellement doux.","Passerillage : on laisse les raisins se dessécher, sur pied (vendanges tardives) ou après la récolte, sur claies ou suspendus. Pourriture noble : le champignon Botrytis cinerea, favorisé par une alternance d'humidité et de sécheresse, perce la peau ; l'eau s'évapore, sucres et arômes se concentrent. Il donne des liquoreux complexes.",""],
 ["c3-34",3,34,"Le mutage des VDN","Alcool vinique neutre à 95° ajouté en cours de fermentation.","L'alcool stoppe les levures : une partie du sucre naturel reste, et le vin est à la fois doux et alcoolisé. On ajoute 5 à 10 % du volume du moût. Un VDN a au moins 15° d'alcool acquis et 21,5 % d'alcool total (6,5 % en puissance). Le mutage peut se faire sur grains (avant pressurage) ou sur jus.","VDN : alcool vinique, pendant la fermentation. VDL : alcool noble, avant la fermentation (mistelle)."],
 ["c4-06",4,6,"Le foulage","Éclater légèrement la peau des baies pour libérer le jus.","Réalisé avant la fermentation, il met le jus en contact avec la pulpe et favorise l'extraction du moût, en préservant les pépins. Aujourd'hui souvent mécanique, il est réglé pour éviter un écrasement excessif qui donnerait de l'amertume.",""],
 ["c4-10",4,10,"La macération","Peaux, pulpes et pépins restent au contact du moût en fermentation.","C'est ce qui fait un vin rouge : la couleur, les tanins et une partie des arômes viennent de la pellicule. Sa durée et sa température influencent directement la structure, l'intensité et le style du vin. Elle se déroule en même temps que la fermentation alcoolique.",""],
 ["c4-14",4,14,"Pigeage et remontage","Pigeage = enfoncer le chapeau. Remontage = l'arroser avec le jus pompé en bas de cuve.","Pendant la fermentation, les peaux et les pépins remontent et forment le chapeau de marc. Pour extraire couleur et tanins et éviter que le chapeau sèche, on l'enfonce dans le moût (pigeage) ou on l'arrose avec le jus pompé au bas de la cuve (remontage), ce qui homogénéise aussi la cuve.",""],
 ["c4-18",4,18,"Vin de goutte et vin de presse","Goutte = écoulé sans pression. Presse = obtenu en pressant le marc, plus riche en tanins et en couleur.","En rouge, le pressurage vient après la fermentation et la macération. On décuve d'abord le vin de goutte, puis on presse le marc pour obtenir le vin de presse. Le vigneron les assemble ou non selon le style recherché. La malolactique a ensuite toujours lieu en rouge.",""],
 ["c4-24",4,24,"Rosé de pressurage et de saignée","Pressurage direct = rosé pâle et nerveux (vin gris). Saignée = rosé plus foncé et structuré.","Rosé de pressurage : les raisins rouges sont pressés tout de suite, sans macération prolongée ; le jus est très clair et garde une grande fraîcheur. Rosé de saignée : après environ 48 h de macération, on prélève une partie du jus d'une cuve de rouge ; le rosé est plus coloré et le rouge restant se concentre. Ils sont très différents à l'œil et en bouche.",""],
 ["c4-28",4,28,"L'ouillage","Compléter les fûts pour compenser l'évaporation et éviter l'oxydation.","Pendant l'élevage, le vin s'évapore naturellement : c'est la « part des anges ». Si le fût n'est plus plein, l'air oxyde le vin. On complète donc régulièrement le niveau avec le même vin ou un vin de qualité équivalente.",""],
 ["c4-30",4,30,"Le collage","Clarifier en ajoutant une substance qui piège les particules.","La substance (protéine, argile…) se lie aux particules en suspension ; elles se regroupent et se déposent au fond de la cuve, où on les élimine. Produits : blanc d'œuf, bentonite, colle de poisson, gélatine, gels de silice. Le vin devient plus limpide, plus stable, parfois plus rond. Les Romains pratiquaient déjà le collage.",""],
 ["c4-32",4,32,"Le soutirage","Transférer le vin d'un contenant à un autre pour le séparer de ses lies.","Les lies sont les dépôts solides au fond du contenant. Le soutirage aère légèrement le vin, élimine des particules indésirables et favorise la clarification. On le répète plusieurs fois pendant l'élevage.",""],
 ["c4-35",4,35,"La filtration","Faire passer le vin à travers un filtre qui retient les particules.","On obtient un vin limpide et stable microbiologiquement. La filtration peut être grosse, fine ou stérile ; le choix doit préserver au mieux les qualités du vin. Certains vignerons ne filtrent pas : le vin peut alors être un peu trouble sans être mauvais (mention « non filtré »). Vient ensuite la mise en bouteille.",""],
 ["c5-09",5,9,"L'humidité","70 à 75 %.","L'humidité garde les bouchons en bon état, et donc le vin. Trop sèche, la cave dessèche les bouchons et favorise l'oxydation. Trop humide, ce n'est pas néfaste, sauf pour les étiquettes. On s'aide d'une humidité naturelle, d'un humidificateur, ou en arrosant de temps en temps.",""],
 ["c5-12",5,12,"La température","10 à 12 °C, constante.","La température règle la durée de vie du vin. Trop chaud, il évolue plus vite. Trop froid, il évolue lentement et risque des précipitations. Le plus important : éviter les écarts violents.",""],
 ["c5-13",5,13,"La luminosité","Faible et indirecte, jamais dirigée vers le vin, pas de néon.","La lumière n'est pas utile au vieillissement. Le néon donne le « goût de lumière » et oxyde le vin ; l'halogène chauffe la pièce. Mieux vaut éclairer le plafond que les bouteilles.",""],
 ["c5-15",5,15,"L'aération","Un air qui circule : soupirail, purificateur ou appel d'air.","L'aération évite les moisissures et la concentration de mauvaises odeurs, qui peuvent contaminer le vin (odeurs, champignons). Sans aération, les étiquettes s'abîment aussi plus vite.",""],
 ["c5-16",5,16,"Le voisinage","Rien d'autre que du vin, des alcools, des bières, des cidres.","La cave est faite pour recevoir du vin et des boissons. Peinture, acétone, javel, mazout, essence, vinaigre, moutarde, torchons, tondeuse à gazon et poubelles sont dangereux pour le vin.",""],
 ["c5-26",5,26,"La méthode ancestrale","Fermentation interrompue vers 5–7 %, puis reprise en bouteille, sans liqueur de tirage.","On commence la fermentation alcoolique, on l'arrête par le froid vers 5 à 7 % d'alcool, on filtre, puis on met en bouteille. Au printemps, la fermentation reprend dans la bouteille et le CO₂ piégé crée les bulles. Le vin est non dégorgé ou partiellement dégorgé : bulles fines, profil sucré, peu d'alcool, parfois rustique (ex. Cerdon).",""],
 ["c5-30",5,30,"La méthode Charmat","Seconde fermentation dans une grande cuve close, sous pression.","Le vin tranquille reçoit une liqueur de tirage (sucre + levures) dans une cuve fermée où se fait la prise de mousse. Il est ensuite filtré (filtration tangentielle), reçoit une liqueur de dosage et est mis en bouteille sous pression (tirage isobarométrique). Il garde ses arômes primaires : un vin fruité et léger.",""],
 ["c5-33",5,33,"La méthode traditionnelle","Seconde fermentation en bouteille, puis dégorgement.","On ajoute la liqueur de tirage dans chaque bouteille, où se fait la prise de mousse ; le vin vieillit ensuite sur lies, sur lattes. Le remuage (pupitre ou giropalette) amène le dépôt vers le col, le dégorgement l'élimine, puis la liqueur d'expédition (ou de dosage) complète avant le bouchage définitif. Résultat : complexité aromatique, bulles fines, potentiel de garde.","Charmat : en cuve close. Traditionnelle : en bouteille."]
];

const VOCAB=[
 {step:"Visuel",name:"Intensité de la robe",note:"Termes notés au cours 4 : pâle pour les blancs et les rosés, profonde ou foncée pour les rouges.",items:[
  ["Très pâle","Teinte très légère : un blanc, ou un rosé de pressurage direct."],
  ["Moyennement pâle","Teinte légère mais nette : un blanc ou un rosé."],
  ["Profonde","Teinte soutenue : un rouge."],
  ["Foncée","Teinte très soutenue : un rouge."]]},
 {step:"Visuel",name:"Viscosité (les larmes)",scale:false,note:"Les larmes traduisent le gras (glycérol) et surtout la teneur en alcool.",items:[
  ["Faible","Les larmes coulent vite : peu d'alcool peut-être, sans que ce soit un défaut."],
  ["Fluide","Des larmes fines coulent normalement, avec abondance. La plupart des vins."],
  ["Grasse","De grosses larmes coulent très lentement et tapissent le verre : vin riche en alcool."],
  ["Teintée","Larmes colorées : souvent un raisin teinturier, dit « noir de noir »."]]},
 {step:"Olfactif",name:"Intensité aromatique",note:"La puissance odorante.",items:[
  ["Faiblement aromatique","Discret, peu d'expression aromatique, voire imperceptible."],
  ["Moyennement aromatique","Les parfums se révèlent sans difficulté."],
  ["Très aromatique","Explosion immédiate des arômes."]]},
 {step:"Olfactif",name:"Catégorie aromatique dominante",scale:false,items:[
  ["Arômes primaires","Arômes variétaux du cépage : fruits, fleurs, végétal vert."],
  ["Arômes secondaires","Arômes des fermentations : alimentaire, balsamique, minéral."],
  ["Arômes tertiaires","Arômes d'élevage et d'évolution : empyreumatique, boisé, animal, épices."]]},
 {step:"Olfactif",name:"Bouquet",scale:false,note:"L'ensemble du nez : il indique le stade d'évolution du vin.",items:[
  ["Fermé","Le nez boude, il ne sent pas grand-chose : trop jeune ou mauvaise passe."],
  ["Ouvert","Le nez se dévoile pleinement, le vin est à maturité."],
  ["Évolué","Le nez se concentre sur des arômes de la famille végétale tertiaire."],
  ["Réduit","Nez bizarre : lavette, poussière, cave. Il peut encore évoluer."],
  ["Oxydé","Rappelle franchement un vieux porto ou un madère : le vin est fichu."],
  ["Marqué par l'élevage","Le bois neuf domine et écrase les autres arômes."]]},
 {step:"Gustatif",name:"Sucrosité",slide:"c2-27",note:"Blancs et rosés. La première étape de l'analyse gustative.",items:[
  ["Extra sec","Sensation sucrée nulle : la salive ne s'épaissit pas, elle est même fortement abondante."],
  ["Sec","Aucune sensation sucrée, salive abondante. La majorité des vins."],
  ["Sec avec une pointe de sucre","Une faible quantité de sucre nacre le palais et épaissit un peu la salive."],
  ["Demi-sec","La sensation sucrée est directement présente en bouche, sans être trop riche."],
  ["Moelleux","Beaucoup de sucre, salive franchement épaisse. Type vin de dessert."],
  ["Liquoreux","Sucre abondant, sensation épaisse comme une liqueur. Vin de dessert ou de fin de repas."]]},
 {step:"Gustatif",name:"Acidité",slide:"c2-28",note:"La fraîcheur, présente dans tous les vins. Élevée = vin jeune ou climat froid.",items:[
  ["Souple","Peu d'acidité, salivation normale, pas de sensation de fraîcheur."],
  ["Frais","Acidité présente et rafraîchissante, salivation abondante."],
  ["Nerveux","Acidité un peu citrique, léger picotement sur la langue, salive fortement abondante."],
  ["Vert","Acidité franchement élevée : sensation frissonnante et agressive sur la langue."]]},
 {step:"Gustatif",name:"Alcool",slide:"c2-29",note:"Alcool élevé = vin d'une région au climat chaud.",items:[
  ["Léger","Sensation légère en bouche, impression de manque d'alcool."],
  ["Modéré","Sensation d'alcool normale, pas de chaleur particulière."],
  ["Généreux","Sensation chaleureuse : l'alcool est présent sans être dérangeant."],
  ["Corsé","Chaleur évidente : l'alcool s'impose dès le milieu de bouche."],
  ["Capiteux","Sensation brûlante comme une eau-de-vie, surtout en fin de bouche : l'alcool domine."]]},
 {step:"Gustatif",name:"Tanins",slide:"c2-30",note:"Vins rouges. Élevés = vin jeune, macération longue et/ou élevage en fûts.",items:[
  ["Fondu","Aucun assèchement : pas de tanin au départ, ou signe d'évolution."],
  ["Savoureux","Le tanin ne s'impose pas mais assèche un peu la bouche, sans déranger."],
  ["Présent","Le tanin assèche la bouche, la salive disparaît en fin de bouche."],
  ["Astringent","Tanin riche et très asséchant : il domine la bouche et agresse les gencives."]]},
 {step:"Gustatif",name:"Corps",slide:"c2-31",note:"La carrure du vin, liée à l'alcool, l'acidité et les tanins.",items:[
  ["Décharné","Vin fluet, sans matière ni squelette : fragile ou trop évolué."],
  ["Mince","Vin léger : il manque peut-être un peu d'acidité, d'alcool ou de tanins."],
  ["Rond","Équilibré, sans prédominance d'alcool, de tanins ou d'acidité."],
  ["Ferme","Impression d'austérité, de droiture, liée aux tanins et à l'acidité."],
  ["Volumineux","Le vin emplit la bouche et s'impose, souvent grâce à l'alcool."],
  ["Musclé","De la chair et de la mâche : richesse et puissance en bouche."]]},
 {step:"Gustatif",name:"Persistance en bouche",slide:"c2-32",note:"La longueur établit la hiérarchie des vins.",items:[
  ["Courte","Moins de 4 secondes."],
  ["Moyenne","Environ 4 à 8 secondes."],
  ["Longue","Environ 8 à 12 secondes."],
  ["Prolongée","Plus de 12 secondes."]]},
 {step:"Gustatif",name:"Prédominance de l'équilibre",slide:"c2-32",scale:false,note:"La sensation qui domine en bouche.",items:[
  ["Sucrosité","C'est la sensation de douceur qui prédomine."],
  ["Acidité","C'est la sensation de fraîcheur qui prédomine."],
  ["Alcool","C'est la sensation de chaleur qui prédomine."],
  ["Tanins","C'est la sensation asséchante qui prédomine."],
  ["Harmonieux","Équilibre dans la globalité, ou entre deux ou trois de ces sensations."]]},
 {step:"Évaluation",name:"Stade d'évolution",scale:false,items:[
  ["Passé","Le vin a perdu toutes ses qualités, il est déséquilibré et prend des notes de madère."],
  ["Fragile","Signes de faiblesse : corps fluet, manque d'acidité…"],
  ["Épanoui","À maturité, au milieu de sa forme, bel équilibre en général."],
  ["S'ouvre","S'ouvre peu à peu, encore jeune : déjà prêt à boire mais peut encore évoluer."],
  ["Fermé","Paraît encore un peu dur : matière serrée, peu expressif."]]},
 {step:"Évaluation",name:"Potentiel de garde",items:[
  ["Trop évolué","À ne plus garder en cave : vin fichu."],
  ["À boire rapidement","À boire dans les mois qui viennent."],
  ["À boire dans l'année","À boire dans une période d'un an."],
  ["À boire dans 2/3 ans","Bon maintenant, avec encore du potentiel pour évoluer."],
  ["Attendre 4/5 ans","Encore un peu jeune, avec une belle matière pour évoluer."]]},
 {step:"Évaluation",name:"Typicité",items:[
  ["Atypique","Ne ressemble en rien aux typicités de l'appellation, du cépage, de la région."],
  ["Médiocre","Manque de typicité par rapport à l'appellation, au cépage, à la région."],
  ["Correct","Ressemble aux typicités de l'appellation, du cépage, de la région."],
  ["Typé","Répond parfaitement aux typicités de l'appellation, du cépage, de la région."],
  ["Racé","Un modèle de référence pour l'appellation, le cépage, la région."]]},
 {step:"Évaluation",name:"Style de vin",scale:false,items:[
  ["Plaisant","Agréable, facile à boire, sans prétention."],
  ["Gourmand","Fruité, charmeur, avec des tanins savoureux ou une acidité fraîche."],
  ["Élégant","Séduit par un équilibre harmonieux dans son intégralité."],
  ["Puissant ou riche","De la carrure par ses tanins, l'alcool, le sucre ou même l'acidité."],
  ["Grand vin raffiné","Grande classe, précision dans son ensemble : il a de la conversation."],
  ["Marginal","Iconoclaste, surprenant par son style différent des autres."],
  ["Déviant","Contaminé par les arômes de brettanomyces (odeurs d'étable, de putréfaction)."]]},
 {step:"Vinification",name:"Opérations de vinification",items:[
  ["Éraflage","Séparer les baies de la rafle avant la vinification, pour éviter tanins verts et goûts herbacés."],
  ["Foulage","Éclater légèrement la peau des baies pour libérer le jus, sans écraser les pépins."],
  ["Pressurage","En blanc : extraire le jus juste après la récolte, avant toute macération."],
  ["Sulfitage","Ajouter du SO₂ au moût pour le protéger de l'oxydation et freiner levures et bactéries indésirables."],
  ["Débourbage","Clarifier le moût avant la fermentation en éliminant les particules solides en suspension."],
  ["Levurage","Ajouter des levures sélectionnées pour un départ rapide et régulier de la fermentation."],
  ["Macération","Laisser peaux, pulpes et pépins au contact du moût en fermentation pour extraire couleur, tanins et arômes."],
  ["Pigeage","Enfoncer le chapeau de marc dans le moût."],
  ["Remontage","Pomper le jus du bas de la cuve pour l'arroser sur le chapeau de marc."],
  ["Chaptalisation","Ajouter du sucre au moût pour augmenter le degré alcoolique, pas pour sucrer le vin."],
  ["Mutage","Ajouter de l'alcool à 95° en cours de fermentation pour stopper l'action des levures."],
  ["Passerillage","Concentrer le sucre des raisins par dessiccation, sur pied ou après la récolte."],
  ["Pourriture noble","Concentration des sucres et des arômes par l'action du champignon Botrytis cinerea."],
  ["Fermentation alcoolique","Transformation des sucres en alcool et en gaz carbonique par les levures."],
  ["Fermentation malolactique","Transformation de l'acide malique en acide lactique par des bactéries."],
  ["Élevage","Période de maturation entre la fermentation et la mise en bouteille."],
  ["Ouillage","Compléter régulièrement le niveau des fûts pour compenser la « part des anges »."],
  ["Collage","Ajouter une substance (protéine, argile…) qui se lie aux particules en suspension pour clarifier le vin."],
  ["Soutirage","Transférer le vin d'un contenant à un autre en le séparant de ses lies."],
  ["Filtration","Faire passer le vin à travers un support qui retient les particules en suspension."],
  ["Dégorgement","Méthode traditionnelle : éliminer le dépôt de levures après le vieillissement sur lies."],
  ["Liqueur de tirage","Sucre et levures ajoutés au vin tranquille pour provoquer la prise de mousse."]]},
 {step:"Organisation",name:"Types de dégustation",items:[
  ["Analyse globale","Décortiquer couleur, arômes, tanins, acidité, corps… pour comprendre ce que l'on déguste."],
  ["Comparaison","Comparer deux vins très différents (repères) ou très proches (nuances)."],
  ["Classement","Établir une hiérarchie entre vins comparables, par exemple uniquement des Saint-Émilion."],
  ["Verticale","Un même vin, du même domaine, sur plusieurs millésimes."],
  ["Horizontale","Différents vins d'un même millésime."],
  ["À l'aveugle","Analyser un vin sans savoir ce que c'est, pour retrouver cépage, région, millésime."]]}
];


const EXTRA_RUBS=[
  {part:"Œil",name:"Limpidité",words:["Limpide","Trouble","Voilé","Laiteux"]},
  {part:"Œil",name:"Robe d'un vin blanc",words:["Jaune vert","Jaune pâle","Vert d'eau","Paille","Or / doré","Ambré"]},
  {part:"Œil",name:"Robe d'un vin rouge",words:["Reflet violacé","Grenat","Rubis","Vermillon","Orange","Brique"]},
  {part:"Œil",name:"Robe d'un vin rosé",words:["Gris","Rose","Framboise","Cerise","Saumoné","Orangé"]}
];
const AROMES=[
  {part:"Arômes",name:"Arômes primaires",words:["Citron","Pamplemousse","Pomme","Abricot","Pêche","Poire","Coing","Fraise","Cerise","Cassis","Mûre","Banane","Litchi","Amande","Bourgeon de cassis","Buis","Fenouil","Menthe","Poivron vert","Rose","Aubépine","Tilleul","Fleur d'oranger","Violette","Acacia","Miel"]},
  {part:"Arômes",name:"Arômes secondaires",words:["Pain frais","Biscuit","Beurre","Levure","Bière","Caramel","Bonbon","Yaourt","Chocolat","Résine","Térébenthine","Vernis","Acétone","Colle à bois","Iode","Craie","Argile","Pierre à fusil","Galet mouillé","Terre humide"]},
  {part:"Arômes",name:"Arômes tertiaires",words:["Fumée","Goudron","Pétrole","Toasté","Grillé","Poivre","Muscade","Cannelle","Clou de girofle","Vanille","Réglisse","Cuir","Fourrure","Gibier","Jus de viande","Bois neuf","Cèdre","Chêne","Foin","Feuilles mortes","Tabac","Humus","Truffe","Sous-bois"]}
];

/* [affirmation, vrai ?, explication] */
const VF=[
 ["Il faut 17 g de sucre par litre pour obtenir 1° d'alcool.",true,"17 g/L = 1°, soit 1,7 kg par hectolitre."],
 ["La chaptalisation sert à rendre le vin plus sucré.",false,"Elle augmente le degré alcoolique : les levures transforment le sucre ajouté en alcool."],
 ["La chaptalisation est autorisée partout, sans condition.",false,"Elle est réglementée et autorisée seulement dans certaines régions et conditions."],
 ["La fermentation malolactique est réalisée par des levures.",false,"Par des bactéries lactiques. Les levures font la fermentation alcoolique."],
 ["La fermentation malolactique diminue l'acidité du vin.",true,"Elle transforme l'acide malique en acide lactique : le vin est plus rond."],
 ["La fermentation malolactique est obligatoire pour les vins blancs.",false,"Elle est au choix pour les blancs, indispensable pour les rouges."],
 ["La fermentation malolactique a toujours lieu pour les vins rouges.",true,"« Toujours pour le rouge »."],
 ["La fermentation alcoolique s'arrête vers 40 °C.",true,"Idéale entre 20 et 28 °C, ralentie à 35 °C, arrêtée à 40 °C."],
 ["À 0 °C, la fermentation alcoolique est simplement ralentie.",false,"À 0 °C, il n'y a pas de fermentation. Elle est ralentie vers 10–11 °C."],
 ["En vinification en blanc, on presse les raisins après la fermentation.",false,"En blanc, on presse juste après la récolte, avant la fermentation."],
 ["Le débourbage se fait avant la fermentation.",true,"Il clarifie le moût en retirant les bourbes."],
 ["Le soutirage consiste à séparer le vin de ses lies.",true,"On transfère le vin dans un autre contenant."],
 ["L'ouillage sert à clarifier le vin.",false,"Il compense l'évaporation (part des anges) pour éviter l'oxydation."],
 ["La bentonite est utilisée pour le collage.",true,"Avec le blanc d'œuf, la colle de poisson, la gélatine, les gels de silice."],
 ["Le vin de presse est plus riche en tanins que le vin de goutte.",true,"Il est plus riche en tanins et en couleur."],
 ["Le remontage consiste à enfoncer le chapeau de marc dans le moût.",false,"C'est le pigeage. Le remontage arrose le chapeau avec le jus pompé en bas de cuve."],
 ["Un bon foulage écrase les pépins pour extraire plus de tanins.",false,"Le foulage préserve les pépins ; un écrasement excessif donne de l'amertume."],
 ["L'éraflage évite les tanins verts et les goûts herbacés.",true,"La rafle apporte des tanins verts."],
 ["Un rosé de saignée est plus pâle qu'un vin gris.",false,"Le vin gris (pressurage direct) est le plus pâle ; la saignée donne un rosé plus foncé."],
 ["Un vin gris est obtenu par pressurage direct de raisins rouges.",true,"D'où un rosé pâle et nerveux."],
 ["Le Botrytis cinerea est responsable de la pourriture noble.",true,"Il concentre sucres et arômes : liquoreux complexes."],
 ["Le passerillage peut se faire sur souche ou hors souche.",true,"Sur pied (vendanges tardives) ou sur claies, suspendus."],
 ["Pour un VDN, on ajoute l'alcool avant la fermentation.",false,"En cours de fermentation. Avant la fermentation, c'est un vin de liqueur (mistelle)."],
 ["Une mistelle est un vin de liqueur.",true,"Alcool noble ajouté avant fermentation."],
 ["Un VDN doit avoir au moins 15° d'alcool acquis.",true,"Et 21,5 % d'alcool total."],
 ["La température idéale d'une cave est de 10 à 12 °C.",true,"Constante, sans écart violent."],
 ["Une cave trop humide abîme surtout le vin.",false,"Trop d'humidité n'est pas néfaste, sauf pour l'étiquette."],
 ["Le néon est conseillé pour éclairer une cave.",false,"Il donne le « goût de lumière » et oxyde le vin."],
 ["On peut ranger la moutarde et le vinaigre dans la cave à vin.",false,"Seulement vins, alcools, bières, cidres."],
 ["Il est conseillé de ne pas acheter plus de 24 bouteilles du même vin.",true,"Qualité plutôt que quantité."],
 ["Le garage est un bon endroit pour stocker du vin.",false,"À éviter, comme le salon, la cheminée, le dessous de l'escalier."],
 ["Dans la méthode traditionnelle, la prise de mousse se fait en bouteille.",true,"Liqueur de tirage dans la bouteille, puis vieillissement sur lattes."],
 ["Dans la méthode Charmat, la prise de mousse se fait en bouteille.",false,"En cuve close."],
 ["La méthode ancestrale donne un vin sucré et faible en alcool.",true,"La fermentation est interrompue vers 5–7 %."],
 ["Le dégorgement fait partie de la méthode Charmat.",false,"Il fait partie de la méthode traditionnelle ; la Charmat filtre le vin."],
 ["La méthode ancestrale utilise une liqueur de tirage.",false,"La fermentation reprend en bouteille sans ajout de liqueur de tirage."],
 ["Une dégustation verticale compare différents vins d'un même millésime.",false,"Ça, c'est l'horizontale. La verticale : un même vin, plusieurs millésimes."],
 ["On sert le rouge avant le blanc.",false,"Blanc, rosé, rouge, moelleux, liquoreux."],
 ["Pour déguster, on verse 5 à 6 cl de vin.",true,"5 à 6 cl maximum."],
 ["Le verre INAO se resserre vers le haut pour concentrer les arômes.",true,"C'est le verre des dégustations techniques."],
 ["Le meilleur moment pour déguster est juste après le repas.",false,"Pendant la digestion, l'acuité diminue. L'idéal est le matin."],
 ["En dégustation, les rouges sont présentés vers 18 °C.",true,"Et 13–14 °C pour les blancs et rosés."],
 ["Une acidité élevée indique souvent un vin de climat chaud.",false,"Plutôt un vin jeune ou d'un climat froid."],
 ["Un alcool élevé indique souvent un vin de climat chaud.",true,"Plus de soleil, plus de sucre, plus d'alcool."],
 ["L'alcool amplifie la sensation sucrée.",true,"Un vin plus alcoolisé paraît plus sucré."],
 ["L'amer se perçoit rapidement et disparaît vite.",false,"Il est lent à se développer et dure longtemps."],
 ["Les acides font saliver davantage que les autres saveurs.",true,"Salive fluide et abondante."],
 ["Le sucré se perçoit sur le bout de la langue, immédiatement.",true,"Maximum après 2 s, disparaît après 10 s."],
 ["Le premier nez se fait après avoir fait tourner le vin.",false,"Le premier nez se fait sans remuer ; le second après agitation."],
 ["Les arômes secondaires viennent des fermentations.",true,"Familles alimentaire, balsamique, minérale."],
 ["Le cuir et le gibier sont des arômes primaires.",false,"Ce sont des arômes tertiaires (famille animale)."],
 ["Un nez « réduit » peut encore évoluer.",true,"Lavette, poussière, cave : il peut s'améliorer."],
 ["Un vin rouge perd de sa couleur en vieillissant.",true,"Il passe du violacé au tuilé et perd en intensité."],
 ["Un vin blanc s'éclaircit en vieillissant.",false,"Il se fonce : doré, puis ambré."],
 ["Un vin trouble est toujours un vin défectueux.",false,"Il peut être non filtré."],
 ["Des larmes grasses indiquent un vin riche en alcool.",true,"Elles coulent lentement et tapissent le verre."],
 ["Un nez oxydé rappelle un vieux porto ou un madère.",true,"Le vin est fichu."],
 ["Le millésime est une mention obligatoire sur l'étiquette.",false,"C'est une mention facultative."],
 ["Le volume d'alcool est une mention obligatoire.",true,"Avec l'appellation, la contenance, l'embouteilleur, le lot et les mentions sanitaires."],
 ["Depuis 2023, un QR code peut donner la liste des ingrédients.",true,"Depuis le 8 décembre 2023, avec la fiche nutritionnelle."],
 ["Le phylloxéra est apparu dans le Gard en 1864.",true,"La solution a été le greffage des pieds de vigne."],
 ["L'INAO a été créé en 1958.",false,"En 1935. La CEE date de 1958."],
 ["Le goût de bouchon est dû au TCA (trichloroanisole).",true,"90 milliardièmes de gramme par litre suffisent."],
 ["La véraison est la formation des grains.",false,"C'est le changement de couleur. La formation des grains est la nouaison."],
 ["L'orientation du vignoble fait partie du facteur humain.",false,"Elle fait partie du milieu cultural (la nature)."],
 ["Le choix du porte-greffe fait partie du facteur humain.",true,"Comme les cépages, les rendements, la date des vendanges."],
 ["Une persistance de plus de 12 secondes est dite prolongée.",true,"Longue : 8 à 12 s."],
 ["Un vin « ferme » a un nez qui ne sent pas grand-chose.",false,"Ça, c'est un nez « fermé ». « Ferme » décrit un corps austère, droit."],
 ["L'évaluation du vin se complète quand on connaît son identité.",true,"Stade, garde, typicité, style."],
 ["Un vin « déviant » est contaminé par des brettanomyces.",true,"Odeurs d'étable, de putréfaction."]
];

/* [question, bonne réponse, [3 leurres], explication] */
const CHIFFRES=[
 ["Sucre nécessaire pour 1° d'alcool","17 g par litre",["1,7 g par litre","170 g par litre","7 g par litre"],"Soit 1,7 kg par hectolitre."],
 ["Sucre ajouté pour gagner 1° (chaptalisation)","1,7 kg par hectolitre",["17 kg par hectolitre","0,17 kg par hectolitre","7 kg par hectolitre"],"C'est le même rapport que 17 g par litre."],
 ["Dose habituelle de chaptalisation","2 à 3 kg par hectolitre",["20 à 30 kg par hectolitre","0,2 à 0,3 kg par hectolitre","10 kg par hectolitre"],""],
 ["Température idéale de fermentation alcoolique","20 à 28 °C",["10 à 12 °C","30 à 38 °C","0 à 5 °C"],""],
 ["Arrêt de la fermentation alcoolique","40 °C",["28 °C","35 °C","50 °C"],"À 35 °C elle est seulement ralentie."],
 ["Fermentation ralentie par le froid","10–11 °C",["20 °C","0 °C","28 °C"],"À 0 °C, pas de fermentation du tout."],
 ["Degré de l'alcool de mutage des VDN","95°",["40°","70°","15°"],""],
 ["Part d'alcool ajoutée pour muter un VDN","5 à 10 % du moût",["1 à 2 % du moût","20 à 30 % du moût","50 % du moût"],""],
 ["Alcool acquis minimum d'un VDN","15°",["12°","21,5°","6,5°"],"Et 21,5 % d'alcool total."],
 ["Alcool total minimum d'un VDN","21,5 %",["15 %","6,5 %","30 %"],"Dont 6,5 % en puissance."],
 ["Macération d'un rosé de saignée","environ 48 h",["environ 2 h","2 semaines","6 mois"],""],
 ["Arrêt de la fermentation, méthode ancestrale","5 à 7 % d'alcool",["10 à 12 % d'alcool","1 à 2 % d'alcool","15 % d'alcool"],""],
 ["Température d'une cave","10 à 12 °C",["16 à 18 °C","4 à 6 °C","20 à 22 °C"],""],
 ["Humidité d'une cave","70 à 75 %",["30 à 40 %","50 %","95 %"],""],
 ["Bouteilles maximum d'un même vin","24",["6","60","120"],""],
 ["Dose de vin pour déguster","5 à 6 cl",["10 à 12 cl","1 cl","25 cl"],""],
 ["Nombre maximum de vins en dégustation pro","15 à 18",["5 à 6","30 à 40","50"],""],
 ["Température de présentation des rouges","18 °C",["12 °C","22 °C","8 °C"],"Un peu au-dessus de l'idéal de consommation."],
 ["Température de présentation des blancs et rosés","13 à 14 °C",["6 à 8 °C","18 °C","20 °C"],""],
 ["Persistance courte","moins de 4 s",["moins de 10 s","moins de 1 s","8 à 12 s"],""],
 ["Persistance moyenne","4 à 8 s",["8 à 12 s","1 à 2 s","plus de 12 s"],""],
 ["Persistance longue","8 à 12 s",["4 à 8 s","plus de 12 s","1 à 2 s"],""],
 ["Durée de l'attaque en bouche","2 à 3 s",["10 s","30 s","1 min"],"Le milieu de bouche dure une dizaine de secondes."],
 ["Floraison avant la vendange","environ 100 jours",["environ 30 jours","environ 200 jours","1 an"],""],
 ["Eau dans 1 litre de jus de pulpe","700 à 800 g",["100 à 300 g","500 g","950 g"],""],
 ["Sucre dans 1 litre de jus de pulpe","100 à 300 g",["5 à 15 g","700 à 800 g","20 à 30 g"],""],
 ["Acides dans 1 litre de jus de pulpe","5 à 15 g",["100 à 300 g","0,5 à 1 g","50 g"],""],
 ["Arômes identifiés dans les vins","environ 600",["environ 60","environ 6 000","environ 30"],"Un vin en contient environ 300, dont 7 décelables."],
 ["Absences sans motif valable tolérées","20 %",["10 %","50 %","5 %"],""],
 ["Délai pour un justificatif d'absence","5 jours ouvrables",["1 jour","15 jours","1 mois"],""],
 ["Apparition du phylloxéra dans le Gard","1864",["1709","1907","1935"],""],
 ["Création de l'INAO","1935",["1958","1907","1984"],""],
 ["Première mention « premier cru »","100 av. J.-C.",["92","1935","1709"],""],
 ["Fête des Vinalies chez les Romains","23 avril",["1er mai","15 août","11 novembre"],""]
];

/* séries de classement : {name, buckets, items:[texte, case, explication]} */
const CLASSER=[
 {name:"Blanc, rouge ou les deux ?",buckets:["Blanc","Rouge","Les deux"],items:[
  ["Pressurage avant la fermentation",0,"En blanc, on presse juste après la récolte."],
  ["Pressurage après la fermentation",1,"En rouge, on presse le marc : vin de presse."],
  ["Débourbage du moût",0,"Clarification du jus avant fermentation, en blanc."],
  ["Macération des peaux pendant la fermentation",1,"Elle donne couleur et tanins."],
  ["Remontage ou pigeage",1,"On travaille le chapeau de marc."],
  ["Formation d'un chapeau de marc",1,"Uniquement en rouge."],
  ["Fermentation alcoolique",2,"Tous les vins."],
  ["Malolactique toujours réalisée",1,"Indispensable en rouge."],
  ["Malolactique au choix",0,"Facultative en blanc."],
  ["Vin de goutte et vin de presse",1,""],
  ["Élevage",2,""],
  ["Vendanges",2,""],
  ["Sulfitage juste après le pressurage",0,"En rouge, le sulfitage est facultatif, après le foulage."],
  ["Décuvage",1,"On écoule le vin de goutte."],
  ["Assemblage goutte + presse",1,""]]},
 {name:"Quelle méthode d'effervescent ?",buckets:["Ancestrale","Charmat","Traditionnelle"],items:[
  ["Fermentation arrêtée par le froid",0,""],
  ["Prise de mousse au printemps, en bouteille",0,""],
  ["Pas de liqueur de tirage",0,""],
  ["Vin sucré et faible en alcool",0,""],
  ["Exemple : Cerdon",0,""],
  ["Prise de mousse en cuve close",1,""],
  ["Filtration tangentielle",1,""],
  ["Tirage isobarométrique",1,""],
  ["Arômes primaires préservés, vin fruité et léger",1,""],
  ["Liqueur de tirage ajoutée dans la bouteille",2,""],
  ["Remuage sur pupitre ou giropalette",2,""],
  ["Dégorgement puis liqueur d'expédition",2,""],
  ["Vieillissement sur lattes",2,""],
  ["Grande complexité et potentiel de garde",2,""]]},
 {name:"Naturellement doux, VDN ou VDL ?",buckets:["Naturellement doux","VDN","VDL"],items:[
  ["Passerillage",0,"Concentration du sucre par dessiccation."],
  ["Pourriture noble",0,"Botrytis cinerea."],
  ["Vendanges tardives",0,"Passerillage sur souche."],
  ["Raisins séchés sur claies",0,"Passerillage hors souche."],
  ["Alcool vinique à 95°",1,""],
  ["Mutage en cours de fermentation",1,""],
  ["Au moins 15° acquis et 21,5 % total",1,""],
  ["Mutage sur grains ou sur jus",1,""],
  ["Alcool noble",2,""],
  ["Mutage avant la fermentation",2,""],
  ["Mistelle",2,""]]},
 {name:"Milieu cultural ou facteur humain ?",buckets:["Milieu cultural","Facteur humain"],items:[
  ["Nature du sol",0,""],["Sous-sol",0,""],["Climat",0,""],["Lumière",0,""],["Vent",0,""],["Humidité",0,""],["Orientation du vignoble",0,""],
  ["Choix des cépages",1,""],["Mode de conduite",1,""],["Rendements",1,""],["Choix du porte-greffe",1,""],["Reconstitution du vignoble",1,""],["Date des vendanges",1,""],["Conduite des vinifications",1,""],["Élevage du vin",1,""]]},
 {name:"Mention obligatoire ou facultative ?",buckets:["Obligatoire","Facultative"],items:[
  ["Volume d'alcool",0,""],["Volume de contenance",0,""],["Embouteilleur",0,""],["Numéro de lot",0,""],["Mentions sanitaires",0,""],["Nom et hiérarchie de l'appellation",0,""],["Valeur énergétique (depuis 2023)",0,""],
  ["Millésime",1,""],["Nom du cépage",1,""],["Marque ou nom du domaine",1,""],["Mise en bouteille à la propriété",1,""],["Culture bio",1,""],["Médailles de concours",1,""],["Vieilles vignes",1,""],["Élevé en fûts",1,""],["Sur lie",1,""],["Cru classé",1,""]]},
 {name:"L'œil, le nez ou la bouche ?",buckets:["Œil","Nez","Bouche"],items:[
  ["Viscosité",0,""],["Limpidité",0,""],["Intensité de la robe",0,""],["Larmes",0,""],["Perlant",0,""],["Reflets violacés",0,""],
  ["Bouquet",1,""],["Premier nez",1,""],["Intensité aromatique",1,""],["Arômes tertiaires",1,""],["Nez réduit",1,""],["Marqué par l'élevage",1,""],
  ["Sucrosité",2,""],["Tanins",2,""],["Corps",2,""],["Persistance",2,""],["Attaque",2,""],["Astringent",2,""],["Capiteux",2,""],["Nerveux",2,""]]},
 {name:"Quelle partie du raisin ?",buckets:["Pellicule","Pulpe","Pépin","Rafle"],items:[
  ["Matières colorantes (anthocyanes)",0,""],["Arômes du cépage",0,""],["Tanins les plus fins",0,""],
  ["700 à 800 g d'eau par litre",1,""],["Le sucre du jus",1,""],["Acides malique, tartrique, citrique",1,""],
  ["Substances huileuses",2,""],
  ["Partie ligneuse de la grappe",3,""],["Tanins verts, goûts herbacés",3,""]]},
 {name:"Quel soin ?",buckets:["Ouillage","Collage","Soutirage","Filtration"],items:[
  ["Compenser la part des anges",0,""],["Éviter l'oxydation dans le fût",0,""],
  ["Blanc d'œuf, bentonite, gélatine",1,""],["Une substance se lie aux particules",1,""],
  ["Séparer le vin de ses lies",2,""],["Changer le vin de contenant",2,""],
  ["Grosse, fine ou stérile",3,""],["Support filtrant",3,""]]},
 {name:"Quelle règle de la cave ?",buckets:["Température","Humidité","Luminosité","Voisinage"],items:[
  ["10 à 12 °C",0,""],["Éviter les écarts violents",0,""],["Risque de précipitations si trop froid",0,""],
  ["70 à 75 %",1,""],["Bouchons desséchés",1,""],["Seule l'étiquette souffre de l'excès",1,""],
  ["Pas de néon",2,""],["Goût de lumière",2,""],["Éclairer le plafond",2,""],
  ["Pas de vinaigre ni de moutarde",3,""],["Pas de tondeuse ni de mazout",3,""]]},
 {name:"Arôme primaire, secondaire ou tertiaire ?",buckets:["Primaire","Secondaire","Tertiaire"],items:null}
];

const scales=VOCAB.filter(g=>g.scale!==false&&["Gustatif","Olfactif","Évaluation"].includes(g.step)).map(g=>({name:g.name,scale:true,items:g.items.map(x=>[x[0]])}));
  const SEQS=[
    {name:"Phases de la maturation",items:[["Floraison","mai–juin"],["Nouaison","juin–juillet"],["Véraison","juillet–août"],["Maturité","août–septembre"],["Surmaturité","octobre–novembre"]]},
    {name:"Vinification en blanc",items:[["Vendanges"],["Éraflage ou égrappage"],["Pressurage"],["Sulfitage"],["Débourbage"],["Levurage"],["Fermentation alcoolique"],["Fermentation malolactique (facultative)"],["Élevage"]]},
    {name:"Vinification en rouge",items:[["Vendanges"],["Éraflage (facultatif)"],["Foulage"],["Sulfitage (facultatif)"],["Levurage (facultatif)"],["Macération + fermentation alcoolique"],["Remontage ou pigeage"],["Décuvage du vin de goutte"],["Pressurage : vin de presse"],["Assemblage + fermentation malolactique"],["Élevage"]]},
    {name:"Méthode traditionnelle",items:[["Fermentation complète en cuve : vin tranquille"],["Liqueur de tirage ajoutée dans la bouteille"],["Prise de mousse en bouteille, vieillissement sur lattes"],["Remuage sur pupitre ou giropalette"],["Dégorgement"],["Liqueur de dosage (d'expédition)"]]},
    {name:"Méthode Charmat (cuve close)",items:[["Fermentation complète en cuve : vin tranquille"],["Liqueur de tirage (sucre + levures) dans la cuve"],["Prise de mousse en cuve close"],["Filtration tangentielle"],["Liqueur de dosage et tirage isobarométrique"]]},
    {name:"Méthode ancestrale",items:[["Début de fermentation alcoolique (5 à 7 %)"],["Arrêt de la fermentation par le froid, filtration"],["Tirage en bouteille"],["Prise de mousse au printemps, en bouteille"]]},
    {name:"Histoire du vignoble",items:[["Premiers vins en Asie Mineure","7000 av. J.-C."],["Domitien fait arracher les vignes","92"],["Probus encourage la plantation de la vigne","281"],["Le terrible hiver","1709"],["Apparition du phylloxéra dans le Gard","1864"],["Révolution dans le Midi","1907"],["Création de l'INAO","1935"],["Création de la CEE","1958"],["Compromis de Dublin","1984"]]},
    {name:"Ordre de service en dégustation",items:[["Blanc"],["Rosé"],["Rouge"],["Moelleux"],["Liquoreux"]]},
    {name:"Les étapes de l'analyse",items:[["Analyse visuelle"],["Analyse olfactive"],["Analyse gustative"],["Évaluation du vin"]]},
    {name:"Les 3 temps en bouche",items:[["L'attaque"],["Le milieu de bouche"],["La fin de bouche (finale)"]]}
  ].concat(scales);

const QCM=[
    ["Combien de sucre faut-il pour former 1° d'alcool ?",["17 g par litre","1,7 g par litre","170 g par litre","7 g par litre"],"17 g de sucre par litre donnent 1° d'alcool, soit 1,7 kg par hectolitre (le chiffre de la chaptalisation)."],
    ["Qu'est-ce que la chaptalisation ?",["Ajouter du sucre au moût pour augmenter le degré alcoolique","Ajouter du sucre au vin pour le rendre plus doux","Ajouter de l'alcool pour stopper la fermentation","Ajouter du SO₂ pour éviter l'oxydation"],"Elle ne vise pas à sucrer le vin mais à compenser un manque naturel de sucre. Elle est réglementée."],
    ["Combien de saccharose ajoute-t-on en général lors d'une chaptalisation ?",["2 à 3 kg par hectolitre","20 à 30 kg par hectolitre","200 à 300 g par hectolitre","1 kg par litre"],"2 à 3 kg par hectolitre ; 1,7 kg par hectolitre = 1° d'alcool."],
    ["Une vendange trop précoce donne des vins…",["acides et verts","mous et alcooleux","liquoreux","oxydés"],"Trop tardive, elle donne des vins mous et alcooleux."],
    ["Qu'est-ce que le vigneron recherche principalement lors de la vendange ?",["La maturation parfaite du raisin","Un important volume de raisin","Une faible quantité de sucre","Un raisin riche en acidité"],"La maturité fixe l'équilibre entre sucres, acides et arômes (exemple de QCM donné au cours 1)."],
    ["La véraison, c'est…",["le changement de couleur des baies","la formation des grains","la floraison","la récolte"],"Juillet–août. La nouaison est la formation des grains (juin–juillet)."],
    ["La floraison a lieu environ…",["100 jours avant la vendange","30 jours avant la vendange","200 jours avant la vendange","juste après la vendange"],"En mai–juin, environ 100 jours avant la vendange."],
    ["La fermentation alcoolique transforme…",["le sucre en alcool, par les levures","l'acide malique en acide lactique, par les bactéries","l'alcool en vinaigre","l'acide tartrique en sucre"],"Levures (Saccharomyces cerevisiae) + sucre = alcool + CO₂, glycérol…"],
    ["La fermentation malolactique transforme…",["l'acide malique en acide lactique","le sucre en alcool","l'acide lactique en acide malique","l'alcool en acide acétique"],"Par des bactéries. Résultat : l'acidité diminue, le vin est plus rond et plus stable."],
    ["La fermentation malolactique est…",["indispensable en rouge, au choix en blanc","obligatoire en blanc, interdite en rouge","obligatoire pour tous les vins","réservée aux effervescents"],"« Indispensable pour les rouges !! Au choix pour les blancs »."],
    ["À quelle température la fermentation alcoolique s'arrête-t-elle ?",["40 °C","28 °C","20 °C","10 °C"],"Idéale entre 20 et 28 °C, ralentie à 10–11 °C et à 35 °C, arrêtée à 40 °C, nulle à 0 °C."],
    ["En vinification en blanc, le pressurage a lieu…",["juste après la récolte, avant la fermentation","après la fermentation alcoolique","après la malolactique","pendant l'élevage"],"En rouge, c'est l'inverse : on presse après la fermentation et la macération."],
    ["Le débourbage consiste à…",["clarifier le moût avant la fermentation","retirer la rafle","séparer le vin de ses lies pendant l'élevage","compléter le niveau des fûts"],"Ne pas confondre avec le soutirage, qui sépare le vin de ses lies pendant l'élevage."],
    ["Quelle opération sépare le vin de ses lies en le changeant de contenant ?",["Le soutirage","L'ouillage","Le collage","Le débourbage"],"Le soutirage aère légèrement le vin et aide à le clarifier. Il est répété pendant l'élevage."],
    ["L'ouillage sert surtout à…",["éviter l'oxydation en compensant l'évaporation","clarifier le vin","ajouter des levures","augmenter le degré"],"On complète les fûts pour compenser la « part des anges »."],
    ["Lequel n'est PAS un produit de collage ?",["Le saccharose","Le blanc d'œuf","La bentonite","La colle de poisson"],"Collage : blanc d'œuf, bentonite, colle de poisson, gélatine, gels de silice. Le saccharose sert à la chaptalisation."],
    ["Par rapport au vin de goutte, le vin de presse est…",["plus riche en tanins et en couleur","plus pâle et plus léger","plus sucré","identique"],"Le vin de goutte s'écoule sans pression ; le vin de presse vient du pressurage du marc."],
    ["Le pigeage consiste à…",["enfoncer le chapeau de marc dans le moût","pomper le jus pour arroser le chapeau","presser le marc","retirer la rafle"],"Arroser le chapeau avec le jus pompé en bas de cuve, c'est le remontage."],
    ["Un rosé de saignée est…",["plus foncé et plus structuré qu'un vin gris","plus pâle et plus nerveux qu'un vin gris","un mélange de blanc et de rouge","obtenu par pressurage direct"],"Saignée : environ 48 h de macération. Vin gris : pressurage direct, rosé pâle et nerveux."],
    ["La pourriture noble est due à…",["Botrytis cinerea","Saccharomyces cerevisiae","le phylloxéra","Brettanomyces"],"Le champignon perce la peau, l'eau s'évapore, sucres et arômes se concentrent."],
    ["Le passerillage, c'est…",["concentrer le sucre en laissant sécher les raisins","ajouter de l'alcool au moût","l'action d'un champignon sur le raisin","ajouter du sucre au moût"],"Sur souche (vendanges tardives) ou hors souche (sur claies, suspendus)."],
    ["Pour un vin doux naturel (VDN), le mutage se fait…",["avec de l'alcool vinique à 95°, en cours de fermentation","avec de l'alcool noble, avant fermentation","avec du sucre, avant fermentation","par le froid, en fin de fermentation"],"L'alcool stoppe les levures et garde une partie du sucre. 5 à 10 % du volume du moût."],
    ["Une mistelle, c'est…",["un vin de liqueur, muté avant fermentation","un vin doux naturel","un vin effervescent","un vin passerillé"],"Vins de liqueur : adjonction d'alcool noble avant fermentation."],
    ["Un VDN doit avoir au minimum…",["15° d'alcool acquis et 21,5 % d'alcool total","12° acquis et 15 % total","21,5° acquis","6,5° acquis"],"15° acquis, 21,5 % au total, dont 6,5 % en puissance (sous forme de sucre)."],
    ["Quelle est la bonne température d'une cave ?",["10 à 12 °C, constante","16 à 18 °C","4 à 6 °C","peu importe si elle varie"],"Trop chaud : le vin évolue plus vite. Trop froid : évolution lente, précipitations. Éviter les écarts violents."],
    ["Quelle humidité faut-il dans une cave ?",["70 à 75 %","30 à 40 %","50 %","95 à 100 %"],"Trop peu : bouchons desséchés, oxydation. Trop : seule l'étiquette souffre."],
    ["Pourquoi éviter le néon dans une cave ?",["Il donne le « goût de lumière » et oxyde le vin","Il chauffe trop la pièce","Il assèche les bouchons","Il consomme trop"],"C'est l'halogène qui chauffe la pièce. Mieux vaut éclairer le plafond que les bouteilles."],
    ["Combien de bouteilles d'un même vin au maximum conseille-t-on ?",["24","6","60","120"],"Préférer la qualité à la quantité et acheter des millésimes jeunes."],
    ["Lequel ne doit PAS être stocké dans une cave à vin ?",["Du vinaigre","De la bière","Du cidre","Des alcools"],"Vinaigre, moutarde, peinture, javel, mazout, torchons, tondeuse… sont dangereux pour le vin."],
    ["Dans la méthode traditionnelle, la prise de mousse a lieu…",["en bouteille","en cuve close","il n'y en a pas","en fût"],"Liqueur de tirage dans la bouteille, puis vieillissement sur lattes, remuage, dégorgement."],
    ["Quelle méthode arrête la fermentation par le froid vers 5–7 % d'alcool ?",["La méthode ancestrale","La méthode Charmat","La méthode traditionnelle","La gazéification"],"La fermentation reprend en bouteille au printemps : vin sucré et peu alcoolisé (ex. Cerdon)."],
    ["La méthode Charmat donne plutôt des vins…",["fruités et légers","très complexes, de longue garde","sucrés et peu alcoolisés","tranquilles"],"La seconde fermentation en cuve close préserve les arômes primaires."],
    ["Une dégustation verticale compare…",["un même vin sur plusieurs millésimes","différents vins d'un même millésime","des vins sans connaître leur identité","des vins de régions différentes"],"C'est la slide post-it du cours 1. L'horizontale : différents vins, même millésime."],
    ["Dans quel ordre sert-on les vins ?",["Blanc, rosé, rouge, moelleux, liquoreux","Rouge, rosé, blanc, liquoreux","Liquoreux, moelleux, blanc, rouge","Rosé, blanc, liquoreux, rouge"],"Aussi : les plus simples avant les plus complexes, les plus jeunes avant les plus évolués."],
    ["Quelle quantité verse-t-on pour déguster ?",["5 à 6 cl","10 à 12 cl","1 à 2 cl","15 cl"],"5 à 6 cl maximum, dans un verre INAO."],
    ["Une acidité élevée indique plutôt…",["un vin jeune ou d'un climat froid","un vin d'un climat chaud","un vin très évolué","un élevage en fût"],"Alcool élevé = climat chaud. Tanin élevé = vin jeune, macération longue et/ou fût."],
    ["Un tanin élevé indique plutôt…",["un vin jeune, une macération longue et/ou un élevage en fûts","un vin très âgé","un vin de climat froid","un vin blanc"],"Clé d'interprétation marquée d'un post-it (cours 2)."],
    ["En quelle année le phylloxéra apparaît-il dans le Gard ?",["1864","1709","1907","1935"],"La solution : le greffage des pieds de vigne."],
    ["Quelle institution est créée en 1935 ?",["L'INAO","La CEE","L'OCM","L'OIV"],"La CEE est créée en 1958, le compromis de Dublin date de 1984."],
    ["Laquelle est une mention OBLIGATOIRE sur l'étiquette ?",["Le volume d'alcool","Le millésime","Le nom du cépage","Les médailles"],"Millésime, cépage et médailles sont facultatifs."],
    ["Quelle famille d'arômes est tertiaire ?",["Animale (cuir, gibier)","Florale (rose, violette)","Alimentaire (pain frais, beurre)","Fruitée (cassis, cerise)"],"Tertiaires : empyreumatique, boisé, épices, animal, végétal tertiaire."],
    ["Le premier nez se fait…",["sans remuer le vin","après avoir fait tourner le vin","le vin en bouche","après avoir avalé"],"Il sert à repérer un défaut (sinon le vin est « net ») et les premières familles d'arômes."],
    ["Des larmes grasses qui coulent lentement indiquent…",["un vin riche en alcool","un vin sans alcool","un vin trouble","un vin oxydé"],"Les larmes traduisent le glycérol et surtout l'alcool."],
    ["Un vin trouble est-il forcément mauvais ?",["Non, il peut être non filtré","Oui, toujours","Oui, s'il est rouge","Seulement s'il est blanc"],"Un trouble peut aussi signaler une dégradation bactérienne ou un élevage médiocre."],
    ["Le goût de bouchon est dû…",["au TCA (trichloroanisole)","au SO₂","au Botrytis","à l'acide malique"],"90 milliardièmes de gramme par litre suffisent à le détecter."]
  ];


/* ===== Outils ===== */
const $=s=>document.querySelector(s);
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const shuf=a=>{for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;};
const pick=a=>a[Math.floor(Math.random()*a.length)];
function makeDeck(arr){let order=[],i=0;return{next(){if(i>=order.length){order=shuf(arr.map((_,k)=>k));i=0;}return arr[order[i++]];},get pos(){return i;},total:arr.length};}
const IMG=window.IMG||{};
const src=id=>IMG[id]||("slides/"+id+".jpg");
const PART={Visuel:"Œil",Olfactif:"Nez",Gustatif:"Bouche","Évaluation":"Évaluation"};
const RUBS=VOCAB.filter(g=>PART[g.step]&&g.name!=="Catégorie aromatique dominante").map(g=>({part:PART[g.step],name:g.name,words:g.items.map(x=>x[0])})).concat(EXTRA_RUBS);
const DEF_DOMS={all:null,vinif:["Vinification"],degust:["Visuel","Olfactif","Gustatif"],eval:["Évaluation"],buts:["Organisation"]};
const catOf=g=>g.step==="Vinification"?"Vinification et soins":g.step==="Organisation"?"Types de dégustation":g.step+" · "+g.name;

/* ===== Parties et navigation ===== */
const PARTS=["cours","degustation","vignobles","exercices"];
const PART_ALIAS={"degustations-part":"degustation","labo":"degustation","etudier":"cours"};
function showPart(id){
  PARTS.forEach(p=>{document.getElementById(p).hidden=p!==id;});
  document.querySelectorAll("[data-part]").forEach(a=>a.setAttribute("aria-current",a.dataset.part===id?"true":"false"));
  document.querySelectorAll(".subnav").forEach(u=>{u.hidden=u.dataset.for!==id;});
  try{localStorage.setItem("oeno-part",id);}catch(e){}
}
function openTo(el){for(let d=el.closest("details");d;d=d.parentElement&&d.parentElement.closest("details"))d.open=true;if(el.tagName==="DETAILS")el.open=true;}
function route(){
  let h=decodeURIComponent(location.hash.slice(1));
  if(PART_ALIAS[h])h=PART_ALIAS[h];
  let el=h?document.getElementById(h):null;
  let part=el?(PARTS.includes(el.id)?el:el.closest(".part")):null;
  if(!part){let s=null;try{s=localStorage.getItem("oeno-part");}catch(e){}part=document.getElementById(PARTS.includes(s)?s:"cours");el=null;}
  showPart(part.id);
  if(el&&el.dataset.ex)openEx(el.dataset.ex);
  if(el&&el!==part){openTo(el);const target=el;requestAnimationFrame(()=>{target.scrollIntoView({block:"start"});target.classList.remove("flash");void target.offsetWidth;if(!/^(annee|synthese|initiation|resume|cours\d|postit|carte|degustations|favoris|fiche-france|cepages|accords|m\d)$/.test(target.id)&&!target.classList.contains("yc"))target.classList.add("flash");});}
  else if(el===part)window.scrollTo(0,0);
}
window.addEventListener("hashchange",route);
document.addEventListener("click",e=>{const a=e.target.closest('a[href^="#"]');if(a&&a.getAttribute("href")===location.hash){e.preventDefault();route();}});

/* ===== Slides post-it expliquées ===== */
(function(){
  const root=$("#pgroups"),filters=$("#pfilters");
  const mk=(label,val)=>{const b=document.createElement("button");b.type="button";b.textContent=label;b.dataset.f=val;b.setAttribute("aria-pressed",val==="all"?"true":"false");filters.appendChild(b);};
  mk("Tous · "+SLIDES.length,"all");
  [1,2,3,4,5].forEach(c=>{
    const list=SLIDES.filter(s=>s[1]===c);mk("Cours "+c+" · "+list.length,String(c));
    const g=document.createElement("div");g.className="pgroup";g.dataset.course=c;
    g.innerHTML='<h3 class="sgroup-title"><span class="kicker">Cours '+c+'</span>'+esc(COURSES[c])+'<span class="count">'+list.length+' slide'+(list.length>1?'s':'')+'</span></h3>';
    list.forEach(s=>{
      const a=document.createElement("article");a.className="pcard";a.id="pi-"+s[0];
      a.innerHTML='<button type="button" class="shot" data-slide="'+s[0]+'" aria-label="Agrandir la slide '+s[2]+' du cours '+c+'"><img src="'+src(s[0])+'" alt="Slide '+s[2]+' du cours '+c+' : '+esc(s[3])+'" loading="lazy" width="1100" height="825"></button>'+
        '<div class="pcard-body"><p class="slide-no">Cours '+c+' · slide '+s[2]+'</p><h4>'+esc(s[3])+'</h4><p class="retenir-line">'+esc(s[4])+'</p><p>'+esc(s[5])+'</p>'+(s[6]?'<p class="piege"><b>Piège :</b> '+esc(s[6])+'</p>':'')+'</div>';
      g.appendChild(a);
    });
    root.appendChild(g);
  });
  filters.addEventListener("click",e=>{const b=e.target.closest("button");if(!b)return;
    filters.querySelectorAll("button").forEach(x=>x.setAttribute("aria-pressed",x===b?"true":"false"));
    root.querySelectorAll(".pgroup").forEach(g=>{g.hidden=!(b.dataset.f==="all"||g.dataset.course===b.dataset.f);});});
})();

/* ===== Visionneuse ===== */
(function(){
  const lb=$("#lb"),img=$("#lbimg"),cap=$("#lbcap"),txt=$("#lbtext");let idx=0,opener=null;
  function show(i){
    idx=(i+SLIDES.length)%SLIDES.length;const s=SLIDES[idx];
    img.src=src(s[0]);img.alt="Slide "+s[2]+" du cours "+s[1]+" : "+s[3];
    cap.innerHTML='<span>Cours '+s[1]+' · slide '+s[2]+' · '+(idx+1)+'/'+SLIDES.length+'</span>'+esc(s[3]);
    txt.innerHTML='<p class="r">'+esc(s[4])+'</p><p>'+esc(s[5])+'</p>'+(s[6]?'<p><b>Piège :</b> '+esc(s[6])+'</p>':'');
    lb.querySelector(".lb-inner").scrollTop=0;
  }
  function open(id,from){opener=from;show(SLIDES.findIndex(s=>s[0]===id));lb.hidden=false;document.body.style.overflow="hidden";$("#lbclose").focus();}
  function close(){lb.hidden=true;document.body.style.overflow="";if(opener&&document.contains(opener))opener.focus();}
  document.addEventListener("click",e=>{const t=e.target.closest("[data-slide]");if(t){e.preventDefault();open(t.dataset.slide,t);}});
  $("#lbprev").onclick=()=>show(idx-1);$("#lbnext").onclick=()=>show(idx+1);$("#lbclose").onclick=close;
  lb.addEventListener("click",e=>{if(e.target===lb)close();});
  document.addEventListener("keydown",e=>{if(lb.hidden)return;if(e.key==="Escape")close();else if(e.key==="ArrowLeft")show(idx-1);else if(e.key==="ArrowRight")show(idx+1);});
})();

/* ===== Échelles de la fiche ===== */
document.querySelectorAll("[data-ladders]").forEach(box=>{
  VOCAB.filter(g=>g.step===box.dataset.ladders).forEach(g=>{
    const isScale=g.scale!==false,n=g.items.length;
    const el=document.createElement("div");el.className="ladder"+(isScale?"":" is-list");
    el.innerHTML='<div class="ladder-head"><h4>'+esc(g.name)+'</h4>'+(g.slide?'<button type="button" class="pi" data-slide="'+g.slide+'">ne pas oublier !</button>':'')+'</div>'+
      (g.note?'<p class="ladder-note">'+esc(g.note)+'</p>':'')+
      '<ol>'+g.items.map((it,i)=>'<li>'+(isScale?'<i class="m" style="--w:'+((i+1)/n).toFixed(3)+'" aria-hidden="true"></i>':'')+'<span><b>'+esc(it[0])+'</b><span class="def">'+esc(it[1])+'</span></span></li>').join("")+'</ol>'+
      (isScale?'<p class="ladder-axis" aria-hidden="true">du moins (−) au plus (+)</p>':'');
    box.appendChild(el);
  });
});

/* ===== Liste de révision ===== */
(function(){
  const KEY="oeno-revision-v1";let saved={};
  try{saved=JSON.parse(localStorage.getItem(KEY)||"{}")||{};}catch(e){saved={};}
  const boxes=[...document.querySelectorAll(".check input")];
  const upd=()=>{$("#progress").textContent=boxes.filter(b=>b.checked).length+" / "+boxes.length+" revus";};
  boxes.forEach(b=>{b.checked=!!saved[b.id];b.addEventListener("change",()=>{saved[b.id]=b.checked;try{localStorage.setItem(KEY,JSON.stringify(saved));}catch(e){}upd();});});
  upd();
})();

/* ===== Générateurs de questions ===== */
function qFromQCM(x){const o=shuf(x[1].map((t,i)=>({t,ok:i===0})));return{cat:"Théorie",q:x[0],opts:o.map(y=>y.t),a:o.findIndex(y=>y.ok),ex:x[2]};}
function qFromVF(x){return{cat:"Vrai ou faux",q:x[0],opts:["Vrai","Faux"],a:x[1]?0:1,ex:x[2],two:true};}
function qFromChiffre(x){const o=shuf([x[1]].concat(x[2]));return{cat:"Chiffres clés",q:x[0]+" ?",opts:o,a:o.indexOf(x[1]),ex:x[3]};}
let lastDef="";
function genDef(dom,dir){
  const d=DEF_DOMS[dom];const pool=[];
  VOCAB.forEach(g=>{if(!d||d.includes(g.step))g.items.forEach(it=>pool.push({t:it[0],d:it[1],g}));});
  let item;do{item=pick(pool);}while(pool.length>1&&item.t+item.g.name===lastDef);lastDef=item.t+item.g.name;
  let others=shuf(item.g.items.filter(x=>x[0]!==item.t)).slice(0,3);
  if(others.length<3){const extra=shuf(VOCAB.filter(g=>g!==item.g&&g.step===item.g.step).flatMap(g=>g.items).filter(x=>x[0]!==item.t&&!others.some(o=>o[0]===x[0])));others=others.concat(extra.slice(0,3-others.length));}
  if(dir==="td"){const opts=shuf([item.d].concat(others.map(o=>o[1])));return{cat:catOf(item.g),q:"Que veut dire « "+item.t+" » ?",opts,a:opts.indexOf(item.d),slide:item.g.slide};}
  const opts=shuf([item.t].concat(others.map(o=>o[0])));
  return{cat:catOf(item.g),q:item.d,opts,a:opts.indexOf(item.t),ex:"« "+item.t+" » : "+item.d,slide:item.g.slide};
}
const INTRUS_PARTS={tout:["Œil","Nez","Bouche","Évaluation"],bouche:["Bouche"],oeilnez:["Œil","Nez"],eval:["Évaluation"]};
function genIntrus(part){
  const groups=(part==="aromes"?AROMES:RUBS.filter(r=>INTRUS_PARTS[part].includes(r.part))).filter(r=>r.words.length>=3);
  const g=pick(groups);const three=shuf(g.words.slice()).slice(0,3);
  let others=groups.filter(o=>o!==g&&o.words.some(w=>!g.words.includes(w)));
  const og=pick(others);const intr=pick(og.words.filter(w=>!g.words.includes(w)));
  const opts=shuf(three.concat(intr));
  return{cat:"L'intrus · "+g.part,q:"Quel mot n'appartient pas à la même rubrique que les trois autres ?",opts,a:opts.indexOf(intr),ex:"« "+intr+" » appartient à « "+og.name+" ». Les trois autres appartiennent à « "+g.name+" »."};
}
CLASSER.forEach(s=>{if(!s.items)s.items=AROMES.flatMap((r,i)=>r.words.map(w=>[w,i,w+" : arôme "+["primaire","secondaire","tertiaire"][i]+"."]));s.deck=makeDeck(s.items);});

/* ===== Panneau à choix multiples ===== */
function mcPanel(key,cfg){
  const panel=document.getElementById("x-"+key);
  const box=document.createElement("div");box.className="mc";
  box.innerHTML='<div class="ex-bar">'+(cfg.controls||"")+'<span class="score">0 / 0</span></div><div class="progress-bar" hidden><i></i></div><p class="kicker q-cat"></p><p class="q-def q-text"></p><div class="q-opts"></div><div class="explain" hidden></div><div class="ex-foot"><p class="q-fb" aria-live="polite"></p><button type="button" class="btn q-next">Question suivante</button></div><div class="summary" hidden></div>';
  panel.appendChild(box);
  const f=s=>box.querySelector(s);let good=0,asked=0,cur=null;
  const api={f,box,show,reset(){good=0;asked=0;f(".score").textContent="0 / 0";show();},get good(){return good;},get asked(){return asked;}};
  function show(){
    const q=cfg.next();
    if(!q){if(cfg.done)cfg.done(api);return;}
    cur=q;f(".summary").hidden=true;[".q-cat",".q-text",".q-opts",".ex-foot"].forEach(s=>{f(s).hidden=false;});
    f(".q-cat").textContent=q.cat||"";f(".q-text").textContent=q.q;
    f(".explain").hidden=true;f(".q-fb").textContent="";
    const o=f(".q-opts");o.innerHTML="";o.classList.toggle("two",!!q.two);
    q.opts.forEach((t,i)=>{const b=document.createElement("button");b.type="button";b.textContent=t;b.onclick=()=>answer(i,b);o.appendChild(b);});
  }
  function answer(i,b){
    const q=cur,ok=i===q.a;asked++;if(ok)good++;
    f(".q-opts").querySelectorAll("button").forEach((x,k)=>{x.disabled=true;if(k===q.a)x.classList.add("is-right");});
    if(!ok)b.classList.add("is-wrong");
    f(".q-fb").innerHTML=ok?'<span class="ok">Juste.</span>':'<span class="ko">Non.</span> Bonne réponse : « '+esc(q.opts[q.a])+' ».';
    if(q.ex||q.slide){const e=f(".explain");e.innerHTML=(q.ex?esc(q.ex):"")+(q.slide?' <button type="button" class="pi" data-slide="'+q.slide+'">voir la slide</button>':'');e.hidden=false;}
    f(".score").textContent=good+" / "+asked;
    if(cfg.onAnswer)cfg.onAnswer(q,ok,i);
    f(".q-next").focus({preventScroll:true});
  }
  f(".q-next").onclick=show;
  return api;
}

/* ===== Exercices ===== */
const EX={};const EX_DONE={};
function openEx(key){
  document.querySelectorAll("#exercices .ex[data-ex]").forEach(p=>{p.hidden=p.dataset.ex!==key;});
  document.querySelectorAll('.exmenu a, .subnav[data-for="exercices"] a').forEach(a=>a.setAttribute("aria-current",a.getAttribute("href")==="#x-"+key?"true":"false"));
  if(!EX_DONE[key]&&EX[key]){EX_DONE[key]=true;EX[key]();}
}

EX.qcm=()=>{const d=makeDeck(QCM);const m=mcPanel("qcm",{controls:'<span class="kicker cnt"></span>',next:()=>{const q=qFromQCM(d.next());m.f(".cnt").textContent="Question "+d.pos+" / "+d.total;return q;}});m.show();};
EX.vf=()=>{const d=makeDeck(VF);const m=mcPanel("vf",{controls:'<span class="kicker cnt"></span>',next:()=>{const q=qFromVF(d.next());m.f(".cnt").textContent="Affirmation "+d.pos+" / "+d.total;return q;}});m.show();};
EX.chiffres=()=>{const d=makeDeck(CHIFFRES);const m=mcPanel("chiffres",{controls:'<span class="kicker cnt"></span>',next:()=>{const q=qFromChiffre(d.next());m.f(".cnt").textContent="Question "+d.pos+" / "+d.total;return q;}});m.show();};
EX.classer=()=>{
  const opts='<label for="clSet">Série</label><select id="clSet"><option value="rand">Toutes les séries</option>'+CLASSER.map((s,i)=>'<option value="'+i+'">'+esc(s.name)+'</option>').join("")+'</select>';
  const m=mcPanel("classer",{controls:opts,next:()=>{const v=$("#clSet").value;const s=v==="rand"?pick(CLASSER):CLASSER[+v];const it=s.deck.next();return{cat:s.name,q:it[0],opts:s.buckets.slice(),a:it[1],ex:it[2]||"",two:s.buckets.length===2};}});
  $("#clSet").onchange=()=>m.reset();m.show();
};
EX.intrus=()=>{
  const opts='<label for="inPart">Partie</label><select id="inPart"><option value="tout">Toute la fiche</option><option value="bouche">Bouche</option><option value="oeilnez">Œil et nez</option><option value="eval">Évaluation</option><option value="aromes">Arômes</option></select>';
  const m=mcPanel("intrus",{controls:opts,next:()=>genIntrus($("#inPart").value)});
  $("#inPart").onchange=()=>m.reset();m.show();
};
EX.def=()=>{
  const opts='<label for="dfDom">Thème</label><select id="dfDom"><option value="all">Tout le vocabulaire</option><option value="degust">Œil, nez, bouche</option><option value="eval">Évaluation du vin</option><option value="vinif">Vinification et soins</option><option value="buts">Types de dégustation</option></select><label for="dfDir">Sens</label><select id="dfDir"><option value="dt">Définition → terme</option><option value="td">Terme → définition</option></select>';
  const m=mcPanel("def",{controls:opts,next:()=>genDef($("#dfDom").value,$("#dfDir").value)});
  $("#dfDom").onchange=()=>m.reset();$("#dfDir").onchange=()=>m.reset();m.show();
};
EX.examen=()=>{
  const qd=makeDeck(QCM),vd=makeDeck(VF),cd=makeDeck(CHIFFRES);let list=[],idx=0,wrong=[];
  function build(){
    list=[];for(let i=0;i<6;i++)list.push(qFromQCM(qd.next()));for(let i=0;i<4;i++)list.push(qFromVF(vd.next()));
    for(let i=0;i<3;i++)list.push(qFromChiffre(cd.next()));for(let i=0;i<4;i++)list.push(genDef("all","dt"));for(let i=0;i<3;i++)list.push(genIntrus("tout"));
    list=shuf(list);idx=0;wrong=[];
  }
  const m=mcPanel("examen",{controls:'<span class="kicker cnt"></span>',
    next:()=>{if(idx>=list.length)return null;const q=list[idx++];m.f(".cnt").textContent="Question "+idx+" / "+list.length;const pb=m.f(".progress-bar");pb.hidden=false;pb.firstElementChild.style.setProperty("--p",(idx-1)/list.length);m.f(".q-next").textContent=idx===list.length?"Voir ma note":"Question suivante";return q;},
    onAnswer:(q,ok,i)=>{if(!ok)wrong.push({q,i});m.f(".progress-bar i").style.setProperty("--p",idx/list.length);},
    done:(api)=>{
      [".q-cat",".q-text",".q-opts",".explain",".ex-foot"].forEach(s=>{api.f(s).hidden=true;});
      const s=api.f(".summary"),g=api.good,n=list.length;
      const msg=g>=18?"Excellent, tu es prêt.":g>=14?"Bien. Revois les questions ratées.":g>=10?"Seuil atteint de justesse : il faut encore réviser.":"Sous le seuil de 50 % : reprends la fiche résumé.";
      s.innerHTML='<p class="big">'+g+' / '+n+'</p><p>'+msg+'</p>'+(wrong.length?'<p class="mini">À revoir</p><ol>'+wrong.map(w=>'<li>'+esc(w.q.q)+'<span>Ta réponse : '+esc(w.q.opts[w.i])+' · Bonne réponse : '+esc(w.q.opts[w.q.a])+'</span></li>').join("")+'</ol>':'')+'<div class="ex-actions"><button type="button" class="btn" id="exRestart">Nouveau test</button></div>';
      s.hidden=false;
      $("#exRestart").onclick=()=>{build();api.f(".progress-bar i").style.setProperty("--p",0);api.reset();};
    }});
  build();m.show();
};

/* --- Nuage de mots --- */
EX.nuage=()=>{
  const THEMES={bouche:["Bouche"],oeilnez:["Œil","Nez"],eval:["Évaluation"],tout:["Œil","Nez","Bouche","Évaluation"]};
  const KC=["var(--k1)","var(--k2)","var(--k3)"];
  /* Rubriques qui sont une échelle : l'ordre des mots dans la ligne est vérifié */
  const ORD=new Set(["Intensité de la robe","Intensité aromatique","Sucrosité","Acidité","Alcool","Tanins","Corps","Persistance en bouche","Stade d'évolution","Potentiel de garde","Typicité"]);
  const isOrd=r=>ORD.has(r.name)&&r.part!=="Arômes";
  /* Pour chaque ligne ordonnée : les mots bien rangés doivent suivre l'ordre de la fiche */
  function grade(){R.words.forEach(o=>{o.ordPos=0;});
    R.rubs.forEach((r,i)=>{if(!isOrd(r))return;const inRow=R.order[i].filter(wi=>R.words[wi].ans===i);
      const exp=r.words.filter(w=>inRow.some(wi=>R.words[wi].w===w));
      inRow.forEach((wi,p)=>{const o=R.words[wi];if(exp[p]!==o.w)o.ordPos=exp.indexOf(o.w)+1;});});}
  const ok=o=>o.got===o.ans&&!o.ordPos;
  let R=null,active=0,checked=false,totG=0,totN=0,lastKey="";
  const size=()=>{const r=Math.random();return r<.5?"s1":r<.82?"s2":"s3";};
  const extra=(others,seen,n)=>shuf(others.flatMap(r=>r.words.map(w=>({w,ans:-1,from:r.name})))).filter(o=>!seen.has(o.w)&&(seen.add(o.w),true)).slice(0,n);
  function build(){
    const theme=$("#nTheme").value,k=+$("#nMode").value;let rubs,words=[];
    if(theme==="aromes"){
      if(k===1){let t;do{t=pick(AROMES);}while(t.name===lastKey);lastKey=t.name;rubs=[t];
        shuf(t.words.slice()).slice(0,5).forEach(w=>words.push({w,ans:0}));
        words=words.concat(extra(AROMES.filter(r=>r!==t),new Set(t.words),7));
      }else{rubs=AROMES.slice();rubs.forEach((r,i)=>shuf(r.words.slice()).slice(0,5).forEach(w=>words.push({w,ans:i})));}
    }else{
      const pool=RUBS.filter(r=>THEMES[theme].includes(r.part));
      if(k===1){let t;do{t=pick(pool);}while(pool.length>1&&t.name===lastKey);lastKey=t.name;rubs=[t];
        t.words.forEach(w=>words.push({w,ans:0}));
        let others=pool.filter(r=>r!==t);if(others.length<3)others=RUBS.filter(r=>r!==t);
        words=words.concat(extra(others,new Set(t.words),Math.max(5,13-t.words.length)));
      }else{rubs=[];const seen=new Set();
        for(const r of shuf(pool.slice())){if(rubs.length===3)break;if(r.words.some(w=>seen.has(w)))continue;rubs.push(r);r.words.forEach(w=>seen.add(w));}
        rubs.forEach((r,i)=>r.words.forEach(w=>words.push({w,ans:i})));
        let others=pool.filter(r=>!rubs.includes(r));if(others.length<2)others=RUBS.filter(r=>!rubs.includes(r));
        words=words.concat(extra(others,seen,3));
      }
    }
    words.forEach(o=>{o.got=-1;o.s=size();});
    R={rubs,words:shuf(words),k:rubs.length,order:rubs.map(()=>[])};active=0;checked=false;$("#nFeedback").textContent="";render();
  }
  let dragJustEnded=false;
  const focusW=wi=>{const el=document.querySelector('#x-nuage .w[data-i="'+wi+'"]');if(el)el.focus();};
  /* Glisser-déposer (souris et tactile) : déplace le mot en direct, le modèle est relu au lâcher */
  function startDrag(e,b,wi){
    if(e.button>0)return;const sx=e.clientX,sy=e.clientY;let ghost=null,dx=0,dy=0,over=null;
    const box=$("#x-nuage");
    const target=(x,y)=>{const el=document.elementFromPoint(x,y);if(!el)return null;
      const row=el.closest("#x-nuage .wrow");if(row)return row.querySelector(".wdrop");return el.closest("#nCloud");};
    const move=ev=>{
      if(!ghost){if(Math.hypot(ev.clientX-sx,ev.clientY-sy)<6)return;
        const rc=b.getBoundingClientRect();dx=sx-rc.left;dy=sy-rc.top;
        ghost=b.cloneNode(true);ghost.classList.add("drag-ghost");ghost.style.width=rc.width+"px";document.body.appendChild(ghost);b.classList.add("drag-src");}
      ev.preventDefault();ghost.style.left=(ev.clientX-dx)+"px";ghost.style.top=(ev.clientY-dy)+"px";
      const t=target(ev.clientX,ev.clientY);
      box.querySelectorAll(".wrow.over").forEach(r=>r.classList.remove("over"));
      if(t&&t.classList.contains("wdrop"))t.parentNode.classList.add("over");
      if(!t)return;over=t;
      const sib=[...t.children].filter(c=>c!==b&&c.classList.contains("w"));
      let before=null;for(const c of sib){const r=c.getBoundingClientRect();
        if(ev.clientY<r.top||(ev.clientY<=r.bottom&&ev.clientX<r.left+r.width/2)){before=c;break;}}
      if(b.parentNode!==t||b.nextSibling!==before)t.insertBefore(b,before);};
    const up=()=>{document.removeEventListener("pointermove",move);document.removeEventListener("pointerup",up);document.removeEventListener("pointercancel",up);
      if(!ghost)return;ghost.remove();b.classList.remove("drag-src");
      dragJustEnded=true;setTimeout(()=>{dragJustEnded=false;},0);
      const o=R.words[wi];
      /* relire l'ordre des lignes depuis le DOM */
      box.querySelectorAll(".wrow").forEach(row=>{const i=+row.dataset.r;R.order[i]=[...row.querySelectorAll(".wdrop .w")].map(x=>+x.dataset.i);R.order[i].forEach(j=>{R.words[j].got=i;});});
      if(b.closest("#nCloud"))o.got=-1;
      render();focusW(wi);};
    document.addEventListener("pointermove",move,{passive:false});document.addEventListener("pointerup",up);document.addEventListener("pointercancel",up);
  }
  function render(){
    const k=R.k,r0=R.rubs[0];
    $("#nPrompt").innerHTML=k===1
      ?(r0.part==="Arômes"?"Lesquels sont des <b>"+esc(r0.name.toLowerCase())+"</b> ? Glissez-les dans la ligne, puis vérifiez.":"Quels mots appartiennent à la rubrique <b>"+esc(r0.name)+"</b> ("+esc(r0.part.toLowerCase())+") ? Glissez-les dans la ligne"+(isOrd(r0)?", rangés de gauche à droite dans l'ordre de l'échelle":"")+", puis vérifiez.")
      :"Glissez chaque mot dans la ligne de sa rubrique. Quand la ligne indique « ordre vérifié », rangez les mots de gauche à droite dans l'ordre de l'échelle (ex. extra sec → liquoreux)."+(R.words.some(o=>o.ans<0)?" Trois mots n'appartiennent à aucune des trois rubriques : laissez-les de côté.":" Chaque mot va dans une seule rubrique.");
    const cl=$("#nCloud"),rb=$("#nRubs");cl.innerHTML="";rb.innerHTML="";
    const mkW=(wi,inRow)=>{const o=R.words[wi],b=document.createElement("button");b.type="button";b.className="w "+(inRow?"":o.s);b.dataset.i=wi;
      if(o.got>=0){b.style.setProperty("--kc",KC[o.got]);b.setAttribute("aria-label",o.w+" : "+R.rubs[o.got].name);}
      b.textContent=o.w;
      if(checked){b.disabled=true;const good=ok(o);b.classList.add(good?"good":"bad");
        if(!good){const fx=document.createElement("span");fx.className="fix";fx.textContent=o.got===o.ans?"ordre : "+o.ordPos+"ᵉ place":o.ans>=0?(k===1?"oublié":"→ "+(o.ans+1)+" · "+R.rubs[o.ans].name):"intrus : "+o.from;b.appendChild(fx);}}
      else{b.onkeydown=e=>{if(o.got<0||!e.key.startsWith("Arrow")||e.key==="ArrowUp"||e.key==="ArrowDown")return;const row=R.order[o.got],p=row.indexOf(wi),q=p+(e.key==="ArrowLeft"?-1:1);
          if(q<0||q>=row.length)return;e.preventDefault();row.splice(p,1);row.splice(q,0,wi);render();focusW(wi);};
        b.addEventListener("pointerdown",e=>startDrag(e,b,wi));}
      return b;};
    R.words.forEach((o,wi)=>{if(o.got<0)cl.appendChild(mkW(wi,false));});
    R.rubs.forEach((r,i)=>{const row=document.createElement("div");row.className="wrow";row.style.setProperty("--kc",KC[i]);row.dataset.r=i;
      const b=document.createElement("span");b.className="rub solo";
      b.innerHTML='<span class="n">'+(i+1)+'</span>'+esc(r.name)+(k>1&&r.part!=="Arômes"?' <span class="c">'+esc(r.part)+'</span>':'')+' <span class="c">· '+R.order[i].length+'</span>';
      const d=document.createElement("div");d.className="wdrop";R.order[i].forEach(wi=>d.appendChild(mkW(wi,true)));
      const hd=document.createElement("div");hd.className="hd";hd.appendChild(b);
      if(isOrd(r)){const t=document.createElement("span");t.className="ord";t.textContent="ordre vérifié →";t.title="Rangez du premier au dernier terme de l'échelle";hd.appendChild(t);}
      row.append(hd,d);
      if(checked&&isOrd(r)){const ref=document.createElement("p");ref.className="ref";ref.textContent="Ordre de la fiche : "+r.words.join(" · ");row.appendChild(ref);}
      rb.appendChild(row);});
    $("#nCheck").disabled=checked;
  }
  $("#nCheck").onclick=()=>{if(checked)return;checked=true;grade();
    const g=R.words.filter(ok).length,n=R.words.length;totG+=g;totN+=n;
    $("#nScore").textContent="Total : "+totG+" / "+totN;render();
    $("#nFeedback").innerHTML=g===n?'<span class="ok">Parfait.</span> Tous les mots sont à la bonne place.':'<span class="ko">'+g+' / '+n+' mots corrects.</span> Les erreurs sont marquées ✗ (contour pointillé), avec la bonne rubrique ou la bonne place dans l’échelle ; les mots justes sont marqués ✓.';};
  $("#nNext").onclick=build;$("#nTheme").onchange=build;$("#nMode").onchange=build;
  build();
};

/* --- Relier --- */
EX.relier=()=>{
  const sel=$("#rDom");let items=[],order=[],links=[],active=0,checked=false,tg=0,tn=0;
  function build(){
    const d=DEF_DOMS[sel.value];const pool=[],seen=new Set();
    shuf(VOCAB.filter(g=>!d||d.includes(g.step)).flatMap(g=>g.items.map(it=>({t:it[0],d:it[1],g})))).forEach(o=>{if(!seen.has(o.t)){seen.add(o.t);pool.push(o);}});
    items=pool.slice(0,5);order=shuf(items.map((_,i)=>i));links=items.map(()=>-1);active=0;checked=false;$("#rFb").textContent="";render();
  }
  function render(){
    const T=$("#rTerms"),D=$("#rDefs");T.innerHTML="";D.innerHTML="";
    items.forEach((it,i)=>{const b=document.createElement("button");b.type="button";b.className="mt"+(links[i]>=0?" linked":"");
      b.setAttribute("aria-pressed",i===active&&!checked?"true":"false");
      b.innerHTML='<span class="b">'+(i+1)+'</span><span><b>'+esc(it.t)+'</b><span class="sub">'+esc(it.g.step==="Vinification"?"Vinification":it.g.step==="Organisation"?"Dégustation":it.g.name)+'</span></span>';
      if(checked){b.disabled=true;b.classList.add(links[i]===i?"good":"bad");}else b.onclick=()=>{active=i;render();T.children[i].focus();};
      T.appendChild(b);});
    order.forEach((j,pos)=>{const it=items[j],who=links.indexOf(j);const b=document.createElement("button");b.type="button";b.className="md"+(who>=0?" linked":"");
      b.innerHTML='<span class="b">'+(who>=0?who+1:"")+'</span><span>'+esc(it.d)+(checked&&who!==j?'<span class="fix">Bonne réponse : '+(j+1)+' · '+esc(it.t)+'</span>':'')+'</span>';
      if(checked){b.disabled=true;b.classList.add(who===j?"good":"bad");}
      else b.onclick=()=>{const prev=links.indexOf(j);if(prev>=0)links[prev]=-1;links[active]=j;const nx=links.findIndex(v=>v<0);if(nx>=0)active=nx;render();D.children[pos].focus();};
      D.appendChild(b);});
    $("#rCheck").disabled=checked||links.some(v=>v<0);
  }
  $("#rCheck").onclick=()=>{checked=true;const g=links.filter((v,i)=>v===i).length;tg+=g;tn+=items.length;$("#rScore").textContent="Total : "+tg+" / "+tn;render();
    $("#rFb").innerHTML=g===items.length?'<span class="ok">Parfait.</span> Les 5 liaisons sont justes.':'<span class="ko">'+g+' / '+items.length+' justes.</span> La bonne réponse est indiquée sous chaque erreur.';};
  $("#rNext").onclick=build;sel.onchange=build;build();
};

/* --- Analyser deux vins --- */
EX.fiche=()=>{
  const W=[
    {name:"Vin A · blanc",c:"#EDD67E",rubs:["Viscosité (les larmes)","Intensité aromatique","Bouquet","Sucrosité","Acidité","Alcool","Corps","Persistance en bouche","Prédominance de l'équilibre"],excl:["Tanins","Teintée"]},
    {name:"Vin B · rouge",c:"#8E1B30",rubs:["Viscosité (les larmes)","Intensité aromatique","Bouquet","Acidité","Alcool","Tanins","Corps","Persistance en bouche","Prédominance de l'équilibre"],excl:["Sucrosité"]}
  ];
  let rows=[],checked=false,tg=0,tn=0;
  /* Profils cohérents : mêmes règles que la carte « Rester cohérent » (#f-coherence) */
  function coherent(w,r){
    const v={};r.forEach(x=>{v[x.g.name]=x.it[0];});
    const ia=v["Intensité aromatique"],bq=v["Bouquet"],al=v["Alcool"],co=v["Corps"],ta=v["Tanins"],vi=v["Viscosité (les larmes)"],eq=v["Prédominance de l'équilibre"];
    const blanc=!("Tanins" in v),tanique=ta==="Présent"||ta==="Astringent";
    if(ia!=="Faiblement aromatique"&&!["Ouvert","Marqué par l'élevage"].includes(bq))return false;
    if(ia==="Faiblement aromatique"&&bq==="Marqué par l'élevage")return false;
    const corps={"Léger":["Décharné","Mince"],"Modéré":["Rond","Ferme"],"Généreux":["Rond","Ferme"],"Corsé":["Volumineux"],"Capiteux":["Volumineux","Musclé"]};
    if(!corps[al].includes(co))return false;
    if(co==="Ferme"&&!tanique)return false;
    if(tanique&&["Rond","Mince","Décharné"].includes(co))return false;
    if(blanc&&!["Décharné","Mince","Rond"].includes(co))return false;
    if(vi==="Grasse"&&!["Généreux","Corsé","Capiteux"].includes(al))return false;
    if(vi==="Faible"&&!["Léger","Modéré"].includes(al))return false;
    if(vi==="Fluide"&&!["Léger","Modéré","Généreux"].includes(al))return false;
    if(eq==="Alcool"&&!["Généreux","Corsé","Capiteux"].includes(al))return false;
    if(eq==="Tanins"&&!tanique)return false;
    if(eq==="Sucrosité"&&!["Demi-sec","Moelleux","Liquoreux"].includes(v["Sucrosité"]))return false;
    if(eq==="Acidité"&&!["Nerveux","Vert"].includes(v["Acidité"]))return false;
    return true;
  }
  function build(){
    rows=W.map((w,wi)=>{let r,n=0;
      do{r=w.rubs.map((rn,ri)=>{const g=VOCAB.find(x=>x.name===rn);const it=pick(g.items.filter(x=>!w.excl.includes(x[0])));return{g,it,val:"",id:"f"+wi+"-"+ri};});}
      while(!coherent(w,r)&&++n<2000);
      return r;});
    checked=false;$("#fFb").textContent="";render();
  }
  function render(){
    const box=$("#fWines");box.innerHTML="";
    W.forEach((w,wi)=>{const card=document.createElement("div");card.className="wine";
      card.innerHTML='<h4><i style="--c:'+w.c+'" aria-hidden="true"></i>'+esc(w.name)+'</h4>';
      rows[wi].forEach(r=>{const d=document.createElement("div");d.className="frow"+(checked?(r.val===r.it[0]?" good":" bad"):"");
        d.innerHTML='<label class="lab" for="'+r.id+'">'+esc(PART[r.g.step])+' · '+esc(r.g.name)+'</label><p class="obs">'+esc(r.it[1])+'</p><select id="'+r.id+'"'+(checked?" disabled":"")+'><option value="">— choisir un terme —</option>'+r.g.items.map(x=>'<option'+(x[0]===r.val?" selected":"")+'>'+esc(x[0])+'</option>').join("")+'</select>'+(checked&&r.val!==r.it[0]?'<p class="fix">Réponse : '+esc(r.it[0])+'</p>':'');
        d.querySelector("select").onchange=e=>{r.val=e.target.value;};
        card.appendChild(d);});
      box.appendChild(card);});
    $("#fCheck").disabled=checked;
  }
  $("#fCheck").onclick=()=>{checked=true;const all=rows.flat();const g=all.filter(r=>r.val===r.it[0]).length;tg+=g;tn+=all.length;
    $("#fScore").textContent="Total : "+tg+" / "+tn;render();
    $("#fFb").innerHTML=g===all.length?'<span class="ok">Parfait.</span> Les deux fiches sont justes.':'<span class="ko">'+g+' / '+all.length+' termes justes.</span> La réponse est indiquée sous chaque erreur.';};
  $("#fNext").onclick=build;build();
};

/* --- Remettre dans l'ordre --- */
EX.ordre=()=>{
  const sel=$("#oSet");
  SEQS.forEach((q,i)=>{const o=document.createElement("option");o.value=i;o.textContent=q.name+(q.scale?" (− → +)":"");sel.appendChild(o);});
  let S=null,placed=[],pool=[],checked=false,good=0,tried=0,last=-1;
  function start(){
    let i;if(sel.value==="rand"){do{i=Math.floor(Math.random()*SEQS.length);}while(i===last);}else i=+sel.value;
    last=i;S=SEQS[i];placed=[];checked=false;
    do{pool=shuf(S.items.map((_,k)=>k));}while(pool.every((v,k)=>v===k));
    $("#oPrompt").innerHTML=S.scale?"Rangez les termes de la rubrique <b>"+esc(S.name)+"</b> du moins (−) au plus (+).":"Remettez <b>"+esc(S.name)+"</b> dans l'ordre.";
    $("#oFeedback").textContent="";render();
  }
  function render(){
    const sl=$("#oSlots");sl.innerHTML="";
    S.items.forEach((_,p)=>{const li=document.createElement("li");li.dataset.n=p+1;const v=placed[p];
      if(v!==undefined){li.classList.add("filled");const b=document.createElement("button");b.type="button";b.className="chip";b.textContent=S.items[v][0];
        if(checked){b.disabled=true;if(S.items[v][1]){const d=document.createElement("span");d.className="detail";d.textContent=S.items[v][1];b.appendChild(d);}}
        else b.onclick=()=>{placed.splice(p,1);pool.push(v);render();};
        li.appendChild(b);}
      if(checked){const ok=v===p;li.classList.add(ok?"good":"bad");
        if(!ok){const fx=document.createElement("span");fx.className="fix";fx.textContent="À cette place : "+S.items[p][0]+(S.items[p][1]?" ("+S.items[p][1]+")":"");li.appendChild(fx);}}
      sl.appendChild(li);});
    const pl=$("#oPool");pl.innerHTML="";pl.hidden=checked;
    pool.forEach(v=>{const b=document.createElement("button");b.type="button";b.className="chip";b.textContent=S.items[v][0];
      b.onclick=()=>{pool.splice(pool.indexOf(v),1);placed.push(v);render();const f=$("#oPool").firstElementChild;if(f)f.focus();};pl.appendChild(b);});
    $("#oCheck").disabled=checked||placed.length<S.items.length;
  }
  $("#oCheck").onclick=()=>{checked=true;tried++;const n=placed.filter((v,p)=>v===p).length,all=n===S.items.length;if(all)good++;
    $("#oScore").textContent=good+" / "+tried+" séries justes";render();
    $("#oFeedback").innerHTML=all?'<span class="ok">Parfait.</span> Tout est dans le bon ordre.':'<span class="ko">'+n+' / '+S.items.length+' à la bonne place.</span> La correction est sous chaque ligne rouge.';};
  $("#oNext").onclick=start;sel.onchange=start;start();
};


/* ===== Refonte 2026-10 : l'essentiel des cours d'initiation ===== */
document.querySelectorAll(".essentiel[data-course]").forEach(box=>{
  const c=+box.dataset.course,list=SLIDES.filter(s=>s[1]===c);
  box.innerHTML='<p class="mini">L\'essentiel du cours '+c+' · les '+list.length+' point'+(list.length>1?'s':'')+' signalé'+(list.length>1?'s':'')+' par le prof</p><ul>'+
    list.map(s=>'<li><button type="button" class="pi" data-slide="'+s[0]+'" aria-label="Voir la slide '+s[2]+'">post-it</button><span class="ess-t">'+esc(s[3])+'</span><span class="ess-d">'+esc(s[4])+'</span></li>').join("")+'</ul>';
});

/* ===== L'année : programme, synthèse, fiches de cours ===== */
(function(){
  const Y=window.YEAR;if(!Y)return;
  const byId={};Y.courses.forEach(c=>byId[c.id]=c);
  const ready=c=>!!(c&&c.ess);
  const mod=id=>Y.modules.find(m=>m.id===id);
  /* programme */
  let h='<div class="yr-mod"><div class="yr-mod-head"><h3>Les références de l\'année</h3><span class="yr-exam">à garder sous la main</span></div><div class="yr-grid">'+
    Y.refs.map(r=>'<a class="yr-card is-ready" href="'+r.h+'"><span class="yr-n">Dégustation</span><span class="yr-t">'+esc(r.n)+'</span></a>').join("")+
    '<a class="yr-card is-ready" href="#synthese"><span class="yr-n">Cours</span><span class="yr-t">Toute l\'année en une page</span></a></div></div>';
  Y.modules.forEach((m,mi)=>{
    const list=Y.courses.filter(c=>c.m===mi+1);
    h+='<div class="yr-mod" id="'+m.id+'"><div class="yr-mod-head"><h3>'+esc(m.t)+' · '+esc(m.st)+'</h3><span class="yr-exam">'+esc(m.exam)+'</span></div><div class="yr-grid">'+
      list.map((c,i)=>ready(c)
        ?'<a class="yr-card is-ready" href="#f-'+c.id+'"><span class="yr-n">'+esc(c.n)+'</span><span class="yr-t">'+esc(c.t)+'</span></a>'
        :'<div class="yr-card is-soon" title="Support pas encore dans le projet"><span class="yr-n">'+esc(c.n)+'</span><span class="yr-t">À venir · support à ajouter</span></div>').join("")+
      '</div><details class="more"><summary>Préparer l\'examen du '+esc(m.t)+'</summary><div class="yr-exam-box">'+
      '<div class="cols two"><div class="panel"><h4>Pour réussir (50 %)</h4><ul class="plain"><li>'+esc(m.fiches)+', remplies, au format original, sur papier, avec ton nom et agrafées.</li><li>Réussir tous les QCM sur les régions vues.</li></ul></div>'+
      '<div class="panel"><h4>Le degré de maîtrise</h4><ul class="plain"><li>Étiquettes /100, dégustation /100, accords mets-vins /100, ramenés sur 100.</li><li>Une partie sous 50 compte pour 50 si les acquis sont atteints.</li><li>3 h en tout (1 h 30 pour le théorique seul).</li></ul></div></div>'+
      '<div class="cols"><div class="panel"><h4>Les étiquettes</h4><ul class="plain"><li>Région /3, sous-région (ou département), appellation.</li><li>Niveau hiérarchique /4 : AOP régionale, sous-régionale, communale, 1er cru, grand cru, IGP, Vin de France.</li><li>Vinification(s) /4 : pressurage direct, rouge classique, saignée, méthode traditionnelle, ancestrale, VDN, vin naturellement doux, macération carbonique.</li><li>4 cépages autorisés /4.</li><li>Une question /5 : '+esc(m.q5)+'.</li><li>Attention : certaines infos de l\'étiquette peuvent être cachées. Les étiquettes sont dans les PowerPoint.</li></ul></div>'+
      '<div class="panel"><h4>La dégustation à l\'aveugle</h4><ul class="plain"><li>5 vins de 5 régions, déjà goûtés en classe.</li><li>Région /5 et cépage prédominant /5.</li><li>/2 chacun : intensité de la robe (pâle, moyenne, profonde), intensité du nez (faible, moyen, très aromatique), douceur (blanc) ou tanin (rouge), acidité, corps.</li><li>Tes fiches et notes servent ici : voir les <a href="#cepages">cépages</a>.</li></ul></div>'+
      '<div class="panel"><h4>Les accords mets-vins</h4><p>Un plat pertinent par vin, choisi dans une liste donnée à l\'examen.</p><p><a href="#accords">Voir la liste et chercher un accord</a></p></div></div></div></details></div>';
  });
  h+='<p class="yr-legend">Il manque encore les supports <b>Loire 1</b> et <b>Jura</b> dans le projet : leurs fiches se rempliront dès qu\'ils seront ajoutés.</p>';
  document.getElementById("year").innerHTML=h;

  /* synthèse */
  const syn='<section id="synthese"><header class="sec-head"><p class="kicker">Tout revoir</p><h2>Toute l\'année en une page</h2><p class="sub">Région par région, ce qu\'il faut avoir en tête. Chaque carte mène à la fiche du cours.</p></header><div class="sheet">'+
    Y.syn.map(s=>'<div class="scard"><h4>'+esc(s[0])+'</h4><p>'+esc(s[2])+'</p>'+(ready(byId[s[1]])?'<a href="#f-'+s[1]+'">Le cours →</a>':'')+'</div>').join("")+'</div></section>';
  document.getElementById("annee").insertAdjacentHTML("afterend",syn);

  /* fiches de cours */
  const ready_list=Y.courses.filter(ready);
  document.getElementById("year-courses").innerHTML=ready_list.map((c,i)=>{
    const m=mod("m"+c.m),prev=ready_list[i-1],next=ready_list[i+1];
    return '<section id="f-'+c.id+'" class="yc" hidden><header class="sec-head"><p class="kicker"><a href="#annee">'+esc(m.t)+'</a> · '+esc(c.n)+'</p><h2>'+esc(c.t)+'</h2>'+
      '<p class="sub">Support : « '+esc(c.src)+' ». <a href="#carte" data-vm="'+c.r+'">Voir la région sur la carte</a></p></header>'+
      '<div class="essentiel"><p class="mini">L\'essentiel de '+esc(c.n)+'</p><ul>'+c.ess.map((t,k)=>'<li><span class="ess-t num">'+(k+1)+'</span><span>'+t+'</span></li>').join("")+'</ul></div>'+
      '<p class="more-hint">Le détail du cours :</p>'+
      (c.det||[]).map((d,k)=>'<details class="block" id="f-'+c.id+'-'+(k+1)+'"><summary><h3>'+esc(d[0])+'</h3></summary><div class="prose">'+d[1]+'</div></details>').join("")+
      (c.acc&&c.acc.length?'<details class="block" id="f-'+c.id+'-acc"><summary><h3>Accords mets-vins <span class="tag">'+c.acc.length+' vins</span></h3></summary><div class="tbl"><table><thead><tr><th>Appellation</th><th>Cépage</th><th>Profil</th><th>Plat</th></tr></thead><tbody>'+
        c.acc.map(a=>'<tr><td><b>'+esc(a[0])+'</b></td><td>'+esc(a[1])+'</td><td>'+esc(a[2])+'</td><td>'+esc(a[3])+'</td></tr>').join("")+'</tbody></table></div></details>':'')+
      '<details class="block" id="f-'+c.id+'-notes"><summary><h3>Mes notes et vins dégustés <span class="tag">après le cours</span></h3></summary><p class="muted">Rien pour l\'instant : après le cours, envoie tes notes et tes fiches de dégustation, elles s\'ajouteront ici et dans <a href="#degustations">Vins dégustés</a>.</p></details>'+
      '<nav class="yc-nav">'+(prev?'<a href="#f-'+prev.id+'">← '+esc(prev.n)+'</a>':'<span></span>')+'<a href="#annee">Programme</a>'+(next?'<a href="#f-'+next.id+'">'+esc(next.n)+' →</a>':'<span></span>')+'</nav></section>';
  }).join("");
})();

/* ===== Dégustation : fiche de l'année, cépages, accords ===== */
(function(){
  const F=[
   ["Analyse visuelle",[
    ["Intensité de la robe","très pâle – moyennement pâle – profonde – foncée"],
    ["Couleur · blanc","vert d'eau – jaune avec un reflet vert – jaune pâle – paille – or / doré – ambré"],
    ["Couleur · rosé","gris – rose – framboise – cerise – saumoné – orangé"],
    ["Couleur · rouge","reflet violacé – grenat – rubis – vermillon – orange – brique"],
    ["Viscosité","faible – fluide – grasse – teintée"],
    ["Limpidité","suspension dans le verre – trouble – voilé / laiteux"],
    ["Gaz carbonique","perlant sur le disque – légère effervescence – effervescence prononcée"]]],
   ["Analyse olfactive",[
    ["Intensité aromatique","faiblement aromatique – moyennement aromatique – très aromatique"],
    ["Catégorie dominante","arômes primaires – arômes secondaires – arômes tertiaires"],
    ["Bouquet","fermé – discret – ouvert – évolué – réduit – oxydé – marqué par l'élevage"],
    ["Familles aromatiques","fruitée – florale – végétale – minérale – épicée – empyreumatique – boisée – animale – alimentaire – balsamique"],
    ["Arômes","ceux de mon analyse, puis ceux de la correction"]]],
   ["Analyse gustative",[
    ["Sucrosité","extra sec – sec – sec mais avec une pointe de sucre – demi-sec – moelleux – liquoreux"],
    ["Acidité","souple – frais – nerveux – vert"],
    ["Alcool","léger – modéré – généreux – corsé – capiteux"],
    ["Tanins (rouge)","fondu – savoureux – présent – astringent"],
    ["Corps","décharné – mince – rond – ferme – volumineux – musclé"],
    ["Persistance","courte – moyenne – longue – prolongée"],
    ["Prédominance de l'équilibre","plat – sucrosité – acidité – alcool – tanins – harmonieux"]]],
   ["Évaluation du vin",[
    ["Stade d'évolution","passé – fragile – épanoui – s'ouvre – fermé"],
    ["Potentiel de garde","trop évolué – à boire rapidement – à boire dans l'année – à boire dans 2/3 ans – attendre 4/5 ans"],
    ["Typicité","atypique – médiocre – correct – typé – racé"],
    ["Style de vin","plaisant – croquant – gourmand – élégant – puissant – riche – raffiné – marginal – déviant"],
    ["Impression personnelle","je n'aime pas – pas mal – j'aime – j'aime beaucoup – coup de cœur"],
    ["Accord mets-vin","« technique » et « géographique / historique »"]]]
  ];
  const NEWW=new Set(["discret","plat","croquant"]),NEWR=new Set(["Impression personnelle","Accord mets-vin"]);
  document.getElementById("fiche-france").innerHTML='<header class="sec-head"><p class="kicker">La fiche des modules vins de France</p><h2>La fiche de dégustation de l\'année</h2><p class="sub">La même méthode qu\'à l\'initiation, avec quelques nouveautés (encadrées en couleur) : bouquet « discret », équilibre « plat », style « croquant », l\'impression personnelle et les accords mets-vins. En tête de fiche : pays, région, appellation, millésime, domaine, cuvée, cépages, alcool, lieu et prix d\'achat.</p></header>'+
    '<div class="essentiel"><p class="mini">Ce qui est noté à l\'examen (dégustation à l\'aveugle)</p><ul>'+
    ['Région et cépage prédominant (/5 chacun) : ce sont les points qui pèsent.','Intensité de la robe : pâle, moyenne ou profonde.','Intensité du nez : faible, moyen ou très aromatique.','Douceur (blanc) ou tanin (rouge), acidité, corps (/2 chacun).'].map((t,k)=>'<li><span class="ess-t num">'+(k+1)+'</span><span>'+t+'</span></li>').join("")+'</ul></div>'+
    F.map(g=>'<details class="block"'+(g[0]==="Analyse visuelle"?' open':'')+'><summary><h3>'+g[0]+'</h3></summary><div>'+g[1].map(r=>'<div class="scale-row"><span class="sr-l">'+esc(r[0])+'</span><span class="sr-v">'+r[1].split(" – ").map(w=>'<span'+((NEWR.has(r[0])||NEWW.has(w))?' class="new" title="Nouveau par rapport à l\'initiation"':'')+'>'+esc(w)+'</span>').join("")+'</span></div>').join("")+'</div></details>').join("")+
    '<p class="prose">Les définitions de chaque terme sont juste en dessous, rubrique par rubrique. Les définitions de typicité et de style viennent du dossier « Évaluer un vin 2 » : typicité de <b>atypique</b> (ne ressemble pas à son appellation) à <b>racé</b> (modèle de référence) ; style <b>déviant</b> = contaminé par des brettanomyces (odeurs d\'étable).</p>';

  /* cépages (d'après « Analyse organoleptique des cépages blancs et rouges ») */
  const CEP=[
   ["Sylvaner","b","Alsace","Très pâle, légèrement verdâtre. Floral, fleurs blanches, minéral, acidulé. Vin léger et discret mais avec une certaine acidité."],
   ["Pinot blanc","b","Alsace, Crémant d'Alsace","Aubépine, agrumes, floral, miel, amande douce. Nez printanier, sec mais rond, acidité moyenne."],
   ["Riesling","b","Alsace","Pâle à reflets verts à doré. Citronnelle, citron, minéral, fruits mûrs, acacia ; pétrole en vieillissant. Vin souvent très ferme."],
   ["Muscat","b","Alsace ; VDN (Beaumes-de-Venise, Rivesaltes, Frontignan, Cap Corse) ; Clairette de Die","Très pâle. Raisin frais, rose, fleur d'oranger, agrumes, melon ; finale amère. Très caractéristique."],
   ["Pinot gris","b","Alsace","Paille. Fruits jaunes, confiture d'orange, miel, épices, sous-bois, champignon. Riche en bouche, souvent du sucre résiduel."],
   ["Gewurztraminer","b","Alsace","Or à reflet vert. Épices, rose, poivre, litchi, mangue, miel, fruits confits. Puissant, souvent un peu écœurant."],
   ["Chardonnay","b","Bourgogne, Champagne, Limoux","Pâle à reflet vert (Chablis) à paille doré. Pomme verte, fleurs blanches, silex ; surtout noisette, beurre, vanille, toasté avec l'élevage en fût. Souvent gras."],
   ["Viognier","b","Rhône nord (Condrieu, Château-Grillet)","Or pâle. Abricot, pêche blanche, violette, lacté, épices douces, miel. Très peu acide."],
   ["Roussanne","b","Rhône, Savoie (Chignin-Bergeron)","Paille à vieil or. Miel, acacia, abricot sec, cire d'abeille. Ample et gras, manque souvent d'acidité."],
   ["Marsanne","b","Rhône nord, Cassis","Jaune pâle. Noisette, amande, tilleul. Discret, équilibré entre gras et acidité, un peu d'amertume finale."],
   ["Sauvignon","b","Loire (Touraine, Centre), Bordeaux, Saint-Bris","Pâle à reflet vert. Bourgeon de cassis, buis, fougère, agrumes, pamplemousse, herbe, pierre à fusil. Très sec, expressif."],
   ["Chenin","b","Loire (Anjou, Vouvray, Savennières), Limoux","Paille à reflet vert. Minéral, herbe fraîche, coing, poire, chèvrefeuille, miel, touche exotique."],
   ["Melon de Bourgogne","b","Muscadet (Pays nantais)","Pâle, presque incolore, reflets verts, léger perlant. Fleurs blanches, minéral, iode, levure. Très sec, léger, rafraîchissant."],
   ["Gros et petit manseng","b","Jurançon, Pacherenc du Vic-Bilh","Jaune pâle à reflet doré. Fruits exotiques et confits, ananas, zeste d'agrumes, pamplemousse. Superbe équilibre sucre-acidité."],
   ["Sémillon","b","Bordeaux (Sauternes, Graves), Bergerac","Paille à reflet doré. Fruits secs, noisette, fruits très mûrs, miel, épices, parfois colle à bois. Riche quand il est moelleux."],
   ["Rolle / vermentino","b","Provence, Corse","Jaune très pâle. Bonbon acidulé, floral, légèrement salin. Manque parfois de matière."],
   ["Jacquère","b","Savoie (Apremont, Abymes)","Très pâle, reflet vert. Pomme verte très marquée, floral, minéral, belle acidité, léger en alcool."],
   ["Altesse","b","Roussette de Savoie, Bugey","Jaune à paille. Miel, fruits secs, aubépine. Frais et rond, léger en alcool."],
   ["Picpoul","b","Picpoul de Pinet","Robe pâle. Fleurs blanches, agrumes, parfois artichaut ; finale saline."],
   ["Pinot noir","r","Bourgogne, Champagne, Alsace","Souvent peu coloré, grenat. Griotte, fraise des bois ; mûre, sous-bois, animal en vieillissant. Facile à reconnaître à l'œil."],
   ["Gamay","r","Beaujolais, Touraine, Savoie","Violacé, pas très intense. Fruits rouges acidulés, groseille, framboise. Peu tannique, belle acidité."],
   ["Syrah","r","Rhône nord et sud, Languedoc","Profond, bien violacé. Fruits noirs, cassis, poivre, girofle. Équilibre acidité-tanins. Crème de cassis en Languedoc."],
   ["Grenache","r","Rhône sud, Languedoc-Roussillon, Provence, VDN","Rubis (plus pourpre en Languedoc). Fruits rouges à l'eau-de-vie, cannelle, chocolat. Riche en alcool, chaleureux, finale parfois sucrée."],
   ["Merlot","r","Bordeaux rive droite (Pomerol, Saint-Émilion)","Rubis. Fruits noirs, pruneau, mûre. Tanins savoureux, souvent boisé."],
   ["Cabernet sauvignon","r","Bordeaux rive gauche (Médoc, Graves)","Grenat. Fruits noirs, épices, cuir, vanille, cèdre. Tanins présents mais élégants."],
   ["Cabernet franc","r","Loire (Chinon, Bourgueil, Saumur-Champigny), Libournais","Violacé. Poivron vert, herbacé, violette, fruit acidulé. Acidité présente, parfois austère."],
   ["Mourvèdre","r","Bandol, Rhône sud, Languedoc","Pourpre intense. Fruits noirs, torréfaction, réglisse, animal, jus de viande. Austère et tannique."],
   ["Carignan","r","Corbières, Fitou, Roussillon","Grenat foncé. Fraise confiturée, parfois animal, épices douces. Difficile à reconnaître."],
   ["Tannat","r","Madiran","Couleur intense, violacée. Fruits noirs, épices, cuir, chocolat. Tanins puissants, vin chaleureux."],
   ["Côt / malbec","r","Cahors","Intense, violacé. Fruits noirs, terreux, tabac, café froid. Tanins puissants, un peu amer, style bordelais."],
   ["Négrette","r","Fronton","Grenat. Cerise, fraise des bois, sanguin, sous-bois. Fruitée, fraîche ; comme un gamay plus foncé et structuré."],
   ["Mondeuse","r","Savoie (Arbin)","Violacé, intensité moyenne. Cassis, griotte, humus. Un des rouges les plus acides ; comme une syrah du nord plus légère."],
   ["Trousseau","r","Jura","Grenat à rubis. Fruits noirs fumés (salaisons), sous-bois. Plus ferme que le poulsard, tanin savoureux."],
   ["Poulsard","r","Jura","Rubis à vermillon dès la jeunesse. Fraise, prune, sous-bois, animal. Rond et frais, comme un pinot noir léger ou un rosé."]
  ];
  document.getElementById("cepages").innerHTML='<header class="sec-head"><p class="kicker">Reconnaître à l\'aveugle</p><h2>Les cépages, robe, nez et bouche</h2><p class="sub">D\'après le dossier « Analyse organoleptique des cépages blancs et rouges », avec les régions où on les retrouve dans les cours. À l\'examen, le cépage prédominant vaut 5 points.</p></header>'+
    '<div class="cep-tools"><input type="search" id="cep-q" placeholder="Filtrer : litchi, Loire, tannique…" aria-label="Filtrer les cépages"><div class="filters" role="group" aria-label="Couleur"><button type="button" data-c="all" aria-pressed="true">Tous</button><button type="button" data-c="b" aria-pressed="false">Blancs</button><button type="button" data-c="r" aria-pressed="false">Rouges</button></div></div>'+
    '<div class="cep-grid" id="cep-grid">'+CEP.map((c,i)=>'<article class="cep" id="cep-'+i+'" data-c="'+c[1]+'" style="--c:'+(c[1]==="b"?"#EADB8A":"#6E1428")+'"><h4><i aria-hidden="true"></i>'+esc(c[0])+'</h4><p class="cep-r">'+esc(c[2])+'</p><p>'+esc(c[3])+'</p></article>').join("")+'</div>';
  let cc="all";
  const nz=s=>s.normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase();
  function fcep(){const q=nz(document.getElementById("cep-q").value.trim());document.querySelectorAll("#cep-grid .cep").forEach(a=>{a.hidden=!((cc==="all"||a.dataset.c===cc)&&(!q||nz(a.textContent).includes(q)));});}
  document.getElementById("cep-q").addEventListener("input",fcep);
  document.querySelectorAll("#cepages [data-c]").forEach(b=>{if(b.tagName!=="BUTTON")return;b.onclick=()=>{cc=b.dataset.c;document.querySelectorAll("#cepages button[data-c]").forEach(x=>x.setAttribute("aria-pressed",x===b?"true":"false"));fcep();};});

  /* accords */
  const Y=window.YEAR,rows=[];Y.courses.forEach(c=>(c.acc||[]).forEach(a=>rows.push([c.id,c.n].concat(a))));
  document.getElementById("accords").innerHTML='<header class="sec-head"><p class="kicker">Examen : un plat par vin</p><h2>Les accords mets-vins</h2><p class="sub">Les tableaux d\'accords de tous les cours réunis. Tape un plat ou un vin pour trouver l\'accord ; la liste de plats de chaque examen est juste en dessous.</p></header>'+
    '<div class="cep-tools"><input type="search" id="acc-q" placeholder="Un plat (agneau, huîtres…) ou un vin (Chablis…)" aria-label="Chercher un accord"><span class="muted" id="acc-n"></span></div>'+
    '<div class="tbl"><table><thead><tr><th>Vin</th><th>Cépage</th><th>Profil</th><th>Plat</th></tr></thead><tbody id="acc-body">'+
    rows.map(r=>'<tr><td><b>'+esc(r[2])+'</b><br><a class="muted" href="#f-'+r[0]+'">'+esc(r[1])+'</a></td><td>'+esc(r[3])+'</td><td>'+esc(r[4])+'</td><td>'+esc(r[5])+'</td></tr>').join("")+'</tbody></table></div>'+
    Y.modules.map(m=>'<details class="block"><summary><h3>Liste de plats · examen '+esc(m.t)+' <span class="tag">'+m.mets.length+' plats</span></h3></summary><div class="acc-list">'+m.mets.map(x=>'<span>'+esc(x)+'</span>').join("")+'</div></details>').join("");
  function facc(){const q=nz(document.getElementById("acc-q").value.trim());let n=0;document.querySelectorAll("#acc-body tr").forEach(tr=>{const ok=!q||nz(tr.textContent).includes(q);tr.hidden=!ok;if(ok)n++;});document.getElementById("acc-n").textContent=n+" accord"+(n>1?"s":"");}
  document.getElementById("acc-q").addEventListener("input",facc);facc();
})();

/* ===== Vins dégustés : liens photo et fiche ===== */
document.querySelectorAll("article.wine").forEach((a,i)=>{
  if(!a.id)a.id="vin-"+(i+1);
  const h=a.querySelector("h4");if(!h||a.querySelector(".dg-links"))return;
  const name=h.textContent.replace(/^\s*\d+\s*·\s*/,"").trim(),meta=(a.querySelector(".dg-meta")||{}).textContent||"";
  const q=encodeURIComponent(name+" "+(meta.split("·")[1]||"").replace(/AOC|AOP|IGP/g,"").trim());
  const p=document.createElement("p");p.className="dg-links";
  p.innerHTML=(a.dataset.photo?'<img class="dg-photo" src="'+a.dataset.photo+'" alt="Bouteille : '+esc(name)+'" loading="lazy">':'')+
    '<a href="https://www.google.com/search?tbm=isch&q='+q+'" target="_blank" rel="noopener">Photo de la bouteille ↗</a>'+
    '<a href="https://www.vivino.com/search/wines?q='+encodeURIComponent(name)+'" target="_blank" rel="noopener">Vivino ↗</a>';
  h.insertAdjacentElement("afterend",p);
});

/* ===== Navigation dans l'année + liens vers la carte ===== */
document.addEventListener("click",e=>{const a=e.target.closest("a[data-vm]");if(a&&window.vmOpen){setTimeout(()=>window.vmOpen(a.dataset.vm),0);}});
const _route=route;
route=function(){
  const h=decodeURIComponent(location.hash.slice(1)),el=h?document.getElementById(h):null,yc=el&&el.closest(".yc");
  document.querySelectorAll(".yc").forEach(s=>{s.hidden=s!==yc;});
  _route();
};
window.removeEventListener("hashchange",_route);window.addEventListener("hashchange",route);

/* ===== Recherche globale ===== */
(function(){
  const input=document.getElementById("q"),out=document.getElementById("q-res");if(!input)return;
  const nz=s=>(s||"").normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase();
  const PL={cours:"Cours",degustation:"Dégustation",vignobles:"Vignobles",exercices:"S'entraîner"};
  let IDX=null;
  function build(){
    IDX=[];
    const add=(t,p,txt,go,bo)=>IDX.push({t,p,txt:txt.replace(/\s+/g," ").trim(),nt:nz(t),nx:nz(txt),go,bo:bo||0});
    const textOf=el=>{const w=document.createTreeWalker(el,NodeFilter.SHOW_TEXT);const a=[];let n;while((n=w.nextNode())){if(n.parentElement.closest("script,style,.essentiel .pi"))continue;a.push(n.nodeValue);}return a.join(" ");};
    document.querySelectorAll(".part section[id], .part details[id], .part .sub-block[id], .part article[id], .part .module-head[id]").forEach(el=>{
      if(el.closest("#exercices")&&!el.matches("section"))return;
      if(/-notes$/.test(el.id))return;
      const part=el.closest(".part"),hd=el.querySelector("summary h3, h2, h3, h4");if(!hd)return;
      const hc=hd.cloneNode(true);hc.querySelectorAll(".pi,.pis,.tag,.kicker").forEach(x=>x.remove());
      let t=hc.textContent.replace(/\s+/g," ").trim();
      const yc=el.closest(".yc");if(yc&&el!==yc)t=yc.querySelector("h2").textContent+" · "+t;
      if(el.matches(".yc"))t=el.querySelector(".kicker").textContent.split("·").pop().trim()+" · "+t;
      add(t,PL[part.id]||"",textOf(el),"#"+el.id,el.matches(".yc,section")?2:0);
    });
    const VMX=window.VMX||{};
    Object.keys(VMX).forEach(r=>VMX[r].forEach((s,i)=>add(s.t+" ("+(window.VM_NAMES&&window.VM_NAMES[r]||r)+")","Vignobles",s.s+" "+s.ap+" "+s.c+" "+s.x,{r,i})));
  }
  function snippet(txt,q){const n=nz(txt),i=n.indexOf(q);if(i<0)return esc(txt.slice(0,110))+(txt.length>110?"…":"");const s=Math.max(0,i-45),e=Math.min(txt.length,i+q.length+65);return(s?"…":"")+esc(txt.slice(s,i))+"<b>"+esc(txt.slice(i,i+q.length))+"</b>"+esc(txt.slice(i+q.length,e))+(e<txt.length?"…":"");}
  let res=[],cur=-1;
  function run(){
    if(!IDX)build();
    const q=nz(input.value.trim());if(q.length<2){out.hidden=true;return;}
    const words=q.split(/\s+/);
    res=IDX.map(x=>{let sc=words.length>1?(x.nt.includes(q)?8:x.nx.includes(q)?3:0):0;for(const w of words){if(x.nt.includes(w))sc+=x.nt.startsWith(w)?6:4;else if(x.nx.includes(w))sc+=1;else return null;}return[sc+(sc>=4*words.length?x.bo:0)-(x.nx.length/20000),x];}).filter(Boolean).sort((a,b)=>b[0]-a[0]).slice(0,12).map(a=>a[1]);
    cur=-1;
    out.innerHTML=res.length?res.map((x,i)=>'<li><a href="'+(typeof x.go==="string"?x.go:"#carte")+'" data-i="'+i+'"><span class="qp">'+esc(x.p)+'</span><span class="qt">'+esc(x.t)+'</span><span class="qs">'+snippet(x.txt,words[0])+'</span></a></li>').join(""):'<li class="qnone">Rien trouvé pour « '+esc(input.value)+' ».</li>';
    out.hidden=false;
  }
  function go(x){out.hidden=true;input.blur();if(typeof x.go!=="string"){location.hash="#carte";setTimeout(()=>window.vmOpen&&window.vmOpen(x.go.r,x.go.i),30);}}
  input.addEventListener("input",run);
  input.addEventListener("focus",()=>{if(input.value.trim().length>1)run();});
  input.addEventListener("keydown",e=>{
    const links=[...out.querySelectorAll("a")];
    if(e.key==="ArrowDown"||e.key==="ArrowUp"){e.preventDefault();if(!links.length)return;cur=(cur+(e.key==="ArrowDown"?1:-1)+links.length)%links.length;links.forEach((l,i)=>l.classList.toggle("is-on",i===cur));links[cur].scrollIntoView({block:"nearest"});}
    else if(e.key==="Enter"){const l=links[cur<0?0:cur];if(l){e.preventDefault();l.click();}}
    else if(e.key==="Escape"){out.hidden=true;}
  });
  out.addEventListener("click",e=>{const a=e.target.closest("a[data-i]");if(!a)return;const x=res[+a.dataset.i];if(typeof x.go!=="string"){e.preventDefault();go(x);}else{out.hidden=true;if(a.getAttribute("href")===location.hash){e.preventDefault();route();}}});
  document.addEventListener("click",e=>{if(!e.target.closest(".search"))out.hidden=true;});
})();

/* ===== Alsace : exercices au format de l'évaluation France 1 (étiquettes, QCM, dégustation, accords) ===== */
const AL_QCM=[
 ["Combien d'AOP compte l'Alsace ?",["53","51","3","13"],"AOP Alsace, AOP Crémant d'Alsace et 51 AOP Alsace Grand Cru."],
 ["Combien de grands crus en Alsace ?",["51","33","53","17"],"51 grands crus de 3 à 80 ha, environ 700 ha au total."],
 ["Quelle part des vins d'Alsace les grands crus représentent-ils ?",["4 %","21 %","74 %","40 %"],"AOP Alsace 74 %, Crémant 21 %, grands crus 4 %."],
 ["Quelle part de la production représente le Crémant d'Alsace ?",["21 %","4 %","74 %","50 %"],"Le crémant fait 21 % de la production."],
 ["Dans quels départements se trouve le vignoble ?",["Bas-Rhin et Haut-Rhin","Moselle et Bas-Rhin","Haut-Rhin et Vosges","Doubs et Haut-Rhin"],"Une bande de 100 km sur 2 à 4 km entre les Vosges et le Rhin."],
 ["Quel est le climat de l'Alsace ?",["Semi-continental, sec et ensoleillé","Océanique et humide","Méditerranéen","Montagnard très pluvieux"],"Les Vosges arrêtent la pluie : pluviométrie faible."],
 ["Quel rôle jouent les Vosges ?",["Elles arrêtent les pluies venues de l'ouest","Elles apportent l'humidité du Rhin","Elles fournissent les sols volcaniques de tout le vignoble","Elles protègent du mistral"],"Micro-climat sec et ensoleillé, protégé par le massif vosgien."],
 ["Que signifie la mention « Gentil » ?",["Un assemblage avec au moins 50 % de riesling, pinot gris, muscat ou gewurztraminer","Un assemblage simple, sans règle de proportion","Un vin doux issu de raisins surmûris","Un vin d'un seul cépage noble"],"Gentil = assemblage plus exigeant que l'Edelzwicker."],
 ["Que désigne « Edelzwicker » ?",["Un assemblage de cépages","Un vin de grains nobles","Un grand cru","Un crémant rosé"],"L'Edelzwicker est l'assemblage simple ; le Gentil est l'assemblage plus rigoureux."],
 ["Le nom du cépage sur une étiquette d'AOP Alsace…",["n'est pas le nom de l'AOP et n'est pas obligatoire","est le nom de l'AOP","est obligatoire","est interdit"],"Attention, piège du cours : « Alsace Riesling » = AOP Alsace + mention du cépage."],
 ["Quel est le seul cépage rouge d'Alsace ?",["Pinot noir","Gamay","Meunier","Syrah"],"Il fait environ 10 % de l'encépagement."],
 ["Quel cépage est le plus planté en Alsace ?",["Riesling (22 %)","Sylvaner (8 %)","Pinot noir (10 %)","Muscat"],"Riesling 22 %, pinot blanc 21 %, gewurztraminer 19 %, pinot gris 15 %, pinot noir 10 %, sylvaner 8 %."],
 ["Quelle bouteille est obligatoire pour les vins d'Alsace ?",["La flûte d'Alsace (sauf pour le crémant)","La bourguignonne","La bordelaise","Le clavelin"],"La flûte, dite aussi « vin du Rhin »."],
 ["Quels cépages sont admis en grand cru (sauf exceptions) ?",["Riesling, gewurztraminer, pinot gris, muscat","Tous les cépages d'Alsace","Riesling et sylvaner","Pinot blanc, auxerrois, chardonnay, pinot noir"],"Ce sont les 4 cépages nobles."],
 ["Quel est le seul grand cru qui autorise le sylvaner ?",["Zotzenberg","Rangen","Schoenenbourg","Brand"],"Zotzenberg, à Mittelbergheim (Bas-Rhin)."],
 ["Lequel de ces grands crus autorise le pinot noir ?",["Hengst","Zotzenberg","Rangen","Schoenenbourg"],"Kirchberg de Barr, Hengst (2022) et Vorbourg (2024) autorisent le pinot noir."],
 ["Quel grand cru est le dernier reconnu (2007) et autorise les assemblages ?",["Kaefferkopf","Altenberg de Bergheim","Rangen","Steinklotz"],"Le Kaefferkopf, à Ammerschwihr."],
 ["Qu'est-ce que le complantage ?",["Planter plusieurs variétés sur le même terrain","Planter les vignes sur deux départements","Greffer deux cépages sur un même pied","Vendanger deux fois la même parcelle"],"L'Altenberg de Bergheim autorise des raisins pressés ensemble, sans mention de cépage."],
 ["Quelles mentions sont obligatoires sur l'étiquette d'un grand cru ?",["Le millésime et le nom du grand cru","Le cépage et la commune","Le degré de sucre et le cépage","Le nom du domaine et la mention Gentil"],"Le cépage est « généralement » indiqué, mais il n'est pas obligatoire."],
 ["Avec quelle méthode élabore-t-on le Crémant d'Alsace ?",["Méthode traditionnelle","Méthode ancestrale","Cuve close","Gazéification"],"Deuxième fermentation en bouteille."],
 ["Quel est le cépage principal du Crémant d'Alsace ?",["Pinot blanc","Riesling","Gewurztraminer","Sylvaner"],"Aussi pinot gris, pinot noir, riesling, chardonnay."],
 ["Que sont les Vendanges tardives (VT) ?",["Des raisins récoltés en surmaturité, qui donnent des vins moelleux","Des tries de grains botrytisés, qui donnent des liquoreux","Des raisins gelés sur pied","Des vins vinifiés avec les peaux"],"Récolte plusieurs semaines après le début officiel des vendanges."],
 ["Que sont les Sélections de grains nobles (SGN) ?",["Des tries successives de grains atteints de Botrytis cinerea","Des raisins récoltés une semaine plus tôt","Les meilleurs raisins d'un grand cru, vinifiés secs","Un assemblage des 4 cépages nobles"],"Vins liquoreux : le cépage s'efface derrière la concentration."],
 ["Quels cépages peuvent faire des VT et des SGN ?",["Riesling, pinot gris, muscat, gewurztraminer","Tous les cépages d'Alsace","Pinot noir et pinot gris","Sylvaner et pinot blanc"],"Uniquement les 4 cépages nobles."],
 ["Quelle richesse en sucre pour une Vendange tardive (selon le cours) ?",["235 à 257 g/L","276 à 306 g/L","17 g/L","45 à 60 g/L"],"276 à 306 g/L, c'est la SGN."],
 ["Le Rangen se distingue par…",["sa roche volcanique et sa position la plus au sud","ses marnes gypseuses à Riquewihr","son autorisation du sylvaner","ses assemblages sans cépage"],"Thann et Vieux-Thann, 22 ha, longue garde."],
 ["Le Schoenenbourg se distingue par…",["ses marnes gypseuses et sa minéralité « pierre à fusil »","sa roche volcanique","son pinot noir","son complantage"],"Riquewihr et Zellenberg, 53 ha, vins amples de longue garde."],
 ["La dénomination « Klevener de Heiligenstein » est réservée au…",["savagnin rose","gewurztraminer","pinot noir","chasselas"],"Une des dénominations géographiques de l'AOP Alsace."],
 ["Quel arôme le riesling développe-t-il en vieillissant ?",["Hydrocarbures (pétrole)","Litchi","Cuir","Noix"],"Jeune : citron, fleurs blanches, minéral."],
 ["Quels arômes typiques du gewurztraminer ?",["Litchi, rose, épices","Pomme verte, herbe coupée","Cassis, poivron","Beurre, noisette"],"Robe jaune doré intense, bouche ample et suave."],
 ["Qu'est-ce qu'un vin orange ?",["Un blanc vinifié avec macération des peaux, comme un rouge","Un rosé de saignée","Un vin aromatisé à l'orange","Un liquoreux botrytisé"],"La macération apporte couleur, tanins et structure."],
 ["À l'apéritif, on évite…",["les vins avec du sucre résiduel","le crémant","le sylvaner","le muscat sec"],"Le cours conseille crémant, pinot blanc, sylvaner ou muscat sec."]
];
const AL_LBL=[
 {l:[["Riesling","cep"],["Alsace Grand Cru","app",1],["Schoenenbourg","cru"],["2019","mil"]],app:"Alsace Grand Cru",niv:"AOP Grand Cru",sub:"Haut-Rhin",vin:"Pressurage direct",
  cep:["Riesling","Gewurztraminer","Pinot gris","Muscat"],all:["Riesling","Gewurztraminer","Pinot gris","Muscat"],
  xniv:"Le nom d'un des 51 crus (Schoenenbourg, à Riquewihr) suffit à reconnaître un grand cru, même si la mention est effacée.",
  oq:"Présentez le niveau hiérarchique de cette appellation",
  oa:"<b>AOP Alsace Grand Cru</b> : le sommet de la hiérarchie alsacienne. 51 grands crus de 3 à 80 ha (700 ha), seulement 4 % des vins d'Alsace. Millésime et nom du cru obligatoires. Cépages admis : riesling, gewurztraminer, pinot gris, muscat, sauf exceptions (Zotzenberg, Hengst…). Le <b>Schoenenbourg</b> (Riquewihr, Zellenberg, 53 ha) : marnes gypseuses et grès, minéralité « pierre à fusil », longue garde."},
 {l:[["Alsace","app"],["Gentil","men"],["2023","mil"]],app:"Alsace",niv:"AOP Régionale",sub:"Toute l'Alsace (AOP régionale)",vin:"Pressurage direct",
  cep:["Riesling","Pinot gris","Muscat","Gewurztraminer"],all:["Riesling","Pinot gris","Muscat","Gewurztraminer","Sylvaner","Pinot blanc","Auxerrois","Chasselas"],
  xniv:"Gentil est une mention de l'AOP Alsace : on reste au niveau régional.",
  oq:"Expliquez la mention « Gentil »",
  oa:"Le <b>Gentil</b> est un assemblage plus exigeant que l'Edelzwicker : <b>au moins 50 %</b> du vin doit venir des cépages nobles (<b>riesling, pinot gris, muscat, gewurztraminer</b>), le reste pouvant être du sylvaner, du pinot blanc ou du chasselas. Il s'agit de l'AOP Alsace (régionale) suivie de la mention Gentil."},
 {l:[["Crémant d'Alsace","app"],["Brut","men"]],app:"Crémant d'Alsace",niv:"AOP Régionale",sub:"Toute l'Alsace (AOP régionale)",vin:"Méthode traditionnelle",
  cep:["Pinot blanc","Pinot gris","Riesling","Chardonnay"],all:["Pinot blanc","Pinot gris","Riesling","Chardonnay","Pinot noir","Auxerrois"],
  xniv:"Le Crémant d'Alsace est l'une des 3 AOP couvrant toute l'Alsace (avec l'AOP Alsace et l'AOP Alsace Grand Cru).",
  oq:"Expliquez l'élaboration de ce vin",
  oa:"<b>Méthode traditionnelle</b> : un vin de base tranquille reçoit une liqueur de tirage (sucre et levures), puis fait sa <b>deuxième fermentation en bouteille</b> ; vieillissement sur lies (notes toastées, briochées), remuage, dégorgement, puis liqueur d'expédition qui fixe le dosage (ici <b>brut</b>). Surtout du <b>pinot blanc</b>, aussi pinot gris, pinot noir, riesling, chardonnay. 21 % de la production ; c'est le seul vin d'Alsace qui n'est pas obligé d'être en flûte."},
 {l:[["Alsace","app",1],["Pinot noir","cep"],["2022","mil"]],app:"Alsace",niv:"AOP Régionale",sub:"Toute l'Alsace (AOP régionale)",vin:"Rouge classique",
  cep:["Pinot noir"],all:["Pinot noir"],
  xniv:"Sans nom de grand cru, un pinot noir d'Alsace est en AOP Alsace (régionale).",
  oq:"Présentez le cépage de ce vin",
  oa:"Le <b>pinot noir</b> est le <b>seul cépage rouge</b> d'Alsace (environ 10 % de l'encépagement). Vinification en rouge classique (macération, fermentation, écoulage). Robe pâle à moyenne, petits fruits rouges (fraise, cerise), tanins fins. Du plus léger au plus structuré ; certains grands crus l'autorisent désormais (Kirchberg de Barr, Hengst, Vorbourg)."},
 {l:[["Gewurztraminer","cep"],["Vendanges tardives","men"],["Alsace","app",1],["2018","mil"]],app:"Alsace",niv:"AOP Régionale",sub:"Toute l'Alsace (AOP régionale)",vin:"Vin naturellement doux",
  cep:["Gewurztraminer","Riesling","Pinot gris","Muscat"],all:["Riesling","Gewurztraminer","Pinot gris","Muscat"],
  xniv:"VT est une mention : sans nom de cru, c'est l'AOP Alsace. Une VT peut aussi exister en grand cru.",
  oq:"Expliquez la mention « Vendanges tardives »",
  oa:"Raisins récoltés en <b>surmaturité</b>, plusieurs semaines après le début officiel des vendanges. Uniquement pour les 4 cépages nobles : <b>riesling, pinot gris, muscat, gewurztraminer</b>. Richesse en sucre de 235 à 257 g/L selon le cours ; vins <b>moelleux</b>, qui allient richesse et fraîcheur. Accords : munster, dessert aux fruits exotiques, foie gras."},
 {l:[["Alsace Grand Cru","app",1],["Rangen","cru"],["Pinot gris","cep"],["Sélection de grains nobles","men"]],app:"Alsace Grand Cru",niv:"AOP Grand Cru",sub:"Haut-Rhin",vin:"Vin naturellement doux",
  cep:["Pinot gris","Riesling","Gewurztraminer","Muscat"],all:["Riesling","Gewurztraminer","Pinot gris","Muscat"],
  xniv:"Rangen est l'un des 51 grands crus (Thann et Vieux-Thann, le plus au sud).",
  oq:"Expliquez la mention « Sélection de grains nobles »",
  oa:"<b>Tries successives</b> de grains atteints par la pourriture noble (<i>Botrytis cinerea</i>). Mêmes 4 cépages que les VT. Richesse de 276 à 306 g/L selon le cours ; vins <b>liquoreux</b>, très concentrés : le cépage s'efface derrière la concentration. Le <b>Rangen</b> : roche volcanique, grand cru le plus méridional, finesse, puissance et très longue garde."},
 {l:[["Alsace Grand Cru","app",1],["Zotzenberg","cru"],["Sylvaner","cep"],["2021","mil"]],app:"Alsace Grand Cru",niv:"AOP Grand Cru",sub:"Bas-Rhin",vin:"Pressurage direct",
  cep:["Sylvaner","Riesling","Gewurztraminer","Pinot gris"],all:["Sylvaner","Riesling","Gewurztraminer","Pinot gris","Muscat"],
  xniv:"Zotzenberg (Mittelbergheim) est un des 51 grands crus.",
  oq:"Ce vin a une identité particulière : expliquez-la",
  oa:"Le sylvaner n'est normalement pas admis en grand cru. Le <b>Zotzenberg</b> (Mittelbergheim, Bas-Rhin) est <b>le seul grand cru qui autorise le sylvaner</b>, en plus des 4 cépages nobles. Les autres exceptions : pinot noir au Kirchberg de Barr, au Hengst et au Vorbourg ; assemblages à l'Altenberg de Bergheim et au Kaefferkopf."},
 {l:[["Hengst","cru"],["Alsace Grand Cru","app",1],["Pinot noir","cep"],["2022","mil"]],app:"Alsace Grand Cru",niv:"AOP Grand Cru",sub:"Haut-Rhin",vin:"Rouge classique",
  cep:["Pinot noir","Riesling","Gewurztraminer","Pinot gris"],all:["Pinot noir","Riesling","Gewurztraminer","Pinot gris","Muscat"],
  xniv:"Hengst (Wintzenheim, près de Colmar) est un des 51 grands crus.",
  oq:"Expliquez ce qui rend ce grand cru particulier",
  oa:"Les grands crus sont en principe réservés aux 4 cépages blancs nobles. Le <b>Hengst</b> (Wintzenheim) autorise le <b>pinot noir depuis 2022</b>, comme le Kirchberg de Barr et le Vorbourg (2024). Vinification en rouge classique ; vu au cours Alsace 2 (pinot noir du Hengst élevé sur lies en fûts bourguignons)."},
 {l:[["Alsace","app"],["Edelzwicker","men"]],app:"Alsace",niv:"AOP Régionale",sub:"Toute l'Alsace (AOP régionale)",vin:"Pressurage direct",
  cep:["Sylvaner","Pinot blanc","Chasselas","Riesling"],all:["Sylvaner","Pinot blanc","Chasselas","Riesling","Auxerrois","Pinot gris","Muscat","Gewurztraminer"],
  xniv:"Edelzwicker est une mention de l'AOP Alsace.",
  oq:"Quelle différence entre Edelzwicker et Gentil ?",
  oa:"Les deux sont des <b>assemblages</b> en AOP Alsace. L'<b>Edelzwicker</b> est l'assemblage simple, sans proportion imposée. Le <b>Gentil</b> est plus rigoureux : au moins 50 % de riesling, pinot gris, muscat ou gewurztraminer."},
 {l:[["Alsace","app",1],["Klevener de Heiligenstein","den"],["2023","mil"]],app:"Alsace",niv:"AOP Régionale",sub:"Bas-Rhin",vin:"Pressurage direct",
  cep:["Savagnin rose"],all:["Savagnin rose"],
  xniv:"Klevener de Heiligenstein est une dénomination géographique de l'AOP Alsace : l'appellation reste l'AOP Alsace.",
  oq:"Présentez le niveau hiérarchique de cette appellation",
  oa:"<b>AOP Alsace + dénomination géographique</b>. L'Alsace a 3 AOP (Alsace, Crémant d'Alsace, Alsace Grand Cru) ; l'AOP Alsace (74 % de la production) peut être suivie d'un cépage, d'une dénomination géographique, d'un lieu-dit, de Gentil ou d'Edelzwicker. Le <b>Klevener de Heiligenstein</b> (Bas-Rhin) est réservé au <b>savagnin rose</b>. Autres dénominations : Côte de Rouffach, Côtes de Barr, Ottrot, Bergheim, Vallée Noble…"},
 {l:[["Alsace Grand Cru","app"],["Altenberg de Bergheim","cru"],["2017","mil"]],app:"Alsace Grand Cru",niv:"AOP Grand Cru",sub:"Haut-Rhin",vin:"Pressurage direct",
  cep:["Riesling","Pinot gris","Gewurztraminer","Chasselas"],all:["Riesling","Pinot gris","Gewurztraminer","Chasselas","Pinot noir","Pinot blanc","Muscat"],
  xniv:"Le nom du cru et la mention Alsace Grand Cru sont visibles.",
  oq:"Pourquoi aucun cépage n'est-il indiqué ?",
  oa:"L'<b>Altenberg de Bergheim</b> pratique le <b>complantage</b> : plusieurs variétés plantées sur le même terrain, pressées ensemble. Le grand cru autorise ces assemblages (riesling, pinot gris, gewurztraminer, plus chasselas, pinot noir, pinot blanc, muscat) <b>sans mention de cépage</b>. Le Kaefferkopf autorise aussi l'assemblage. Rappel : en grand cru, seuls le millésime et le nom du cru sont obligatoires."}
];
const AL_CEP=[
 {c:"Riesling",k:["Robe pâle à reflets verts","Citron, fleurs blanches","Minéral","Hydrocarbures avec l'âge","Acidité vive, corps longiligne","Accord du cours : saumon au beurre blanc"]},
 {c:"Pinot gris",k:["Robe paille à dorée","Orange confite, miel","Épices, sous-bois","Bouche volumineuse","Souvent un peu de sucre résiduel","Accord du cours : foie gras poêlé"]},
 {c:"Gewurztraminer",k:["Robe jaune doré intense","Litchi","Rose","Épices","Bouche ample et suave","Accord du cours : tajine, nems au curry"]},
 {c:"Sylvaner",k:["Robe claire à reflets verts","Nez discret","Agrumes, herbe coupée","Bouche franche et fraîche","Léger, désaltérant","Accord du cours : tartare de truite"]},
 {c:"Muscat",k:["Nez très aromatique de raisin frais","Floral","Sec en Alsace malgré son nez","Croquant","Accord du cours : asperges sauce maltaise"]},
 {c:"Pinot blanc",k:["Souple et rond","Nez discret","Cépage principal du crémant","Accord du cours : terrine de lapereau"]},
 {c:"Pinot noir",k:["Seul cépage rouge d'Alsace","Robe pâle à moyenne","Petits fruits rouges, fraise","Tanins fins, soyeux"]}
];
const AL_QUAL=[
 ["Riesling typique · acidité","Nerveux",["Souple","Vert"],"Acidité vive : nerveux. « Vert » désigne une acidité de raisin pas mûr."],
 ["Riesling jeune · intensité de la robe","Pâle",["Profonde"],"Robe pâle à reflets verts."],
 ["Gewurztraminer · intensité du nez","Très aromatique",["Faible","Moyen"],"Litchi, rose, épices : un des cépages les plus aromatiques."],
 ["Gewurztraminer · acidité","Souple",["Nerveux","Vert"],"Bouche ample et suave, acidité basse."],
 ["Gewurztraminer · corps","Volumineux",["Mince"],"Ample, souvent avec du sucre résiduel."],
 ["Pinot gris · corps","Volumineux",["Mince"],"Volumineux, souvent un peu de sucre résiduel."],
 ["Sylvaner · intensité du nez","Faible",["Très aromatique"],"Nez discret : agrumes, fleurs blanches, herbe coupée."],
 ["Sylvaner · corps","Mince",["Volumineux"],"Léger, vif, désaltérant."],
 ["Muscat d'Alsace · intensité du nez","Très aromatique",["Faible"],"Nez explosif de raisin frais."],
 ["Muscat d'Alsace · douceur","Sec",["Moelleux","Liquoreux"],"En Alsace, le muscat est en général vinifié sec."],
 ["Pinot blanc · acidité","Souple",["Nerveux","Vert"],"Souple, rond, discret."],
 ["Pinot noir d'Alsace · tanins","Fondu",["Astringent"],"Tanins fins et soyeux."],
 ["Pinot noir d'Alsace · intensité de la robe","Pâle",["Profonde"],"Robe pâle à moyenne : le pinot noir a peu de matière colorante."],
 ["Vendanges tardives · douceur","Moelleux",["Sec","Liquoreux"],"VT = moelleux ; SGN = liquoreux."],
 ["Sélection de grains nobles · douceur","Liquoreux",["Sec","Demi-sec","Moelleux"],"Tries de grains botrytisés, très concentrés."],
 ["Crémant d'Alsace brut · douceur","Sec",["Moelleux","Liquoreux"],"Brut : peu de sucre ajouté au dosage."]
];
const AL_PLATS={sau:"Dos de saumon mi-cuit au beurre blanc citronnelle",hui:"Huîtres ou moules marinières de l'étang de Thau",dau:"Tartare de daurade au citron vert",boe:"Côte de bœuf maturée grillée",dob:"Daube provençale",mag:"Magret de canard aux fruits rouges",nav:"Navarin d'agneau",gar:"Gardianne de taureau",taj:"Tajine",nem:"Nems au curry",gig:"Gigot d'agneau de 7h aux épices orientales",dor:"Dorade en croûte de sel",foi:"Foie gras poêlé, chutney d'orange",vob:"Volaille de Bresse aux champignons",asp:"Asperges blanches sauce maltaise",mel:"Carpaccio de melon et langoustines à la coriandre",jou:"Joues de porc braisées",tru:"Tartare de truite, citron et aneth",can:"Canard rôti aux cerises noires",lap:"Terrine de lapereau",vol:"Vol-au-vent",pig:"Pigeonneau rosé à la française",mig:"Mignon de veau rosé, jus réduit",cro:"Croquettes au fromage",bro:"Brochettes de bœuf marinées",stj:"Saint-Jacques snackées, crumble au parmesan"};
const AL_ACC=[
 ["Alsace Riesling","sec, tendu, minéral",["sau","hui","dau"],["boe","dob","mag","nav","gar"],"L'acidité vive et la minéralité du riesling vont avec poissons et fruits de mer ; le cours l'associe au saumon au beurre blanc."],
 ["Alsace Grand Cru Riesling","sec, très minéral, intense, long",["sau","stj"],["dob","boe","mag","gar"],"Le cours associe le riesling grand cru au dos de saumon mi-cuit, beurre blanc citronnelle."],
 ["Alsace Gewurztraminer","riche, épicé, floral, parfois demi-sec",["taj","nem","gig"],["hui","dau","boe","dor"],"Ses arômes épicés et son ampleur répondent aux cuisines épicées : le cours cite tajine et nems au curry."],
 ["Alsace Pinot gris","gourmand, structuré, demi-sec possible",["foi","vob"],["hui","dau","boe","gar"],"Volumineux, parfois demi-sec : foie gras poêlé (cité au cours) ou volaille."],
 ["Alsace Muscat","sec, aromatique, croquant",["asp","mel"],["jou","boe","dob","mag"],"Le cours cite les asperges sauce maltaise, et le carpaccio de melon et langoustines pour le muscat grand cru."],
 ["Alsace Sylvaner","léger, vif, désaltérant",["tru"],["foi","dob","gig","can"],"Léger et vif : un plat frais et acidulé. Le cours cite le tartare de truite pour le sylvaner grand cru."],
 ["Alsace Pinot blanc","souple, rond, discret",["lap","vol"],["boe","dob","can","gig"],"Un vin discret pour un plat simple : le cours cite la terrine de lapereau."],
 ["Alsace Pinot noir","fruité, léger, tanins fins",["pig","mig"],["hui","asp","mel","dau"],"Un rouge léger va avec une viande rosée ou blanche, pas avec les fruits de mer ni les asperges."],
 ["Crémant d'Alsace brut","vif, bulles fines, sans sucre résiduel",["cro"],["dob","gig","can","jou"],"À l'apéritif, un vin sans sucre résiduel : le crémant avec des croquettes au fromage."],
 ["Alsace Gewurztraminer Vendanges tardives","moelleux, riche et frais",["foi"],["hui","dau","boe","bro"],"Un moelleux avec le foie gras ; le cours cite aussi munster et dessert exotique (hors liste)."]
];
EX.alqcm=()=>{const d=makeDeck(AL_QCM);const m=mcPanel("alqcm",{controls:'<span class="kicker cnt"></span>',next:()=>{const q=qFromQCM(d.next());q.cat="Alsace";m.f(".cnt").textContent="Question "+d.pos+" / "+d.total;return q;}});m.show();};
EX.alcep=()=>{
  const opts='<label for="acMode">Type</label><select id="acMode"><option value="mix">Les deux</option><option value="cep">Reconnaître le cépage</option><option value="qual">Qualificatifs de la fiche</option></select>';
  const cd=makeDeck(AL_CEP),qd=makeDeck(AL_QUAL);
  const m=mcPanel("alcep",{controls:opts,next:()=>{
    const v=$("#acMode").value,t=v==="mix"?(Math.random()<.5?"cep":"qual"):v;
    if(t==="cep"){const x=cd.next();const o=shuf([x.c].concat(shuf(AL_CEP.filter(y=>y!==x).map(y=>y.c)).slice(0,3)));
      return{cat:"Quel cépage ?",q:shuf(x.k.slice()).slice(0,3).join(" · "),opts:o,a:o.indexOf(x.c),ex:x.c+" : "+x.k.join(", ")+"."};}
    const x=qd.next();const o=shuf([x[1]].concat(x[2]));return{cat:"Fiche de dégustation",q:x[0]+" ?",opts:o,a:o.indexOf(x[1]),ex:x[3],two:o.length===2};
  }});
  $("#acMode").onchange=()=>m.reset();m.show();
};
EX.alacc=()=>{const d=makeDeck(AL_ACC);const m=mcPanel("alacc",{controls:'<span class="kicker cnt"></span>',next:()=>{const x=d.next();const ok=AL_PLATS[pick(x[2])];const o=shuf([ok].concat(shuf(x[3].slice()).slice(0,3).map(k=>AL_PLATS[k])));m.f(".cnt").textContent="Vin "+d.pos+" / "+d.total;
  return{cat:"Accord mets et vins",q:x[0]+" ("+x[1]+") : quel plat de la liste proposer ?",opts:o,a:o.indexOf(ok),ex:x[4]+" Autres bons choix : "+x[2].map(k=>AL_PLATS[k]).join(" ; ")+"."};}});m.show();};
EX.aletiq=()=>{
  const panel=$("#x-aletiq"),box=document.createElement("div");box.className="mc";panel.appendChild(box);
  const d=makeDeck(AL_LBL);let good=0,asked=0;
  const APP=["Alsace","Alsace Grand Cru","Crémant d'Alsace"];
  const NIV=["AOP Régionale","AOP Grand Cru","AOP Communale","AOP 1er Cru","AOP Sous-régionale","IGP","Vin de France"];
  const SUB=["Haut-Rhin","Bas-Rhin","Toute l'Alsace (AOP régionale)"];
  const VIN=["Pressurage direct","Rouge classique","Saignée","Méthode traditionnelle","Ancestrale","VDN","Vin naturellement doux","Macération carbonique"];
  const GR=["Riesling","Gewurztraminer","Pinot gris","Muscat","Sylvaner","Pinot blanc","Auxerrois","Chasselas","Pinot noir","Savagnin rose","Chardonnay","Gamay","Syrah","Chenin","Sauvignon","Merlot","Meunier","Aligoté"];
  function cepStep(L){
    const n=L.cep.length,ok=L.cep.join(", "),bad=GR.filter(g=>!L.all.includes(g)),sets=[ok];let g=0;
    while(sets.length<4&&g++<60){const s=L.cep.slice();shuf([...Array(n).keys()]).slice(0,n>1?1+Math.floor(Math.random()*2):1).forEach(i=>{s[i]=pick(bad.filter(b=>!s.includes(b)));});const t=s.join(", ");if(!sets.includes(t))sets.push(t);}
    return{t:n>1?"Citez 4 cépages autorisés (choisir la bonne série)":"Citez le cépage de cette appellation",o:shuf(sets),a:ok,x:"Cépages autorisés : "+L.all.join(", ")+"."};
  }
  function show(){
    const L=d.next();
    const steps=[
      {t:"Nom de l'appellation",o:APP.slice(),a:L.app},
      {t:"Niveau hiérarchique de l'appellation",o:shuf([L.niv].concat(shuf(NIV.filter(x=>x!==L.niv)).slice(0,3))),a:L.niv,x:L.xniv},
      {t:"Sous-région, à défaut le département",o:SUB.slice(),a:L.sub},
      {t:"Vinification pratiquée",o:shuf([L.vin].concat(shuf(VIN.filter(x=>x!==L.vin)).slice(0,3))),a:L.vin},
      cepStep(L)];
    box.innerHTML='<div class="ex-bar"><span class="kicker">Étiquette '+d.pos+' / '+d.total+'</span><span class="score">'+good+' / '+asked+'</span></div>'+
      '<div class="lbl" aria-label="Étiquette">'+L.l.map(x=>'<span class="lbl-l lbl-'+x[1]+'">'+(x[2]?'<span class="lbl-m">effacé</span>':esc(x[0]))+'</span>').join("")+'<span class="lbl-l lbl-foot">75 cl · Mis en bouteille à la propriété</span></div>'+
      '<p class="mini">Région : Alsace (/3). Répondez ligne par ligne, comme sur la feuille d\'examen.</p>'+
      steps.map((s,i)=>'<div class="al-step" data-i="'+i+'"><p class="mini">'+(i+1)+'. '+esc(s.t)+'</p><div class="q-opts'+(s.o.length===3?' three':'')+'">'+s.o.map((t,k)=>'<button type="button" data-k="'+k+'">'+esc(t)+'</button>').join("")+'</div><p class="al-fb" aria-live="polite"></p></div>').join("")+
      '<div class="al-step"><p class="mini">6. '+esc(L.oq)+' (/5)</p><p class="ex-prompt">Rédigez votre réponse sur papier, puis comparez.</p><div><button type="button" class="btn ghost al-show">Voir une réponse modèle</button></div><div class="explain" hidden>'+L.oa+'</div></div>'+
      '<div class="ex-foot"><p class="mini">Seule la question 6 n\'est pas notée ici.</p><button type="button" class="btn al-next">Étiquette suivante</button></div>';
    box.querySelectorAll(".al-step[data-i]").forEach(st=>{const s=steps[+st.dataset.i];st.querySelectorAll("button").forEach(b=>b.onclick=()=>{
      const ok=s.o[+b.dataset.k]===s.a;asked++;if(ok)good++;
      st.querySelectorAll("button").forEach(x=>{x.disabled=true;if(s.o[+x.dataset.k]===s.a)x.classList.add("is-right");});if(!ok)b.classList.add("is-wrong");
      st.querySelector(".al-fb").innerHTML=(ok?'<span class="ok">Juste.</span>':'<span class="ko">Non.</span> Bonne réponse : « '+esc(s.a)+' ».')+(s.x?' '+esc(s.x):'');
      box.querySelector(".score").textContent=good+" / "+asked;});});
    box.querySelector(".al-show").onclick=e=>{e.target.parentElement.nextElementSibling.hidden=false;e.target.hidden=true;};
    box.querySelector(".al-next").onclick=()=>{show();panel.scrollIntoView({block:"start"});};
  }
  show();
};

/* ===== Compteurs du menu et démarrage ===== */
(function(){
  const nVocab=VOCAB.reduce((s,g)=>s+g.items.length,0),nCl=CLASSER.reduce((s,c)=>s+c.items.length,0);
  const C={examen:"20 questions",qcm:QCM.length+" questions",vf:VF.length+" affirmations",chiffres:CHIFFRES.length+" questions",classer:CLASSER.length+" séries · "+nCl+" éléments",intrus:"tiré au hasard",def:nVocab+" termes · 2 sens",ordre:SEQS.length+" séries",aletiq:AL_LBL.length+" étiquettes",alqcm:AL_QCM.length+" questions",alcep:(AL_CEP.length+AL_QUAL.length)+" questions",alacc:AL_ACC.length+" vins"};
  document.querySelectorAll("[data-count]").forEach(el=>{el.textContent=C[el.dataset.count]||"";});
  openEx("nuage");
  route();
})();

