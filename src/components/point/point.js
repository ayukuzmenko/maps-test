import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deletePoint } from '../../actions';

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

export default connect(
  null,
  { deletePoint },
)(Point);
