import Vue from 'vue';
import Router from 'vue-router';
import App from './app.vue';
import router from './router';
import store from './store';
import './assets/style/style.less';

Vue.use(Router);
// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(App),
});

