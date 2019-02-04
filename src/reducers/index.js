import { combineReducers } from 'redux';
import getYMaps from './getYMaps';

export default combineReducers({
  ymaps: getYMaps,
});
