import React, { Component } from 'react';
import Map from './map';
import SearchBar from './search-bar'

class App extends Component {
  render() {
    return (
      <div>
        <Map ymaps={this.props.ymaps}/>
        <SearchBar ymaps={this.props.ymaps}/>
      </div>
    );
  }
}

export default App;
