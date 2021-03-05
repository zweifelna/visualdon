const fs = require('fs');
const d3 = require('d3');

const data = require('./solaire.json')

const cantonDeVaud = d => d.Canton === "Vaud" && d.Scenario1_RoofsOnly_PotentialSolarElectricity_GWh > 65;

const resultat = data.filter(cantonDeVaud)
    .map(d => ({ score: d.Scenario1_RoofsOnly_PotentialSolarElectricity_GWh, nom: d.MunicipalityName}))
    .sort((a, b) => a.score > b.score ? -1 : 1);
    
console.log(JSON.stringify(resultat));

