const myMap = L.map('map').setView([22.9074872, 79.07306671], 5);
const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const attribution ='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>';
const tileLayer = L.tileLayer(tileUrl, { attribution });
tileLayer.addTo(myMap);

function Popup(Dam) {
    return `
      <div>
          <h4>${Dam.properties.name}</h4>
          <p>${Dam.properties.address}</p> 
          </div>
      </div>
    `;
  }
  
function Feature(feature, layer) {
    layer.bindPopup(Popup(feature));
}

// let myIcon = L.icon({
//     iconUrl: 'png.png',
//     iconSize: [30, 40]
// });


const Layer = L.geoJSON(Dam, {
    onEachFeature: Feature,
    pointToLayer: function(feature, latlng) {
        return L.marker(latlng);   //,{ icon: myIcon }
    }
});
Layer.addTo(myMap);
