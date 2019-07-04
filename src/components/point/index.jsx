import React from 'react';
import { connect } from 'react-redux';
import './style.css';

const Point = props => {
  const deletePointHandler = () => {
    props.deletePoint(props.item.id);
  };

    const { item } = props;
    return (
      <React.Fragment>
        <span className="address">{item.adress}</span> 
        <button onClick={deletePointHandler}>x</button>
      </React.Fragment>
    );

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
