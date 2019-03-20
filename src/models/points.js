export const points = {
  state: [],
  reducers: {
    reoderPoints: (state, payload) => (state = payload),
    addNewPoint: (state, payload) => {
      console.log(payload);
      state.push({
        id: payload.newPointId,
        coords: payload.coords,
        adress: payload.adress,
        loaded: true,
      });
      return state;
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

const todo = {
  state: [
    {
      todo: 'Learn typescript',
      done: true,
    },
    {
      todo: 'Try immer',
      done: false,
    },
  ],
  reducers: {
    done(state) {
      state.push({ todo: 'Tweet about it' });
      state[1].done = true;
      return state;
    },
    sdff: 3,
  },
};
