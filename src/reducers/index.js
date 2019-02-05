import { combineReducers } from 'redux';
import getYMaps from './getYMaps';
import points from './point-list';

export default combineReducers({
  ymaps: getYMaps,
  points: points,
});
