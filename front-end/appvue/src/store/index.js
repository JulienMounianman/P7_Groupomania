import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: "",
    responseApi: "",
    statusCodeResponse: 0,
    data: [],
    id: 0,
    url: ""
  },
  getters: {
    statusCode: state => {
        return state.statusCodeResponse;
    },
    token: state => {
      return state.token;
    },
    data: state => {
      return state.data;
    },
    id: state => {
      return state.id;
    },
    url: state => {
      return state.id;
    }
  },
  mutations: {
    signup (state, response) {
      Vue.set(state, 'statusCodeResponse', response.status)
    },
    login (state,response) {
      Vue.set(state, 'statusCodeResponse', response.status)
      Vue.set(state, 'token', response.data.token)
    },
    getAllCategories (state,response) {
      Vue.set(state, 'statusCodeResponse', response.status)
      Vue.set(state, 'data', response.data)
    },
    getPostByCategory (state,response) {
      Vue.set(state, 'statusCodeResponse', response.status)
      Vue.set(state, 'data', response.data)
    },
    getCommentByPost (state,response) {
      Vue.set(state, 'statusCodeResponse', response.status)
      Vue.set(state, 'data', response.data)
    },
    getById (state,response) {
      Vue.set(state, 'statusCodeResponse', response.status)
      Vue.set(state, 'data', response.data)
    },
    Postcomment (state,response) {
      Vue.set(state, 'statusCodeResponse', response.status)
    }
  },
  actions: {
    signup ({ commit },{userName,password,email}) {
      return axios
        .post('http://localhost:3000/api/auth/signup', {
          userName: userName,
          email: email,
          password: password
        })
        .then(response => {
          commit('signup', response)
        })
        .catch(error => { 
          console.log(error);
        })
    },
    login ({ commit }, {password,email}) {
        return axios
        .post('http://localhost:3000/api/auth/login', {
          email: email,
          password: password
        })
        .then(response => {
          commit('login', response)
        })
        .catch(error => { 
          console.log(error);
        })
    },
    getAllCategories ({ commit, state }) {
      return axios
        .get('http://localhost:3000/api/category/',{
          headers: {
            'Authorization': 'Bearer ' + state.token
          }
        })
        .then(response => {
          commit('getAllCategories', response)
        })
        .catch(error => {
          console.log(error);
      })
    },
    getPostByCategory ({commit, state}) {
      return axios
          .get('http://localhost:3000/api/post/category/' + state.id,{
            headers: {
              'Authorization': 'Bearer ' + state.token
            }
          })
          .then(response => {
            commit('getPostByCategory', response)
          })
          .catch(error => {
            console.log(error);
        })
    },
    getCommentByPost ({commit, state}) {
      return axios
          .get('http://localhost:3000/api/comment/post/' + state.id,{
            headers: {
              'Authorization': 'Bearer ' + state.token
            }
          })
          .then(response => {
            commit('getCommentByPost', response)
          })
          .catch(error => {
            console.log(error);
        })
    },
    getById ({commit, state }) {
      return axios
          .get(state.url + state.id,{
            headers: {
              'Authorization': 'Bearer ' + state.token
            }
          })
          .then(response => {
            commit('getById', response)
          })
          .catch(error => {
            console.log(error);
        })
    },
    Postcomment ({commit, state }, {content}) {
      return axios
          .post("http://localhost:3000/api/comment/" + state.id,{
            content: content,
            headers: {
              'Authorization': 'Bearer ' + state.token
            }
          })
          .then(response => {
            commit('Postcomment', response)
          })
          .catch(error => {
            console.log(error);
        })
    }
  },
  modules: {
  }
})
