import {
  axisLeft,
  select,
  scaleLinear,
  max,
} from 'd3'

const DATA = [
    {
        "score": 326.86,
        "nom": "Lausanne"
    },
    {
        "score": 125.72,
        "nom": "Yverdon-les-Bains"
    },
    {
        "score": 79.59,
        "nom": "Ollon"
    },
    {
        "score": 79.54,
        "nom": "Ecublens (VD)"
    },
    {
        "score": 75.73,
        "nom": "Montreux"
    },
    {
        "score": 74.89,
        "nom": "Payerne"
    },
    {
        "score": 72.88,
        "nom": "Aigle"
    },
    {
        "score": 67.97,
        "nom": "Nyon"
    }
]


const WIDTH = 1000
const HEIGHT = 500
const MARGIN = 5
const MARGIN_LEFT = 50
const MARGIN_BOTTOM = 50
const BAR_WIDTH = (WIDTH - MARGIN_LEFT) / DATA.length

const svg = select('body')
  .append('svg')
  .attr('viewBox', `0 0 ${WIDTH} ${HEIGHT}`)

const yScale = scaleLinear()
  .domain([0, max(DATA, d => d.score)])
  .range([HEIGHT - MARGIN_BOTTOM, 0])


const g = svg.append('g')
  .attr('transform', `translate(${MARGIN_LEFT}, 0)`)

g.selectAll('rect')
  .data(DATA)
  .enter()
  .append('rect')
  .attr('x', (d, i) =>  i * BAR_WIDTH)
  .attr('width', BAR_WIDTH - MARGIN)
  .attr('y', d => yScale(d.score))
  .attr('height', d => HEIGHT - MARGIN_BOTTOM - yScale(d.score))
  .attr('fill', 'steelblue')

g.selectAll('text')
  .data(DATA)
  .enter()
  .append('text')
  .text(d => d.nom)
  .attr('x', (d, i) =>  i * BAR_WIDTH + BAR_WIDTH / 2)
  .attr('y', HEIGHT - MARGIN_BOTTOM / 2)
  .attr('text-anchor', 'middle')

const axisY = axisLeft().scale(yScale)
  .ticks(5)

svg.append('g')
  .attr('transform', `translate(${MARGIN_LEFT - 3})`)
  .call(axisY)
