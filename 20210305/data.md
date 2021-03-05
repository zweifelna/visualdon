# Exercice 3

## Marche à suivre pour formater des données

1. Créer le document preparer.js, qui triera les données voulues depuis un fichier

2. Télécharger le fichier contenant les données complètes et lier dans sur preparer.js

3. Déterminer dans une variable les valeurs que l'on souhaite récupérer (sous forme de conditions)

   ```
   const cantonDeVaud = d => d.Canton === "Vaud" && d.Scenario1_RoofsOnly_PotentialSolarElectricity_GWh > 65;
   ```

4. Filtrer dans les données à l'aide de la variable de conditions.

   ```js
   const resultat = data.filter(cantonDeVaud)
       .map(d => ({ score: d.Scenario1_RoofsOnly_PotentialSolarElectricity_GWh, nom: d.MunicipalityName}))
       .sort((a, b) => a.score > b.score ? -1 : 1);
   ```

5. Faire un console.log le résultat en le convertissant en string

   ```js
   console.log(JSON.stringify(resultat));
   ```

6. Ecrire ce résultat dans un fichier json externe

   ```powershell
   node preparer > data.json
   ```

   

