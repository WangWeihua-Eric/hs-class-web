import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'amfe-flexible';
// @ts-ignore
import { AjaxPlugin } from 'vux';
require('es6-promise').polyfill();

Vue.config.productionTip = false;

const FastClick = require('fastclick');
FastClick.attach(document.body);

Vue.use(AjaxPlugin);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
