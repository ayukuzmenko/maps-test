import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';
import randomid from '../middleware/randomid';

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

const store = createStore(reducer, enhancer);

export default store;
