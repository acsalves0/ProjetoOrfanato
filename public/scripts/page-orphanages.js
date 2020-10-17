// Tipos de objetos
// String ""
// Number 01
// Objeto {}
// Boolean true or false
// Array []

// const { orphanages } = require("../../src/pages")

// create map
const map = L.map('mapid').setView([-20.1249637,-40.3033028], 15) //Latitude, logitude, zoom do mapa

// create and add titleLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',).addTo(map)

// create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29,68],
    popupAnchor: [170,2]
})

function addMarker({id, name, lat, lng}){

    // create popup overlay
    const popup = L.popup({
        closeButton: false,
        className: 'map-popup',
        minWidth:240,
        minHeight:240
    }).setContent(`${name} <a href="/orphanage?id=${id}"><img src="/images/arrow-white.svg" </a>`)


    // create and add marker
    L
    .marker([lat,lng], {icon})
    .addTo(map)
    .bindPopup(popup)
    
}

const orphanagesSpan = document.querySelectorAll('.orphanages span')

orphanagesSpan.forEach(span => {
    const orphanage = {
        id: span.dataset.id,
        name: span.dataset.name,
        lat: span.dataset.lat,
        lng: span.dataset.lng
    }
    addMarker(orphanage)
})