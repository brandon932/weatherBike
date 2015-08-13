var Weather = function(data){
  this.data = data;
};
Weather.prototype.renderWeather = function(data){
  $(".bike-data").html("");
  for (var key in data.list[0].main){
    $(".bike-data").append("the "+key+" is "+data.list[0].main[key]+"<br>");
  }
};

var clothing = "a";
Weather.prototype.renderThings = function(data){

    $(".things-data").html("");
  for (var key in data.a ) {
    $(".things-data").append(data.a[key]+"<br>");
  }
};
