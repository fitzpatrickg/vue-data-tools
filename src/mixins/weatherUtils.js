import axios from 'axios';

export default {
  getWeatherData() {
    return new Promise((resolve, reject) => {
      axios
      // eslint-disable-next-line max-len
        .get('https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/356e9ada36312b24497bd67dc777208c/37.8267,-122.4233?units=si')
        .then((results) => resolve(results.data))
        .catch((err) => reject(err));
    });
  },
};
