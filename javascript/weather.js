var key = "072f5adb0394cd03296056d94597ab18";
var samp_url = "https://api.darksky.net/forecast/072f5adb0394cd03296056d94597ab18/37.8267,-122.4233";

/*
 * sample api call
 * https://api.darksky.net/forecast/072f5adb0394cd03296056d94597ab18/37.8267,-122.4233
 */

var getJSON = function(url) {
 return new Promise(function(resolve, reject) {
   var xhr = new XMLHttpRequest();
   xhr.open('get', url, true);
   xhr.responseType = 'json';
   xhr.onload = function() {
     var status = xhr.status;
     if (status == 200) {
       resolve(xhr.response);
     } else {
       reject(status);
     }
   };
   xhr.send();
 });
};

var constructURL = function(position) {
  return "https://api.darksky.net/forecast/" + key + "/" + position.coords.latitude +
  "," + position.coords.longitude;
};

var x = document.getElementById("summary");
function getLocation() {
    if (navigator.geolocation) {
        return navigator.geolocation.getCurrentPosition();
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
}

function getWeather() {
  var url = constructURL(getLocation());
};

getWeather();
