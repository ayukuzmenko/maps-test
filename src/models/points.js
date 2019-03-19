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
      return state.slice();
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
  }),
};
