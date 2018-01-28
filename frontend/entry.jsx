import configureStore from './store/store';
import {sendLunchTimeLocation} from './actions/hunger_actions';
import { fetchEaters } from './util/eater_api_util';



document.addEventListener("DOMContentLoaded", function() {

  const preload = fetchEaters().then(res => {
    const store = configureStore({ entities: { hunger: res } });
    var loadMapScript = document.createElement('script');
    loadMapScript.onload = function() {
      // alert("about to load the map");
    };

    const hungryEaters = store.getState().entities.hunger;
    window.initMap = function initMap() {
      var sfBay = {lat: 37.770691, lng: -122.407650};
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: sfBay
      });

      Object.values(hungryEaters).forEach(eater => {
        let uluru = { lat: parseFloat(eater.loc_x), lng: parseFloat(eater.loc_y) };
        console.log(hungryEaters);
        new google.maps.Marker({
          position: uluru,
          map: map
        });
      });
      // var marker = new google.maps.Marker({
      //   position: uluru,
      //   map: map
      // });
    };

    const apiKey = require("./envVariables.js");
    loadMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
    document.getElementsByTagName("head")[0].appendChild(loadMapScript);

  });

  document.getElementById("submit_lunch_location")
          .addEventListener("click", function() {
            let data = document.getElementById("lunch_location_input").value;
            alert(`Meal Event Scheduled at ${data} for 12 noon.`);
            sendLunchTimeLocation(data);
          });



});
