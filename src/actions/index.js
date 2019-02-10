import { REORDER_POINTS, NEW_POINT, DELETE_POINT, START, SUCCESS, FAIL } from '../constants';

export const reoderPoint = pointList => {
  return {
    type: REORDER_POINTS,
    payload: { pointList },
  };
};

export const addPoint = text => {
  return {
    type: NEW_POINT + START,
    payload: { text },
    generateId: true,
  };
};

export const deletePoint = id => {
  return dicpatch => {
    dicpatch({
      type: DELETE_POINT,
      payload: { id },
    });
  };
};
