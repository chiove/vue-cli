import Vue from 'vue';
import Antd from 'ant-design-vue/es';
import App from './app.vue';
import router from './router';
import store from './store';
import 'ant-design-vue/dist/antd.css';
import './assets/style/style.less';

Vue.use(Antd);
// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(App),
});

