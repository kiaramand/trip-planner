const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker")

mapboxgl.accessToken = "pk.eyJ1Ijoia3ByeXprIiwiYSI6ImNrMTZtMGUxYjE3NXUzbXRrOHRpeWYwZDEifQ.Fiyaf167G3pu3XbehQbvjw";
const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates. Chicago: [-87.641, 41.895]
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available
});

// new mapboxgl.Marker(buildMarker('activity')).setLngLat([-74.009, 40.705]).addTo(map);

// new mapboxgl.Marker(buildMarker('hotel')).setLngLat([-74, 40.6]).addTo(map);

const marker = buildMarker('activities', [-74.009, 40.705]);
console.log(marker);
marker.addTo(map);
