import React, { Component } from 'react';
import Map from './Map';
import SearchBar from './SearchBar';
import PointList from './PointList';
import './style.css';

class App extends Component {
  render() {
    return (
      <div className="main">
        <div className="container">
          <SearchBar />
          <PointList />
        </div>
        <Map />
      </div>
    );
  }
}

export default App;
