import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchInp: "",
  },
  mutations: {},
  actions: {},
  modules: {},
  getters: {
    search(state) {
      return state.searchInp;
    },
  },
});
