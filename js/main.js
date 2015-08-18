
geo = navigator.geolocation;
$(document).on('ready', function() {
  geo.getCurrentPosition(success, error, options);

  $("#date").val(moment().format('L'));
  // $("#time").val(moment().format("h:mm a"));

  $(".bike-form").on("submit",function(e){
    e.preventDefault();
    getData();


  });


  });

  // TODO:fix bug that prevents weather to be loaded untill seccond click
