import axios from 'axios';

export default {
  getWeatherData(lat, lng) {
    return new Promise((resolve, reject) => {
      axios
      // eslint-disable-next-line max-len
        .get(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/356e9ada36312b24497bd67dc777208c/${lat},${lng}?units=si`)
        .then((results) => resolve(results.data))
        .catch((err) => reject(err));
    });
  },
};
