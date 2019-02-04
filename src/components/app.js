import React, { Component } from 'react';
import Map from './map';
import SearchBar from './search-bar';

class App extends Component {
  render() {
    return (
      <div>
        <Map />
        <SearchBar />
      </div>
    );
  }
}

export default App;
