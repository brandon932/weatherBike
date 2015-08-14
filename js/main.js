
var weatherData = {};
geo = navigator.geolocation;
$(document).on('ready', function() {
  navigator.geolocation.getCurrentPosition(success, error, options);

  $("#date").val(moment().format('L'));
  denver = new WeatherBike(weatherData);
  denver.getCityData();

  $(".bike-form").on("submit",function(e){
    e.preventDefault();
    denver.renderWeather(weatherData);
    denver.selectClothing(weatherData);
    denver.renderThings(chartData);
  });
});

// TODO: set default location of the person using geolocation in the form
