import * as APIUtil from '../util/eater_api_util';
export const RECEIVE_HUNGER = "RECEIVE_HUNGER";
export const RECEIVE_HUNGER_ERRORS = "RECEIVE_HUNGER_ERRORS";

// should be refactored into util
export const sendLunchTimeLocation = function sendLunchTimeLocation(data) {
  return $.ajax({
    method: 'POST',
    url: '/twilio/send_lunch_time',
    datatype: "json",
    data: data,
    contentType: false,
    processData: false
  });
};

export const receiveHunger = hunger => ({
	type: RECEIVE_HUNGER,
	hunger
});

export const receiveHungerErrors = errors => ({
	type: RECEIVE_HUNGER_ERRORS,
	errors
})

export const fetchHunger = () => dispatch => (
	APIUtil.fetchHunger().then(hunger => (
		dispatch(receiveHunger(hunger))
	), err => (
		dispatch(receiveHungerErrors(err.responseJSON))
	))
);
