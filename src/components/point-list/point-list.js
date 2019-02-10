import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { reoderPoint } from '../../actions';
import Point from '../point';

class PointList extends Component {
  onDragEnd = result => {
    if (!result.destination) {
      return;
    }

    const { points, reoderPoint } = this.props;

    const OrderedPoints = reorder(points, result.source.index, result.destination.index);

    reoderPoint(OrderedPoints);
  };

  get pointBody() {
    const { points } = this.props;

    return points.map((item, index) => (
      <Draggable key={item.id} draggableId={item.id} index={index}>
        {(provided, snapshot) => (
          <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
            <Point text={item.text} />
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
      <DragDropContext onDragEnd={this.onDragEnd}>
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

const mapStateToProps = state => {
  return {
    points: state.points,
  };
};

export default connect(
  mapStateToProps,
  { reoderPoint },
)(PointList);
