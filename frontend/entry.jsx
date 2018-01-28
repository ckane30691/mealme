import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", function() {
  const store = configureStore();
  console.log(store.getState());
  var loadMapScript = document.createElement('script');
  loadMapScript.onload = function() {
    alert("about to load the map");
  };

  window.initMap = function initMap() {
    var uluru = {lat: 37.770691, lng: -122.407650};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  };

  const apiKey = require("./envVariables.js");
  loadMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
  document.getElementsByTagName("head")[0].appendChild(loadMapScript);
});
