import { REORDER_POINTS } from '../constants';

export default (points = [`test1`, `test2`, `test3`, `test4`], action) => {
  if (action.type === REORDER_POINTS) {
    return (points = action.payload.pointList);
  } else {
    return points;
  }
};
