# Carnet d'œnologie · CEFOR Namur

Site de révision des cours d'œnologie du CEFOR : les modules vins de France 2026–2027, et l'initiation (réussie, septembre–octobre 2026) en archive.

## Utilisation

Ouvrir `index.html` dans un navigateur — aucun serveur ni build nécessaire (les scripts sont de simples fichiers chargés dans l'ordre).
Les polices sont chargées depuis Google Fonts (connexion Internet requise pour l'affichage exact).

## Organisation

Quatre parties, une seule barre de navigation, et une recherche globale en haut de page :

- **Accueil** : tableau de bord. Prochaine échéance, les deux conditions pour valider le module (QCM réussis, fiches remises, à cocher), les épreuves de l'examen, les régions du module.
- **Régions** : la liste des régions du programme, puis une page par région (`#r-alsace`…) : l'essentiel, les cours (chaque cours garde son adresse `#f-<cours>`), les sous-régions, les vins goûtés, les accords, les exercices. Puis les clés de l'étiquette (niveaux d'appellation, vinifications), la carte et le tableau.
- **Dégustation** : fiche express de l'examen, méthode, fiche de l'année, vocabulaire, cépages, accords mets-vins et listes de plats, vins dégustés (l'année d'abord).
- **S'entraîner** : les exercices rangés par épreuve (QCM, étiquettes, dégustation, accords), le vocabulaire de la fiche, puis les exercices de l'initiation.
- L'**initiation** est archivée dans sa propre partie (`#initiation`), reliée depuis l'accueil.

## Les fichiers

| Fichier | Contenu |
| --- | --- |
| `index.html` | La structure des pages et le contenu fixe (initiation, dégustation, vins dégustés, clés de l'étiquette). |
| `css/site.css` | Tous les styles. |
| `js/annee.js` | `window.YEAR` : modules, cours de l'année, synthèse, listes de plats de l'examen. |
| `js/sous-regions.js` | `window.VMX` : les sous-régions détaillées. |
| `js/carte.js` | La carte et ses fiches (`VM`, aussi exposé en `window.VM`). |
| `js/programme.js` | `window.REGIONS` (ordre des régions, exercices disponibles) et `window.AGENDA` (échéances). |
| `js/app.js` | Navigation, recherche, exercices et leurs données. |
| `js/regions.js` | La liste des régions et les pages régions, construites à partir des données ci-dessus. |
| `js/accueil.js` | Le tableau de bord. |
| `js/demarrage.js` | Le premier affichage, une fois tout construit. |

## Ajouter du contenu

- **Un cours de l'année** : compléter son entrée dans `YEAR.courses` (`js/annee.js`) : `ess` (l'essentiel), `det` (blocs repliables), `acc` (accords). Il apparaît tout seul sur la page de sa région.
- **Une échéance** (date d'un QCM…) : une ligne dans `AGENDA` (`js/programme.js`), date au format `AAAA-MM-JJ`.
- **Des exercices au format de l'examen pour une région** : les données et l'exercice dans `js/app.js` (modèle : Alsace, `AL_*` et `EX.al…`), une carte dans le menu de S'entraîner (`index.html`), puis la clé dans `ex` de la région (`js/programme.js`).
- **Une sous-région** : `window.VMX` (`js/sous-regions.js`).
- **Un vin dégusté** : un `<article class="wine dg">` dans la section `#degustations`, dans un bloc marqué `data-r="<région>"` pour qu'il apparaisse aussi sur la page de la région ; attribut optionnel `data-photo="photos/xxx.jpg"` pour une photo de la bouteille.
- `slides/` : captures des diapositives (`cX-NN.jpg` = cours X, diapo NN).
