import { combineReducers } from 'redux';
import getYMaps from './getYMaps';
import points from './points';

export default combineReducers({
  ymaps: getYMaps,
  points: points,
});
