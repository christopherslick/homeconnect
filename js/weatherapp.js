function weatherApp() {
  var location = document.getElementById("location");
  var apiKey = "d1a350db74c2b6b33a8c2e0d8436be88";
  var url = "https://api.forecast.io/forecast/";
  navigator.geolocation.getCurrentPosition(success);
  function success(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
}


  $.ajax({
      url: "https://api.darksky.net/forecast/" + apiKey + latitude + "," + longitude,
      dataType: "jsonp",
      data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
      success: function success (position) {


        $("#temp").html(data.currently.temperature + "° F");
        $("#minutely").html(data.minutely.summary);
      }





});
}
$(function () {
  weatherApp();
});
