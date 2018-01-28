export const sendLunchTimeLocation = function sendLunchTimeLocation(data) {
  return $.ajax({
    method: 'POST',
    url: '/twilio/send_lunch_time',
    datatype: "json",
    data: data,
    contentType: false,
    processData: false
  });
}
