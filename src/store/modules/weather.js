const weatherModule = {
  state: () => ({
    weather: null,
  }),
  mutations: {
    updateWeather(state, weather) {
      state.weather = weather;
    },
  },
};

module.exports = weatherModule;
