import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    profile: {
      isLogin: false,
      headImage: "",
      userId: "登录/注册"
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
