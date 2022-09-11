import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://127.0.0.1:8000/';

// @NEXT keep axios call for openApi / login /entities separate
// const configHeaders = {
//   "content-type": "application/json",
//   "Accept": "application/json"
// };
// axios.defaults.headers.common['content-type'] = 'application/json';
// axios.defaults.headers.common['accept'] = 'application/json';


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    appSchema: {},
    entities: {}
  },
  mutations: {
    setUser(state, user){
      state.user = user
    },
    setSchema(state, schema){
      state.appSchema = schema;
    },
    setEntity(state, entity){
      state.entities[entity.name] = entity.data;
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
      axios.defaults.headers.common['Authorization'] = `Token ${User.auth_token}`;
      await commit('setUser', User)
      const responseOpenApiSchema = await axios.get('/openapi', {
        headers: { 'Content-Type': 'application/json' },
      });
      await commit('setSchema', responseOpenApiSchema);
    },
    async syncEntity({commit}, EntityName) {
      const response = await axios.get(`${EntityName}`);
      await commit('setEntity', {name: EntityName, data: response.data})
    },
  },
  getters: {
    isAuthenticated: state => !!state.user,
    StateUser: state => state.user,
    entities: state => state.entities,
  },
  modules: {
  }
})
