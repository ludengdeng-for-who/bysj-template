import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isClose: true,
  },
  mutations: {
    closeMenu(state,payload){
      state.isClose = !state.isClose
    },
  },
  actions: {
  },
  modules: {
  }
})
