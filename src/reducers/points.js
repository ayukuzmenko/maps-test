import { REORDER_POINTS, NEW_POINT, DELETE_POINT, SUCCESS } from '../constants';
import { Record, List } from 'immutable';

const pointRecord = new Record({
  id: null,
  text: null,
  loading: false,
  loaded: false,
  error: null,
});

export default (points = List([]), action) => {
  const { type, payload } = action;
  switch (type) {
    case REORDER_POINTS: {
      return (points = payload.pointList);
    }
    case NEW_POINT + SUCCESS: {
      return points.push(
        new pointRecord({
          id: action.newPointId,
          text: payload.text,
          coords: payload.coords,
          loaded: true,
        }),
      );
    }
    case DELETE_POINT: {
      return points.filter(item => item.id !== payload.id);
    }
    default: {
      return points;
    }
  }
};
