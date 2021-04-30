# Exercice 3

1. ## Pourquoi doit-on projeter des données cartographiques ?

   A cause de la surface de la terre qui n'est pas plate, il est important de pouvoir afficher toute son étendue en contrôlant les déformations.

2. ## Qu'est ce qu'Open street map ?

   Open street map est un projet open source pour rassembler en ligne une énorme base de données géographique sur terre. Tout le monde peut participer et y ajouter des éléments.

3. ## Quelles fonctions D3 sont spécifiques à la cartographie ?

   - geoPath()
   - geoTransform()
   - geoMercator()

4. ## À quoi sert le format topojson? En quoi est-il différent du geojson ?

   Le format topojson est une extension du geojson. Il est beaucoup plus optimisé que ce dernier, et donc plus léger pour la même quantité d'informations.

5. ## À quoi sert `turf`? Décrivez ce que font trois fonctions de cette libraire

   Turf est une librairie js pour l'analyse geographique. Il permet notamment de définir une zone dans laquelle on veut récupérer des données (mais pas que !).

   ### Exemples de fonctions :

   - area() -> Pour définir la zone dans laquelle ont veut un résultat
   - cercle() -> Prend un point et calcule un polygone (en cercle) autour de lui
   - union() -> Prend deux polygones et retourne une combinaison de ces deux derniers