import { REORDER_POINTS, NEW_POINT, DELETE_POINT, START, SUCCESS, FAIL } from '../constants';

export const reoderPoint = pointList => {
  return {
    type: REORDER_POINTS,
    payload: { pointList },
  };
};

export const addPoint = text => {
  return dispatch => {
    dispatch({
      type: NEW_POINT + START,
    });

    window.ymaps
      .geocode(text, { result: 1 })
      .then(res => {
        const geoObj = res.geoObjects.get(0);

        if (geoObj) {
          dispatch({
            type: NEW_POINT + SUCCESS,
            payload: {
              geoObj,
            },
            generateId: true,
          });
        } else {
          // if result not found
        }
      })
      .catch(error => {
        dispatch({
          type: NEW_POINT + FAIL,
          error,
        });
      });
  };
};

export const deletePoint = id => {
  return {
    type: DELETE_POINT,
    payload: { id },
  };
};
