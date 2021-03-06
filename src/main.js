import Vue from 'vue';
import VueSlideoutPanel from 'vue2-slideout-panel';
import router from './router/routes';
import App from './App.vue';
import store from './store/store';
import './components/Global/index'; // import global components

Vue.config.productionTip = false;

Vue.use(VueSlideoutPanel);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
