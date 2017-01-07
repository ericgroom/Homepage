var key = "cfa256a72d1dd578a40187c220292d26";
var zip = 95662;
var weather = {};

var constructURL = function(zipcode) {
  return "http://api.openweathermap.org/data/2.5/weather?zip=" + zipcode + ",us" + "&APPID="
  + key + "&units=imperial";
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
};

function pullWeather(zipcode) {
  var url = constructURL(zipcode);
  console.log(url);
  $.getJSON(url, function(data) {
    weather.summary = data.weather[0].description;
    weather.summary = capitalize(weather.summary);
    console.log("summary: " + weather.summary);

    weather.temperature = data.main.temp;
    console.log("temperature: " + weather.temperature);
    displayWeather();
    storeWeather();
  });
};

function displayWeather() {
  $("#summary").text(weather.summary + ' | ' + Math.round(weather.temperature) + "°F");
};

function storeWeather() {
  var inTenMinutes = new Date(new Date().getTime() + 10 * 60 * 1000);
  Cookies.set('weather', weather, {
    expires: inTenMinutes
  });
};

function getWeather() {
  if (Cookies.get('weather') != undefined) {
    console.log("From cookie");
    weather = Cookies.getJSON('weather');
    console.log("summary: " + weather.summary);
    console.log("temperature: " + weather.temperature);
    displayWeather();
  } else {
    console.log("From api");
    pullWeather(zip);
  }
};

$(getWeather(zip));

$('#summary').click(function() {
  $('#summary').text('Refreshing...');
  Cookies.remove('weather');
  getWeather();
})
