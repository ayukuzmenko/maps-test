import React from 'react';
import { connect } from 'react-redux';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Point from '../Point';

const getItemStyle = (isDragging, draggableStyle) => ({
  userSelect: "none",
  padding: "5px",
  marginBottom: "5px",
  marginTop: "5px",
  background: isDragging ? "lightgreen" : "grey",
  ...draggableStyle
});

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? "lightblue" : "lightgrey",
  padding: "5px",
});

const dragEndHandler = result => {
  if (!result.destination) {
    return;
  }

  const { points, reoderPoints } = this.props;

  const newOrderedPoints = reorder(points, result.source.index, result.destination.index);
  reoderPoints(newOrderedPoints);
};

const PointList = props => {
  const { points } = props;

  if (!points.length) {
    return null;
  }

  const getPoints = () => {
    return points.map((item, index) => (
      <Draggable key={item.id} draggableId={item.id} index={index}>
        {(provided, snapshot) => (
          <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} 
          style={getItemStyle(
            snapshot.isDragging,
            provided.draggableProps.style
          )}
          >
            <Point item={item} />
          </div>
        )}
      </Draggable>
    ));
  }

    return (
      <DragDropContext onDragEnd={dragEndHandler} >
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div ref={provided.innerRef} {...provided.droppableProps} style={getListStyle(snapshot.isDraggingOver)}>
              {getPoints()}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    )
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
