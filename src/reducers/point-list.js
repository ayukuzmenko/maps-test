import { REORDER_POINTS, NEW_POINT } from '../constants';

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
    default: {
      return points;
    }
  }
};
