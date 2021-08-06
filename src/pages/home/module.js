

export default {
  name: 'home',
  namespaced: true,
  state: {
    text: '测试',
  },
  mutations: {
    setState: (state, payload) => {
      Object.keys(payload).forEach((key) => {
        state[key] = payload[key];
      });
    },
  },
  actions: {
    login({ commit }, payload) {
      commit('setState', {
        text: payload.text,
      });
    },
  },
};
