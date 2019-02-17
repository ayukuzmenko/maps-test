import { REORDER_POINTS, NEW_POINT, DELETE_POINT, SUCCESS, REPLACE_POINT } from '../constants';
import { Record, List } from 'immutable';

const pointRecord = new Record({
  id: null,
  adress: null,
  coords: null,
  loading: false,
  loaded: false,
  error: null,
});

export default (points = List([]), action) => {
  const { type, payload } = action;

  switch (type) {
    case REORDER_POINTS: {
      return (points = List(payload.pointList));
    }
    case NEW_POINT + SUCCESS: {
      return points.push(
        new pointRecord({
          id: action.newPointId,
          coords: payload.coords,
          adress: payload.adress,
          loaded: true,
        }),
      );
    }
    case DELETE_POINT: {
      return points.filter(item => item.id !== payload.id);
    }
    case REPLACE_POINT + SUCCESS: {
      return points.set(
        payload.arrIndex,
        new pointRecord({
          id: points.get(payload.arrIndex).id,
          coords: payload.coords,
          adress: payload.adress,
          loaded: true,
        }),
      );
    }
    default: {
      return points;
    }
  }
};
