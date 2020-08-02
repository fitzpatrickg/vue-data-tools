import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '../views/HomePage.vue';
import WeatherPage from '../views/WeatherPage.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
    },
    {
      path: '/weather-graphs',
      name: 'weatherGraphs',
      component: WeatherPage,
    },
  ],
});
