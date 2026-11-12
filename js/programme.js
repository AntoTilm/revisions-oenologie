/* ===== Programme de l'année : les régions et les échéances =====
   REGIONS : une entrée par région du programme, dans l'ordre des cours.
     m = module (1 ou 2) · carte = régions de la carte réunies sur la page (le Beaujolais avec la Bourgogne,
     la Corse avec la Provence) · sous = précision sous le titre · fiche = libellé de la fiche à remettre
     · ex = exercices au format de l'examen (clé de l'exercice dans S'entraîner : qcm, etiq, degust, acc).
   AGENDA : une ligne par échéance, date AAAA-MM-JJ. Ajouter chaque QCM dès que sa date est connue.
     r = région concernée · m = module · h = lien · exam = examen du module. */
window.REGIONS=[
 {id:"alsace",n:"Alsace",m:1,carte:["alsace"],ex:{qcm:"alqcm",etiq:"aletiq",degust:"alcep",acc:"alacc"}},
 {id:"bourgogne",n:"Bourgogne",m:1,carte:["bourgogne","beaujolais"],sous:"et Beaujolais"},
 {id:"rhone",n:"Vallée du Rhône",m:1,carte:["rhone"]},
 {id:"provence",n:"Provence et Corse",m:1,carte:["provence","corse"],fiche:"Provence ou Corse"},
 {id:"languedoc",n:"Languedoc-Roussillon",m:1,carte:["languedoc"]},
 {id:"sudouest",n:"Sud-Ouest",m:2,carte:["sudouest"]},
 {id:"bordeaux",n:"Bordeaux",m:2,carte:["bordeaux"]},
 {id:"savoie",n:"Savoie",m:2,carte:["savoie"],sous:"et Bugey"},
 {id:"jura",n:"Jura",m:2,carte:["jura"]},
 {id:"loire",n:"Vallée de la Loire",m:2,carte:["loire"]},
 {id:"champagne",n:"Champagne",m:2,carte:["champagne"]}
];

window.AGENDA=[
 {d:"2026-11-16",t:"QCM Alsace",r:"alsace",h:"#x-alqcm"},
 {d:"2027-02-15",t:"Examen du module France 1",m:1,h:"#ac-epreuves",exam:1},
 {d:"2027-03-08",t:"France 1 · seconde session, 16 h",m:1},
 {d:"2027-06-14",t:"Examen du module France 2",m:2,h:"#ac-epreuves",exam:1},
 {d:"2027-08-31",t:"France 2 · seconde session, 16 h",m:2}
];
