import moment from 'moment-timezone';

export default {
  getWeekdayFromTimestamp(timestamp) {
    return moment.unix(timestamp).format('ddd');
  },

  getHourFromTimeStamp(timestamp) {
    return moment.unix(timestamp).format('HH');
  },
};
