export default {
  name: 'layout',
  namespaced: true,
  state: {
    a: '1',
    b: '2',
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
    change: ({ commit }, payload) => {
      commit('setState', payload);
    },
  },
};
