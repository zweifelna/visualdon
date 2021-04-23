# # télécharger les données
# curl "https://api.openstreetmap.org/api/0.6/map?bbox=6.645,46.779,6.65,46.783" > heig.osm

# convertir en json
osmtogeojson map.osm > map.json

# extraires les bars
node bars > ../src/bars.json

# extraires les bâtiments
node batiments > ../src/batiments.json

# extraires les routes
node routes > ../src/routes.json