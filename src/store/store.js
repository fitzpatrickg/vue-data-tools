import Vue from 'vue';
import Vuex from 'vuex';
import weatherModule from './modules/weather';
import routesModule from './modules/routes';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    weatherModule,
    routesModule,
  },
});
