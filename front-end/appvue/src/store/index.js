import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    token: localStorage.getItem('token'),
    error: "",
    statusCodeResponse: 0,
    data: [],
    id: 0,
    url: "",
    postId: 0,
    categoryId:0,
    isAdmin: false
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
    postId: state => {
      return state.postId;
    },
    categoryId: state => {
      return state.categoryId;
    },
    url: state => {
      return state.url;
    },
    isAdmin: state => {
      return state.isAdmin;
    },
    error: state => {
      return state.error;
    }
  },
  mutations: {
    setStatus (state, response) {
      Vue.set(state, 'statusCodeResponse', response.status)
    },
    setTokenStatus (state,response) {
      Vue.set(state, 'statusCodeResponse', response.status)
      Vue.set(state, 'token', response.data.token)
      localStorage.setItem('token', response.data.token)
      Vue.set(state, 'isAdmin', response.data.isAdmin)
    },
    setDataStatus (state,response) {
      Vue.set(state, 'statusCodeResponse', response.status)
      Vue.set(state, 'data', response.data)
    },
    disconnect(state) {
      state.isAdmin = false;
      localStorage.clear();
      Vue.set(state, 'token', null);
    },
    setError(state,error) {
      Vue.set(state, 'error', error);
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
          commit('setStatus', response)
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
          commit('setTokenStatus', response)
        })
        .catch(error => { 
          commit('setError', error)
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
            commit('setDataStatus', response)
          })
          .catch(error => {

            console.log(error);
        })
    },
    Postcomment ({commit, state }, {content}) {
      return axios
          .post("http://localhost:3000/api/comment/" + state.id,{content: content },
            {
              headers: {
              'Authorization': 'Bearer ' + state.token
            }
          })
          .then(response => {
            commit('setStatus', response)
          })
          .catch(error => {
            console.log(error);
        })
    },
    getAll ({commit, state }) {
      return axios
          .get(state.url,
            {
              headers: {
              'Authorization': 'Bearer ' + state.token
            }
          })
          .then(response => {
            commit('setDataStatus', response)
          })
          .catch(error => {
            console.log(error);
        })
    },
    editProfil ({commit, state }, {userName, email}) {
      return axios
      .put(state.url,{userName: userName, email: email },
        {
          headers: {
          'Authorization': 'Bearer ' + state.token
        }
      })
      .then(response => {
        commit('setStatus', response)
      })
      .catch(error => {
        console.log(error);
    })
    },
    createPost ({commit, state }, {title, content, categoryId}) {
      return axios
      .post("http://localhost:3000/api/post/", {title: title, content: content, categoryId: categoryId },
            {
              headers: {
              'Authorization': 'Bearer ' + state.token
            }
          })
          .then(response => {
            commit('setStatus', response)
          })
          .catch(error => {
            console.log(error);
        })
    },
    editPost ({commit, state }, {title, content, postId, categoryId}) {
      return axios
      .put("http://localhost:3000/api/post/" + postId ,{title: title, content: content, categoryId: categoryId },
            {
              headers: {
              'Authorization': 'Bearer ' + state.token
            }
          })
          .then(response => {
            commit('setStatus', response)
          })
          .catch(error => {
            console.log(error);
        })
    },
    createCategory ({commit, state }, {name, description}) {
      return axios
      .post("http://localhost:3000/api/category/", {name: name, description: description },
            {
              headers: {
              'Authorization': 'Bearer ' + state.token
            }
          })
          .then(response => {
            commit('setStatus', response)
          })
          .catch(error => {
            console.log(error);
        })
    },
    editCategory ({commit, state }, {name, description, id}) {
      return axios
      .put("http://localhost:3000/api/category/" + id , { name: name, description: description },
            {
              headers: {
              'Authorization': 'Bearer ' + state.token
            }
          })
          .then(response => {
            commit('setStatus', response)
          })
          .catch(error => {
            console.log(error);
        })
    },
    delete ({commit,state}, { id } ) {
      return axios
      .delete( state.url + id ,
            {
              headers: {
              'Authorization': 'Bearer ' + state.token
            }
          })
          .then(response => {
            commit('setStatus', response)
          })
          .catch(error => {
            console.log(error);
        })
    }
  },
  
  modules: {
  }
})
