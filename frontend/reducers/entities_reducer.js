import { combineReducers } from 'redux';
import HungerReducer from './hunger_reducer';

export default combineReducers({
  hunger: HungerReducer
});
