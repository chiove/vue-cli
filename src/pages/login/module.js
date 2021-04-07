export default {
  name: 'login',
  namespaced: true,
  state: {
    b: '1',
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
