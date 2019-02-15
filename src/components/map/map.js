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
    this.addPoint();
  }

  addPoint() {
    const { points } = this.props;

    this.map.geoObjects.removeAll();

    points.forEach(point => {
      const mark = new window.ymaps.Placemark(
        point.coords,
        {
          iconCaption: point.adress,
        },
        {
          preset: 'islands#darkBlueDotIconWithCaptio',
          iconCaptionMaxWidth: '150',
        },
      );
      this.map.geoObjects.add(mark);
    });
  }
}

const mapStateProps = state => {
  return {
    points: pointsSelector(state),
  };
};
export default connect(mapStateProps)(Map);
