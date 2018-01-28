import merge from 'lodash/merge';

import {
	RECEIVE_HUNGER,
} from '../actions/hunger_actions';

const HungerReducer = (state = {}, action) => {
	Object.freeze(state);
	let newState = merge({}, state);
	switch (action.type) {
		case RECEIVE_HUNGER:
			return action.hunger;
		default:
			return state;
	}
};

export default HungerReducer;
