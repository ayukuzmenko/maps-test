import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';
import randomid from '../middleware/randomid';
import { init } from '@rematch/core';
import immerPlugin from '@rematch/immer';
import points from '../reducers/points';
import { points as mPoints } from '../models/points';

let composeEnhancers;
if (process.env.NODE_ENV === 'development') {
  composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose;
} else {
  composeEnhancers = compose;
}

const enhancer = composeEnhancers(applyMiddleware(thunk, randomid));

//const store = createStore(reducer, enhancer);

const immer = immerPlugin();

const store = init({
  models: {
    mPoints,
  },
  // redux: {
  //   reducers: {
  //     points,
  //   },
  //   middlewares: [thunk],
  // },
  plugins: [immer],
});

export default store;
