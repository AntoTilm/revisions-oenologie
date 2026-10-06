# Carnet d'œnologie · CEFOR Namur

Site de révision des cours d'œnologie du CEFOR : l'initiation (réussie, septembre–octobre 2026) et les modules vins de France 2026–2027.

## Utilisation

Ouvrir `index.html` dans un navigateur — aucun serveur ni build nécessaire.
Les polices sont chargées depuis Google Fonts (connexion Internet requise pour l'affichage exact).

## Organisation

Quatre parties, une seule barre de navigation, et une recherche globale en haut de page :

- **Cours** : programme de l'année, synthèse de l'année, une fiche par cours (l'essentiel en tête, le détail repliable), puis l'initiation archivée.
- **Dégustation** : méthode, fiche de dégustation de l'année, vocabulaire, cépages, accords mets-vins, vins dégustés.
- **Vignobles** : carte des régions, fiche de chaque région avec ses sous-régions détaillées, quiz, tableau.
- **S'entraîner** : les exercices.

## Ajouter du contenu

- **Un cours de l'année** : compléter son entrée dans `window.YEAR.courses` (script « L'année 2026–2027 ») : `ess` (l'essentiel), `det` (blocs repliables), `acc` (accords).
- **Une sous-région** : `window.VMX` (script « Vignobles : sous-régions détaillées »).
- **Un vin dégusté** : un `<article class="wine dg">` dans la section `#degustations` ; attribut optionnel `data-photo="photos/xxx.jpg"` pour une photo de la bouteille.
- `slides/` : captures des diapositives (`cX-NN.jpg` = cours X, diapo NN).
