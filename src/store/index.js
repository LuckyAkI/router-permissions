import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
Vue.use(Vuex)

// 路由权限模块 当前只分了一个模块
import menu from './module'

let store = new Vuex.Store({
  state,
  mutations: {
    SET_TOKEN(state, token) {
      state.userToken = token
    },
    CLEAR_TOKEN(state){
      state.userToken = ''
    }
  },
  modules: {
    menu
  }
})

export default store