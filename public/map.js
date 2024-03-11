var map = L.map('map').setView([20.593684, 78.96288],5);
const googleStreets = L.tileLayer('http://{s}.google.com/vt?lyrs=m&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
});

googleStreets.addTo(map)

var marker = L.marker([25.0961, 85.3131]).addTo(map);

marker.bindPopup("<b>Hello world!</b><br>I am a popup.")
