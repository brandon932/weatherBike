
var weatherData = {};
var clothing = '';
function days(){
  if (selectDay()[0] === undefined){
    // console.log("should print three");
    return 3;
  }else{
    // console.log("need three ");
    return selectDay().length + selectDay()[0];
  }
}
var WeatherBike = function(data){
  this.data = data;
  this.time = 0;
};
WeatherBike.prototype.renderWeather = function(data){
  $(".bike-data").html("");
  for (var i = selectDay()[0]; i < days() ; i++) {
    $(".bike-data").append(moment.unix(weatherData.list[i].dt).format("MM/DD/YYYY h:mm:ss a") +"<br>");
    $(".bike-data").append(data.list[i].weather[0].description+"<br>");

    for (var key in data.list[i].main){
      if (key === "temp"||key=== "pressure" || key==="humidity") {
        $(".bike-data").append("the "+key+" is "+data.list[i].main[key]+"<br>");
      }
    }
    $(".bike-data").append("<br>");
  }
};

WeatherBike.prototype.renderThings = function(){
  for (var key in chartData[this.clothing] ) {
    $(".things-data").append(key+":  "+ chartData[this.clothing][key]+"<br>");
  }
  $(".things-data").append("<br>");
};

WeatherBike.prototype.selectClothing = function(data){
  $(".things-data").html("");

  var thingtorender;

  for (var i = selectDay()[0]; i < days(); i++) {

    if (data.list[i].main.temp >= 76){
      this.clothing = 'g';
      this.renderThings();
    }
    else if (data.list[i].main.temp >= 61) {
      this.clothing = 'f';
      this.renderThings();
    }
    else if (data.list[i].main.temp >= 46) {
      this.clothing = 'e';
      this.renderThings();
    }
    else if (data.list[i].main.temp >= 33 ) {
      this.clothing = 'e';
      this.renderThings();
    }
    else if (data.list[i].main.temp >= 33) {
      this.clothing = 'e';
      this.renderThings();
    }
    else {
      this.clothing = "a";
      this.renderThings();
    }
  }
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
      var curentCity = data.city.name;
      $("#location").val(curentCity);
      weatherData = data;
      curentCity= new WeatherBike(data);
      curentCity.renderWeather(data);
      curentCity.selectClothing(data);
      // console.log("got data");

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
function getData(){
  var location = $("#location").val();
  setUrl ="http://api.openweathermap.org/data/2.5/forecast?q="+location+"&units=imperial&appid=34bb7fc0787f2eba85b664ce72ba5455";
  $.ajax({
    url:setUrl,
    //better to set function to set data?
    success: function(data){
      weatherData = data; // <--------- like this
      selectedCity= new WeatherBike(data);
      selectedCity.renderWeather(data);
      selectedCity.selectClothing(data);
      // selectDay();
    },
    error: function(data){
      alert("error!");
      console.log(data + "error");
    }
  });
}
function selectDay(){
  var dateArr = [];
  var date = $("#date").val() ;
  for (var i = 0; i < weatherData.list.length; i++) {
    if (moment.unix(weatherData.list[i].dt).format("L") === date) {
      dateArr.push(weatherData.list.indexOf(weatherData.list[i]));
    }
  }
  if (dateArr[0] === undefined){
    // console.log("0");
    return 0;
  }else{
    // console.log("date arr");
    return dateArr;
  }
}
