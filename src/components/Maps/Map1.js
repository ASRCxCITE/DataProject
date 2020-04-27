import React from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';
import './map.css';

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
        description: 'Albany NY'
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
        description: 'Washington , DC'
      }
    }]
  };
export class Map1 extends React.Component
{
    
    constructor(props)
    {
      super(props);
      this.state = {
        lng: -77.0930,
        lat: 43.3802,
        zoom: 5.97,
        clicked: false
      };
    }
         
        componentDidMount() {
        const map = new mapboxgl.Map({
        container: this.mapContainer,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [this.state.lng, this.state.lat],
        zoom: this.state.zoom
        });
         
        map.on('move', () => {
        this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
        });
        });
        map.addControl(new mapboxgl.FullscreenControl());

        // add markers to map
        geojson.features.forEach(function(marker) {

            // create a HTML element for each feature
            var el = document.createElement('div');
            el.className = 'marker';

            new mapboxgl.Marker(el)
  .setLngLat(marker.geometry.coordinates)
  .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
    .setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p>'))
  .addTo(map);
    
});
  
}
         
        render() {
        return (
        <div>
        <div> Current Longitude: {this.state.lng}  </div>
        <div> Current Latitude: {this.state.lat}  </div>
        <div className='sidebarStyle'>
        <div>Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom: {this.state.zoom}</div>
        </div>
        <div ref={el => this.mapContainer = el} className='mapContainer' />
        <img className="xictePhoto" src='https://bit.ly/2VOxPZk'


         />
        </div>
        )
        }
        }





// ReactDOM.render(<div>
//     <Application />
//     </div>, document.getElementById('root'));

export default Map1;