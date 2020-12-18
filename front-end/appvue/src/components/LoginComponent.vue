<template>
     <form class="col-md-12" @submit.prevent="login">
        <div>
            <label for="email">e-mail</label><br>
            <input type="email" id="email" v-model="email" name="email" required>
        </div>
        <div>
            <label for="password">Mot de passe</label><br>
            <input type="text" id="password" v-model="password" name="password" required>
      </div>
       <input type="submit" value="Envoyer" />
    </form>
</template>


<script>
export default {
  name: 'LoginComponent',
  data() {
    return {
      email:'',
      password: '',
      response: '',
    }
  },
  computed: {
    statusCode: function () {
      return this.$store.getters.statusCode
    }
  },
  methods: {
    login () {
      this.$store.dispatch({
      type: "login", 
      password: this.password,
      email: this.email
      }).then(() => {
        this.$router.push({ name:'Forum'});
      }).catch(() => {}); 
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
