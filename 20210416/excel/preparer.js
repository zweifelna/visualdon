const xlsx = require('xlsx');

const file = xlsx.readFile('peinaussteiger2018.xlsx');
const json = xlsx.utils.sheet_to_json(file.Sheets['data']);

const cantonDeVaud = d => d.Kanton === "VD" && d.DTV_2018 > 10000;

const resultats = json.filter(cantonDeVaud)
    .map(d => ({nom : d.Bahnhof_Haltestelle, nbVoyageur: d.DTV_2018}))
    .sort((a, b) => a.nbVoyageur > b.nbVoyageur ? -1 : 1);


console.log(JSON.stringify(resultats));