import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: "",
    responseApi: "",
    statusCodeResponse:""
  },
  mutations: {
    signup (state,{userName,password,email}) {
      axios
        .post('http://localhost:3000/api/auth/signup', {
          userName: userName,
          email: email,
          password: password
        })
        .then(response => {
            state.responseApi = response.data.message;  
            state.statusCodeResponse = response.status;
        })
        .catch(error => { state.responseApi = error })
    }
  },
  actions: {
    signup (context, {userName,password,email}) {
      context.commit('signup', {userName, email, password})
    }
  },
  modules: {
  }
})
