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

    fetch(
      `https://geocode-maps.yandex.ru/1.x/?apikey=bd96e039-e525-42b9-803e-b57cd7b8e9b1&format=json&results=1&geocode=${text}`,
    )
      .then(res => {
        if (res.status >= 400) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then(response => {
        dispatch({
          type: NEW_POINT + SUCCESS,
          payload: {
            text,
            coords: response.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos,
          },
          generateId: true,
        });
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
