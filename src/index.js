import Vue from 'vue';
import App from './app.vue';
import router from './router';
import store from './store';

import './assets/style/style.less';

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(App),
});

