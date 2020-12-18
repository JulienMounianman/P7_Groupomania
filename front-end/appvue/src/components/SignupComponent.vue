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
          <p>{{  statusCode }}</p><br>
          <p>{{  token }}</p>
        </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SignupComponent',
  data() {
    return {
      userName: '',
      email:'',
      password: '',
    }
  },
  computed: {
    statusCode: function () {
      return this.$store.getters.statusCode
    },
     token: function () {
      return this.$store.getters.token
    }
  },
  methods: {
    signup () {
      this.$store.dispatch({
        type: "signup", 
        userName: this.userName,
        password: this.password,
        email:this.email
        }).then(() => {
        if(this.$store.getters.statusCode == 201) {
          this.$store.dispatch({
            type: "login", 
            password: this.password,
            email: this.email
            }).then(() => {
              this.$router.push({ name:'Forum'});
            }).catch(() => {});         
        }
      }).catch(() => {});
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
