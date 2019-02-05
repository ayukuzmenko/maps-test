import React, { Component } from 'react';
import Map from './map';
import SearchBar from './search-bar';
import PointList from './point-list';

class App extends Component {
  render() {
    return (
      <div>
        <Map />
        <div className="container">
          <SearchBar />
          <PointList />
        </div>
      </div>
    );
  }
}

export default App;
