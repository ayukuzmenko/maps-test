import React, { Component } from 'react';

class Point extends Component {
  render() {
    const { text } = this.props;
    return (
      <div>
        <span>{text}</span>
        <button>x</button>
      </div>
    );
  }
}

export default Point;
