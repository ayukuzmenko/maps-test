import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.css';
import { pointsSelector } from '../../selectors';

class Map extends Component {
  state = {
    map: null,
  };

  initMap = () => {
    const map = new window.ymaps.Map(
      'map',
      {
        center: [55.76, 37.64], // Москва
        zoom: 10,
      },
      {
        searchControlProvider: 'yandex#search',
      },
    );

    this.map = map;
  };

  render() {
    return <div id="map" className="containerMap " />;
  }

  componentDidMount() {
    window.ymaps.ready(this.initMap);
  }

  componentDidUpdate() {
    this.map.geoObjects.removeAll();
    this.addPoint();
    this.addPolyLine();
  }

  addPoint() {
    const { points } = this.props;

    points.forEach(point => {
      const mark = new window.ymaps.Placemark(
        point.coords,
        {
          iconCaption: point.adress,
        },
        {
          draggable: true,
          preset: 'islands#darkBlueDotIconWithCaptio',
          iconCaptionMaxWidth: '150',
        },
      );
      this.map.geoObjects.add(mark);
    });
  }

  addPolyLine() {
    const { points } = this.props;

    const linePoints = points.map(point => point.coords);

    const polyline = new window.ymaps.Polyline(
      linePoints,
      {
        balloonContent: 'Маршрут',
      },
      {
        balloonCloseButton: false,
        strokeColor: '#000000',
        strokeWidth: 3,
        strokeOpacity: 0.5,
      },
    );

    this.map.geoObjects.add(polyline);
  }
}

const mapStateProps = state => {
  return {
    points: pointsSelector(state),
  };
};
export default connect(mapStateProps)(Map);
