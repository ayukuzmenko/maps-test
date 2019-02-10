import { REORDER_POINTS, NEW_POINT, DELETE_POINT } from '../constants';

export const reoderPoint = pointList => {
  return {
    type: REORDER_POINTS,
    payload: { pointList },
  };
};

export const addPoint = text => {
  return {
    type: NEW_POINT,
    payload: { text },
    generateId: true,
  };
};

export const deletePoint = id => {
  return {
    type: DELETE_POINT,
    payload: { id },
  };
};
