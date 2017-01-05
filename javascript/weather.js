var key = "cfa256a72d1dd578a40187c220292d26";
/*
 * sample api call
 * api.openweathermap.org/data/2.5/weather?lat=35&lon=139
 */

var constructURL = function(position) {
  return "api.openweathermap.org/data/2.5/weather?lat=" + position.coords.latitude +
   "&lon" + position.coords.longitude;
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
  // $.getJSON(url, function(data) {
  //   alert(data.currently.summary);
  // })
  testJqueryGetJSON(url);
};

function testJqueryGetJSON(url) {
  $.getJSON(url, function(result){
        if (result.length == 0){
            alert("nothing") ;
        }
        if (result.length){
            alert("success") ;
        }
    }).fail(function( jqxhr, textStatus, error ) {
       var err = textStatus + ", " + error;
       console.log( "Request Failed: " + err )
    });
}

getLocation(getWeather);

/*
 * ran into issues using dark skies, will have to rethink method of getting location
 * it doesn't feel right to ask for it, especially with VPN fucking things up. will
 * probably just input zip-code, store it as a cookie, and allow the user to change it. 
 */
