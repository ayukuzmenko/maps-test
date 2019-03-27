import { init } from '@rematch/core';
import immerPlugin from '@rematch/immer';
import points from '../models/points';

const immer = immerPlugin();

const store = init({
  models: {
    points,
  },
  plugins: [immer],
});

export default store;
