import React, { Component } from 'react';

class Map extends Component {
  state = {
    map: null
  }
  initMap = () => {
    const {ymaps} = this.props;
    const map = new ymaps.Map('map', {
      center: [55.76, 37.64], // Москва
      zoom: 10
      }, {
        searchControlProvider: 'yandex#search'
      });

      this.setState({ map });
  }

  render() {
    const mapHeight = window.innerHeight - 50;
    return (
      <div id="map" style={ { width: '70%', height: mapHeight } }></div>
    );
  }

  componentDidMount() {
    const {ymaps} = this.props;
    ymaps.ready(this.initMap);
  }
}

export default Map;
