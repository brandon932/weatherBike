
var WeatherBike = function(data){
  this.data = data;
  this.time = 0;
};
WeatherBike.prototype.renderWeather = function(data){
  $(".bike-data").html("");
  for (var i = 0; i < 3; i++) {
    $(".bike-data").append(moment.unix(weatherData.list[i].dt).format("MM/DD/YYYY h:mm:ss a") +"<br>");
    $(".bike-data").append(data.list[i].weather[0].description+"<br>");
    // $(".bike-data").append("<br>");

    for (var key in data.list[i].main){
      if (key === "temp"||key=== "pressure" || key==="humidity") {
        $(".bike-data").append("the "+key+" is "+data.list[i].main[key]+"<br>");
      }
    }
    $(".bike-data").append("<br>");
  }
};

WeatherBike.prototype.renderThings = function(data){
  $(".things-data").html("");
  for (var i = 0; i < 3; i++) {
    $(".things-data").append("<br>");
    for (var key in data[this.clothing] ) {
      $(".things-data").append(key+":  "+ data[this.clothing][key]+"<br>");
    }
  }
};

WeatherBike.prototype.selectClothing = function(data){
  if (data.list[this.time].main.temp >= 85){
    this.clothing = 'g';
  }
  else if (data.list[this.time].main.temp >= 70) {
    this.clothing = 'f';
  }
  else if (data.list[this.time].main.temp >= 80) {
    this.clothing = 'e';
  }
  else {
    this.clothing = "a";
  }
};
WeatherBike.prototype.getCityData= function(){
  var location = $("#location").val();
  setUrl ="http://api.openweathermap.org/data/2.5/forecast?q="+location+"&units=imperial&appid=34bb7fc0787f2eba85b664ce72ba5455";
  $.ajax({
    url:setUrl,
    //better to set function to set data?
    success: function(data){
      weatherData = data; // <--------- like this
    },
    error: function(data){
      alert("error!");
      console.log(data + "error");
    }
  });
};

var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;
  setUrl =  "http://api.openweathermap.org/data/2.5/forecast?lat="+crd.latitude+"&lon="+crd.longitude+"&units=imperial&appid=34bb7fc0787f2eba85b664ce72ba5455h";
  $.ajax({
    url:setUrl,
    success: function(data){
      $("#location").val(data.city.name);
      weatherData = data;
      denver = new WeatherBike(data);
      denver.renderWeather(data);
      denver.selectClothing(data);
      denver.renderThings(chartData);
      // console.log(weatherData.list[1].dt);
      // console.log(moment.unix(weatherData.list[1].dt).format("MM/DD/YYYY h:mm:ss a"));
    },
    error: function(data){
      alert("error!");
      console.log(data);
    }
  });
}
function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
}
