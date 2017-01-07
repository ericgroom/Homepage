var key = "cfa256a72d1dd578a40187c220292d26";
var zip = 95662;

var constructURL = function(zipcode) {
  return "http://api.openweathermap.org/data/2.5/weather?zip=" + zipcode + ",us" + "&APPID="
  + key;
};

function testJqueryGetJSON(url) {
  $.getJSON(url).done(function(result){
        if (result.length == 0){
            alert("nothing") ;
        }
        if (result.length){
            alert("success") ;
        }
    }).fail( function(d, textStatus, error) {
        console.error("getJSON failed, status: " + textStatus + ", error: "+error)
    });
};

function capitalize(str) {
  var first = str.charAt(0);
  first = first.toUpperCase();
  return first + str.slice(1);
}

function getWeather(zipcode) {
  var url = constructURL(zipcode);
  console.log(url);
  $.getJSON(url, function(data) {
    var summary = data.weather[0].description;
    summary = capitalize(summary);
    console.log(summary);
    $("#summary").text(summary);
  });
}

$(getWeather(zip));
