import {
  REORDER_POINTS,
  NEW_POINT,
  DELETE_POINT,
  START,
  SUCCESS,
  FAIL,
  REPLACE_POINT,
} from '../constants';

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
              adress: geoObj.getAddressLine(),
              coords: geoObj.geometry.getCoordinates(),
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

export const replacePoint = (arrIndex, newCoords) => {
  return dispatch => {
    dispatch({
      type: REPLACE_POINT + START,
    });

    window.ymaps.geocode(newCoords, { result: 1 }).then(res => {
      const geoObj = res.geoObjects.get(0);

      if (geoObj) {
        const adress = geoObj.getAddressLine() ? geoObj.getAddressLine() : `Address unknown`;
        dispatch({
          type: REPLACE_POINT + SUCCESS,
          payload: {
            adress: adress,
            coords: newCoords,
            arrIndex: arrIndex,
          },
        });
      } else {
        // if result not found
      }
    });
  };
};
