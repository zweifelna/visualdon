import {
  select,
  arc,
  pie
} from 'd3'

const DATA = [
  { nom: 'Lausanne', population: 138905 },
  { nom: 'Yverdon-les-Bains', population: 30143 },
  { nom: 'Montreux', population: 26574 },
  { nom: 'Renens', population: 21036 },
  { nom: 'Nyon', population: 20533 },
  { nom: 'Vevey', population: 19827 },
]

let getPieData = pie().value(d => d.population);
let pieData = getPieData(DATA);


const WIDTH = 500
const HEIGHT = 500

const svg = select('body')
  .append('svg')
  .attr('viewBox', `0 0 ${WIDTH} ${HEIGHT}`)

  const arcCreator = arc()
  .innerRadius(0)
  .outerRadius(HEIGHT / 2 - 10) // pour que tout le camembert soit visible

const color = ({ data }) => {
  switch (data.nom) {
    case 'Lausanne': return 'gold'
    case 'Yverdon-les-Bains': return 'limegreen'
    case 'Montreux': return 'violet'
    case 'Renens': return 'indianred'
    case 'Nyon': return 'pink'
    case 'Vevey': return 'indigo'
    default: return 'black'
  }
}

const group = svg.append('g')
  .attr('transform', `translate(${HEIGHT / 2}, ${HEIGHT / 2})`)

group.selectAll('path')
  .data(pieData)
  .enter()
  .append('path')
  .attr('d', arcCreator)
  .attr('fill', color)

// un texte pour chaque tranche
group.selectAll('text')
  .data(pieData)
  .enter()
  .append('text')
  // .centroid permet de trouver le centre de la tranche
  .attr('transform', d => `translate(${arcCreator.centroid(d)})`)
  .attr('text-anchor', 'middle')
  .text(d => d.data.nom)

// la légende
const legend = svg.append('g')
  .attr('transform', `translate(${HEIGHT-10})`)

const RECT_WIDTH = 20

// les carrés de couleur3.line()
legend.selectAll('rect')
  .data(pieData)
  .enter()
  .append('rect')
  .attr('y', (d, i) => i * RECT_WIDTH)
  .attr('width', RECT_WIDTH)
  .attr('height', RECT_WIDTH)
  .attr('fill', color)

// les noms de villes
legend.selectAll('text')
  .data(pieData)
  .enter()
  .append('text')
  .attr('x', RECT_WIDTH * 1.5)
  .attr('y', (d, i) => i * RECT_WIDTH + RECT_WIDTH * 0.75)
  .attr('width', RECT_WIDTH)
  .attr('height', RECT_WIDTH)
  .text(d => d.data.nom)
