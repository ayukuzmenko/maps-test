import { NEW_POINT } from '../constants';
import { REORDER_POINTS } from '../constants';

export const reoderPoint = pointList => {
  return {
    type: REORDER_POINTS,
    payload: { pointList },
  };
};
