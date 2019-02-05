import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.css';

class Map extends Component {
  state = {
    map: null,
  };

  initMap = () => {
    const { ymaps } = this.props;
    const map = new ymaps.Map(
      'map',
      {
        center: [55.76, 37.64], // Москва
        zoom: 10,
      },
      {
        searchControlProvider: 'yandex#search',
      },
    );

    this.setState({ map });
  };

  render() {
    return <div id="map" className="containerMap " />;
  }

  componentDidMount() {
    const { ymaps } = this.props;
    ymaps.ready(this.initMap);
  }
}

const mapStateProps = state => {
  return {
    ymaps: state.ymaps,
  };
};
export default connect(mapStateProps)(Map);
