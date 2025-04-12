// Map
var map = L.map('map').setView([41.3275, 19.8189], 12); // Coordinates of Tirana, Albania

// OpenStreetMap Tile Layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Marker
L.marker([41.3275, 19.8189]).addTo(map)
    .bindPopup('Tirana, Albania')
    .openPopup();
