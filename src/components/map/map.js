import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.css';

class Map extends Component {
  initMap = () => {
    this._map = new window.ymaps.Map(
      'map',
      {
        center: [55.76, 37.64], // Москва
        zoom: 10,
      },
      {
        searchControlProvider: 'yandex#search',
      },
    );
  };

  handlerDragEnd = event => {
    const mark = event.get('target');
    const { replacePoint } = this.props;
    const newCoords = mark.geometry.getCoordinates();
    const arrIndex = mark.properties.get('arrIndex');
    replacePoint({ arrIndex, newCoords });
  };

  render() {
    return <div id="map" className="containerMap " />;
  }

  componentDidMount() {
    window.ymaps.ready(this.initMap);
  }

  componentDidUpdate() {
    this._map.geoObjects.removeAll();
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
      this._map.geoObjects.add(mark);
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

    this._map.geoObjects.add(polyline);
  }
}

const mapStateProps = state => {
  return {
    points: state.points,
  };
};

const mapDispatch = dispatch => ({
  replacePoint: dispatch.points.getNewCoords,
});

export default connect(
  mapStateProps,
  mapDispatch,
)(Map);
