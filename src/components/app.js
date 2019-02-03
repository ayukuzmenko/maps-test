import React, { Component } from 'react';
import Map from './map';

class App extends Component {
  render() {
    return (
      <div>
        <Map ymaps={this.props.ymaps}/>
      </div>
    );
  }
}

export default App;
