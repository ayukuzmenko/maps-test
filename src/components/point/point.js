import React, { Component } from 'react';
import { connect } from 'react-redux';

class Point extends Component {
  deletePointHandler = () => {
    this.props.deletePoint(this.props.item.id);
  };

  render() {
    const { item } = this.props;
    return (
      <div>
        <span>{item.adress}</span>
        <button onClick={this.deletePointHandler}>x</button>
      </div>
    );
  }
}

const mapDispatch = dispatch => {
  return {
    deletePoint: dispatch.points.deletePoint,
  };
};

export default connect(
  null,
  mapDispatch,
)(Point);
