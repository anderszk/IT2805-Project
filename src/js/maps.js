f
/**
 * Google Maps API from https://developers.google.com/maps
 * 
 * Sets the coordinates, creates an instance of the map and places
 * the marker on the map.
 */
function initMap() {
  // The location of Uluru
  const uluru = { lat: 63.4179288, lng: 10.4030913 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

window.initMap = initMap;
