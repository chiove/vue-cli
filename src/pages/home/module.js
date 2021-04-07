export default {
  name: 'home',
  namespaced: true,
  state: {
    c: '66',
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
    home: ({ commit, state, dispatch }, payload) => {

    },
  },
};
