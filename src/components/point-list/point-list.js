import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Point from '../point';

export class PointList extends Component {
  dragEndHandler = result => {
    if (!result.destination) {
      return;
    }

    const { points, reoderPoints } = this.props;

    const newOrderedPoints = reorder(points, result.source.index, result.destination.index);
    reoderPoints(newOrderedPoints);
  };

  get pointBody() {
    const { points } = this.props;

    return points.map((item, index) => (
      <Draggable key={item.id} draggableId={item.id} index={index}>
        {(provided, snapshot) => (
          <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
            <Point item={item} />
          </div>
        )}
      </Draggable>
    ));
  }

  render() {
    const { points } = this.props;

    if (!points.length) {
      return null;
    }

    return (
      <DragDropContext onDragEnd={this.dragEndHandler}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {this.pointBody}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const mapStateToProps = state => ({
  points: state.points,
});

const mapDispatch = ({ points: { reoderPoints } }) => ({ reoderPoints });

export default connect(
  mapStateToProps,
  mapDispatch,
)(PointList);
