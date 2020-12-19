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
      return state.url;
    }
  },
  mutations: {
    setStatus (state, response) {
      Vue.set(state, 'statusCodeResponse', response.status)
    },
    setTokenStatus (state,response) {
      Vue.set(state, 'statusCodeResponse', response.status)
      Vue.set(state, 'token', response.data.token)
    },
    setDataStatus (state,response) {
      Vue.set(state, 'statusCodeResponse', response.status)
      Vue.set(state, 'data', response.data)
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
    }
  },
  modules: {
  }
})
