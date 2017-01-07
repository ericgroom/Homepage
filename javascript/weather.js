var key = "cfa256a72d1dd578a40187c220292d26";
/*
 * sample api call
 * api.openweathermap.org/data/2.5/weather?lat=35&lon=139
 */

var constructURL = function(zip-code) {
  return "api.openweathermap.org/data/2.5/weather?zip=" + zip-code + "&APPID=" + key;
};

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
};

alert(constructURL(95662));
