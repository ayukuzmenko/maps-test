export const points = {
  state: [],
  reducers: {
    reoderPoints: (state, payload) => (state = payload),

    addNewPoint: (state, payload) => {
      state.push({
        id: payload.newPointId,
        coords: payload.coords,
        adress: payload.adress,
        loaded: true,
      });
      return state;
    },

    deletePoint: (state, payload) => {
      return state.filter(item => item.id !== payload);
    },

    replacePoint: (state, payload) => {
      state[payload.arrIndex] = {
        id: state[payload.arrIndex].id,
        coords: payload.coords,
        adress: payload.adress,
        loaded: true,
      };
    },
  },
  effects: dispatch => ({
    async searchPoint(payload) {
      window.ymaps.geocode(payload, { result: 1 }).then(res => {
        const geoObj = res.geoObjects.get(0);
        if (geoObj) {
          this.addNewPoint({
            adress: geoObj.getAddressLine(),
            coords: geoObj.geometry.getCoordinates(),
            newPointId: (Date.now() + Math.random()).toString(),
          });
        } else {
          // if result not found
        }
      });
      // .catch(error => {
      //   dispatch({
      //     type: NEW_POINT + FAIL,
      //     error,
      //   });
      // });
    },

    async getNewCoords(payload) {
      window.ymaps.geocode(payload.newCoords, { result: 1 }).then(res => {
        const geoObj = res.geoObjects.get(0);
        if (res) {
          const adress = geoObj.getAddressLine() ? geoObj.getAddressLine() : `Address unknown`;
          dispatch.mPoints.replacePoint({
            adress: adress,
            coords: payload.newCoords,
            arrIndex: payload.arrIndex,
          });
        } else {
          // if result not found
        }
      });
    },
  }),
};
