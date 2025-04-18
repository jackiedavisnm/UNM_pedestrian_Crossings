//below sets the basemap and initial view
var map = L.map('map').setView([35.084196, -106.621010], 16);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

//below adds a variable for the markers
function pointToCircle(feature, latlng) {

  var fillColor_Var = "";
  //defines the "traffic control" variable as the one to set the color
  if (feature.properties["Traffic Control"] === "Stop Sign") {
    fillColor_Var = "Red";
  } else if (feature.properties["Traffic Control"] === "Stoplight") {
    fillColor_Var = "green";
  } else if (feature.properties["Traffic Control"] === "Paint") {
    fillColor_Var = "#FFCC00";
  } else {
    fillColor_Var = "black";
  }
  //sets the other properties of each circle marker
  var geojsonMarkerOptions = {
    radius: 7,
    fillColor: fillColor_Var,
    color: "black",
    weight: 1,
    opacity: 1,
    fillOpacity: 1
  };
  //defines the variable circlemarker as the layer using the latlong of the geoJSON and the options defined above
  var circleMarker = L.circleMarker(latlng, geojsonMarkerOptions);

  return circleMarker;
}

//adds the circle markers to the map
L.geoJSON(Crossings, {
  pointToLayer: pointToCircle
}).addTo(map);