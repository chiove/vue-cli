export default {
  name: 'demo',
  namespaced: true,
  state: {
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
    demo: ({ commit, state, dispatch }, payload) => {

    },
  },
};
