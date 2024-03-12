

// frontent code 

const myMap = L.map("map").setView([23.01351290568535, 79.23104594076402], 5);
const tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const attribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>';
const tileLayer = L.tileLayer(tileUrl, { attribution });
tileLayer.addTo(myMap);

function DamPopup(Dam) {
  return `
      <div class="leaflet-popup-content-wrapper dam-popup">
            <h4>${Dam.properties.name}</h4>
            <p>${Dam.properties.address}</p> 
        </div>
    `;
}

function PlantPopup(Plants) {
  return `
    <div class="leaflet-popup-content-wrapper plant-popup">
    <h4>${Plants.properties.name}</h4>
    <p>${Plants.properties.address}</p> 
</div>
    `;
}
// function RiverPopup(River) {
//     return `
//       <div class="leaflet-popup-content-wrapper plant-popup">
//       <h4>${River.properties.name}</h4>
//       <p>${River.properties.address}</p> 
//   </div>
//       `;
//   }

function Feature(feature, layer) {
  layer.bindPopup(DamPopup(feature));
}

function PlantFeature(Plantfeature, layer) {
  layer.bindPopup(PlantPopup(Plantfeature));
}
// function RiverFeature(Riverfeature, layer) {
//     layer.bindPopup(RiverPopup(RiverFeature));
//   }

// let myIcon = L.icon({
//     iconUrl: 'png.png',
//     iconSize: [30, 40]
// });

const Layer = L.geoJSON(Dam, {
  onEachFeature: Feature,
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng); //,{ icon: myIcon }
  },
});
Layer.addTo(myMap);

let myIcon = L.icon({
  iconUrl: "download.jpg",
  iconSize: [30, 40],
});
const PlantLayer = L.geoJSON(Plants, {
  onEachFeature: PlantFeature,
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng, { icon: myIcon }); //,
  },
});
PlantLayer.addTo(myMap);

let myIconA = L.icon({
    iconUrl: "river.jpg",
    iconSize: [30, 40],
  });
// const RiverLayer = L.geoJSON(River, {
//     onEachFeature: RiverFeature,
//     pointToLayer: function (feature, latlng) {
//       return L.marker(latlng, { icon: myIconA }); //,
//     },
//   });
//   RiverLayer.addTo(myMap);
