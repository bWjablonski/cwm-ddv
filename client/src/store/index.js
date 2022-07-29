import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://127.0.0.1:8000/';


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
  },
  mutations: {
    setUser(state, user){
      state.user = user
    },
    LogOut(state){
      state.user = null
    },
  },
  actions: {
    async LogIn({commit}, User) {
      const response = await axios.post('auth/token/login/', User);
      User.password = null;
      User.auth_token = response.data.auth_token;
      await commit('setUser', User)
      console.log(this.getters.StateUser)
    },
  },
  getters: {
    isAuthenticated: state => !!state.user,
    StateUser: state => state.user,
  },
  modules: {
  }
})
