import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Point from '../point';

class PointList extends Component {
  onDragEnd(result) {
    if (!result.destination) {
      return;
    }
  }

  get pointBody() {
    const { points } = this.props;

    return points.map((text, index) => (
      <Draggable key={text} draggableId={text} index={index}>
        {(provided, snapshot) => (
          <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
            <Point text={text} />
          </div>
        )}
      </Draggable>
    ));
  }

  render() {
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

const mapStateToProps = state => {
  return {
    points: state.points,
  };
};

export default connect(mapStateToProps)(PointList);
