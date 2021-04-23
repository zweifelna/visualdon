import L from 'leaflet'
import museum from './museum2.json'

const map = L.map('map').setView([46.4593512, 6.8429575], 17)

const points_museum = museum.features.filter(d => d.geometry.type === "Point");

L.tileLayer(
  'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png',
  {
    attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
    subdomains: 'abcd',
    minZoom: 0,
    maxZoom: 20,
    ext: 'png',
  })
    .addTo(map)

const icon = L.icon({
  iconUrl: 'https://icon-library.com/images/museum-icon-png/museum-icon-png-0.jpg',
  iconSize: [30, 30],
  iconAnchor: [15, 30],
})

// museum.map(d => {
//   const [lon, lat] = d
//   L.marker([lat, lon], { icon }).addTo(map)
// })

L.geoJSON(
  points_museum,
  {
    pointToLayer: (feature, latlng) => L.marker(latlng, { icon }),
    onEachFeature: (feature, layer) =>
      layer.bindPopup(feature.properties.name || feature.properties['addr:street'] || feature.properties.uid)
      
  },
).addTo(map)