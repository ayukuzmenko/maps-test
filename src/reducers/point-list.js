import { REORDER_POINTS, NEW_POINT, DELETE_POINT } from '../constants';

export default (points = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case REORDER_POINTS: {
      return (points = payload.pointList);
    }
    case NEW_POINT: {
      const newPoints = points.slice();
      newPoints.push({
        id: action.newPointId,
        text: payload.text,
      });
      return newPoints;
    }
    case DELETE_POINT: {
      return points.filter(item => item.id !== payload.id);
    }
    default: {
      return points;
    }
  }
};
