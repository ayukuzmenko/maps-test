import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.css';
import { pointsSelector } from '../../selectors';
import { replacePoint } from '../../actions';

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

  handlerDragEnd = event => {
    const mark = event.get('target');
    const { replacePoint } = this.props;
    const coords = mark.geometry.getCoordinates();

    const arrIndex = mark.properties.get('arrIndex');

    replacePoint(arrIndex, coords);
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

    points.forEach((point, index) => {
      const mark = new window.ymaps.Placemark(
        point.coords,
        {
          iconCaption: point.adress,
          arrIndex: index,
        },
        {
          draggable: true,
          preset: 'islands#darkBlueDotIconWithCaptio',
          iconCaptionMaxWidth: '150',
        },
      );
      this.map.geoObjects.add(mark);
      mark.events.add(`dragend`, this.handlerDragEnd);
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
export default connect(
  mapStateProps,
  {
    replacePoint,
  },
)(Map);
