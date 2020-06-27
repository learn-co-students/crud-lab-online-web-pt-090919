import { combineReducers } from 'redux';
import rev from './manageReviews';
import res from './manageRestaurant';

export default combineReducers({
  res, rev
});