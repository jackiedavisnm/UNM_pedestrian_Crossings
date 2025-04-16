"use strict"; 
function pointToCircle(feature, latlng)

  var fillColor_Var = "";
  if feature.properties["Legal"] = "Illegal" {
    fillColor_Var = "red";
  } 
  else {
    fillColor_Var = "green";
  }

  var geojsonMarkerOptions = {
    radius: 8,
    //fillColor: "#F46B06",
    fillColor: fillColor_Var,
    color: "black",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
  };

function addPopups(feature, layer) {
//this if statemetn used to check whether the feature has a property named "Location"
layer.bindPopup(feature.properties["Traffic Control"]);
}


/* initialize the map. 
setView method: Sets the view of the map (geographical center and zoom) with the given animation options.

setView( <LatLng> center, <Number> zoom?, <zoom/pan options> options? )
*/

var map = L.map('mapId').setView([39.9526,-75.1652], 12);

//replace the code below from the Plain JavaScript from the map style you choose
//at http://leaflet-extras.github.io/leaflet-providers/preview/

var OpenStreetMap_HOT = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>'
});

//change the varialbe "OpenTopoMap" according to the map style you choose
//It is the varialbe between "var" and "= L.titleLayer(..."  in Line 28 in this script
OpenStreetMap_HOT.addTo(map);

//L.geoJSON(bikeThefts, {
//  onEachFeature: addPopups
//}).addTo(map);

var bikesLayerGroup = L.geoJSON(bikeThefts, {
onEachFeature: addPopups,
pointToLayer: pointToCircle,
});

map.addLayer(bikesLayerGroup);