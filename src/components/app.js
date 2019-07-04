import React, { Component } from 'react';
import Map from './Map';
import SearchBar from './SearchBar';
import PointList from './PointList';

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
