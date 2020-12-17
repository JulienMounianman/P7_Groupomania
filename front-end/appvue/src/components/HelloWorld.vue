<template>
  <div class="hello">
     <form @submit.prevent="signup">
        <div>
            <label for="userName">Name</label><br>
            <input type="text" id="userName" name="userName" v-model="userName" required>
        </div>
        <div>
            <label for="email">e-mail</label><br>
            <input type="email" id="email" v-model="email" name="email" required>
        </div>
        <div>
            <label for="password">Password</label><br>
            <input type="text" id="password" v-model="password" name="password" required>
      </div>
       <input type="submit" value="Envoyer" />
        <div>
          <h3>Réponse de l'api:</h3>
          <p v-if="success"> {{ success }}</p>
          <pre>{{ response }}</pre>
        </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'HelloWorld',
  data() {
    return {
      userName: '',
      email:'',
      password: '',
      response: '',
      success: '',
    }
  },
  methods: {
    signup () {
      axios
        .post('http://localhost:3000/api/auth/signup', {
          userName: this.userName,
          email: this.email,
          password: this.password
        })
        .then(response => {
          this.success = response.data.message;
        })
        .catch(error => {
        this.response = 'Error: ' + error.response.status
      })
      this.userName = '';
      this.email = '';
      this.password = '';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
