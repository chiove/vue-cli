import Vue from 'vue';
import Vuex from 'vuex';
import global from './global';
import layout from './layout';

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [],
  modules: { global, layout },
});

