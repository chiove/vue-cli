import { demoGet, demoPost } from 'src/api/demo';

export default {
  name: 'demo',
  namespaced: true,
  state: {
    example: '',
  },
  mutations: {
    setState: (state, payload) => {
      Object.keys(payload).forEach((key) => {
        state[key] = payload[key];
      });
    },
    resetSate: (state) => {
      Object.keys(state).forEach((key) => {
        state[key] = undefined;
      });
    },

  },
  actions: {
    get: async ({ commit }, payload) => {
      const res = await demoGet(payload);
      if (res.code === 200) {
        commit('setState', {
          example: res.data.name,
        });
      }
      return res;
    },
    post: async ({ commit }, payload) => {
      const res = await demoPost(payload);
      commit('setState', {
        example: res.data.name,
      });
      return res;
    },
  },
};
