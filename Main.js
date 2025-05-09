var map = L.map('map').setView([35.084196, -106.621010], 16);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

function pointToCircle(feature, latlng) {
    var fillColor_Var = "";
    if (feature.properties["Traffic Control"] === "Stop Sign") {
        fillColor_Var = "Red";
    } else if (feature.properties["Traffic Control"] === "Stoplight") {
        fillColor_Var = "green";
    } else if (feature.properties["Traffic Control"] === "Paint") {
        fillColor_Var = "#FFCC00";
    } else {
        fillColor_Var = "black";
    }
    var geojsonMarkerOptions = {
        radius: 7,
        fillColor: fillColor_Var,
        color: "black",
        weight: 1,
        opacity: 1,
        fillOpacity: 1
    };
    var circleMarker = L.circleMarker(latlng, geojsonMarkerOptions);
    return circleMarker;
}

function addPopups(feature, layer) {
    layer.bindPopup("<b>Crossing at " + feature.properties["EW Road/Landmark"] + " and " + feature.properties["NS Road/Landmark"] +
        "<br>Traffic Control: " + feature.properties["Traffic Control"] +
        "<br>Speed Limit: " + feature.properties["Road Speed Limit"] + "<br>Number of Lanes Crossed: " + feature.properties["Number of Lanes Crossed"]
    );
}

L.geoJSON(Crossings, {
    onEachFeature: addPopups,
    pointToLayer: pointToCircle
}).addTo(map);
