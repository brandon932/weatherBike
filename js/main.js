$(document).on('ready', function() {
        console.log(chartData);
  // console.log('sanity check!');
  // console.log(testData.list[0].main.temp);
  $(".bike-form").on("submit",function(e){
    e.preventDefault();
    var location = $("#location").val();
    $.ajax({
      url:"http://api.openweathermap.org/data/2.5/forecast?q="+location+"&units=imperial&appid=34bb7fc0787f2eba85b664ce72ba5455",
      success: function(data){
        denver = new Weather(data);
        denver.renderWeather(data);
        // $(".things-data").html(chartData[0].a);
        denver.renderThings(chartData);

      },
      error: function(data){
        alert("error!");
        console.log(data);
      }
    });
  });

});

// TODO: set default location of the person using geolocation in the form
