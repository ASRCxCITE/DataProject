var latLong;
mapboxgl.accessToken = 'pk.eyJ1IjoiaWExNDI0IiwiYSI6ImNrNzNudm9sbDAwOXAzbHM2MmQwZ3V6bHIifQ.7IOqo3oij916e_KmDfj7DA';
var geojson = {
  type: 'FeatureCollection',
  features: [{
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-73.8345, 42.6916]
    },
    properties: {
      title: 'Xcite Lab',
      description: 'Albany NY',
      media: [ 'https://bit.ly/2VOxPZk'
      ]
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-77.032, 38.913]
    },
    properties: {
      title: 'Mapbox',
      description: 'Washingto , DC'
    }
  }]
};

defaultLng = -77.0930;
defualtLat = 43.3802;
defaultZoom = 5.5;
/* Create the map */
var map = new mapboxgl.Map({
container: 'map', // container id
style: 'mapbox://styles/mapbox/streets-v11',
center: [defaultLng, defualtLat ], // starting position
zoom: defaultZoom // starting zoom
});
/* add markers to the map */
geojson.features.forEach(function(marker) {

  // create a HTML element for each feature
  var el = document.createElement('div');
  el.className = 'marker';

  // make a marker for each feature and add to the map
  new mapboxgl.Marker(el)
.setLngLat(marker.geometry.coordinates)
.setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
    .setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p>'))
  .addTo(map);
  
 
  
});


/* display long and lat of the map */
map.on('mousemove', function(e) {
  document.getElementById('sidebarStyle').innerHTML =
  // e.lngLat is the longitude, latitude geographical position of the event
  JSON.stringify(e.lngLat.wrap());
  latLong = "De"
  });

  map.on('click', function(e) {
    document.getElementById('sidebarStyle').innerHTML =
    // e.lngLat is the longitude, latitude geographical position of the event
    JSON.stringify(e.lngLat.wrap());
    
    });
/* make the map resizeable */
map.addControl(new mapboxgl.FullscreenControl());

console.log("Hello");
console.log("Neu");
console.log(latLong);