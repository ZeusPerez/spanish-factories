import React from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiemV1c3BlcmV6IiwiYSI6ImNrOGEwNzBsNTBieG0zbHFtMnIxc251amcifQ.zMmbXZH1mFhktd2ZHdka-g';

class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        lng: 	-3.703790,
        lat: 40.416775,
        zoom: 5.2
    };
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/dark-v9',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    });
  }

  render() {
    return (
      <div>
        <div ref={el => this.mapContainer = el} className="mapContainer" />
      </div>
    )
  }
}

ReactDOM.render(<Application />, document.getElementById('app'));
