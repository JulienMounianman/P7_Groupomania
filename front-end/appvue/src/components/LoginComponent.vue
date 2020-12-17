<template>
  <div class="hello">
     <form @submit.prevent="login">
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
  name: 'LoginComponent',
  data() {
    return {
      email:'',
      password: '',
      response: '',
      success: '',
    }
  },
  methods: {
    login () {
      axios
        .post('http://localhost:3000/api/auth/login', {
          email: this.email,
          password: this.password
        })
        .then(response => {
          this.success = response
          const token = response.data.token
          this.$router.push({ name:'Forum', params: {token: token} });
        })
        .catch(error => {
        this.response = 'Error: ' + error
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
</style>
