import Vue from 'vue';
import router from './router/routes';
import App from './App.vue';
import './components/Global/index'; // import global components

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
