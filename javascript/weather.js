var key = "072f5adb0394cd03296056d94597ab18";
var samp_url = "https://api.darksky.net/forecast/072f5adb0394cd03296056d94597ab18/37.8267,-122.4233";
var query_url = "";
/*
 * sample api call
 * https://api.darksky.net/forecast/072f5adb0394cd03296056d94597ab18/37.8267,-122.4233
 */

var constructURL = function(position) {
  return "https://api.darksky.net/forecast/" + key + "/" + position.coords.latitude +
  "," + position.coords.longitude;
};

var x = document.getElementById("summary");
function getLocation(callback) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(callback);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
}

function getWeather(position) {
  var url = constructURL(position);
  $.getJSON(url, function(data) {
    alert(data)
  })
};

getLocation(getWeather);
