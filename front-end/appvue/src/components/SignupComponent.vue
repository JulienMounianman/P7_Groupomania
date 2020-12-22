<template>
    <div class="margin card">
      <h1 class="text-center">Inscription</h1>
      <form class="col-md-12" @submit.prevent="signup">
          <div class="form-group">
              <label for="userName">Prénom</label>
              <input class="form-control" type="text" id="userName" name="userName" v-model="userName" required>
          </div>
          <div class="form-group">
              <label for="email">Adresse Email</label>
              <input class="form-control" type="email" id="email" v-model="email" name="email" required>
          </div>
          <div class="form-group">
              <label for="password">Mot de passe</label>
              <input class="form-control" type="text" id="password" v-model="password" name="password" required>
        </div>
        <input type="submit" class="btn btn-secondary" value="s'inscrire" />
      </form>
      <div class="alert alert-danger"  v-if="this.$store.state.error != ''" role="alert">
        {{ this.$store.state.error }}
      </div>
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
.margin {
  margin:auto;
  margin-top:15%
}
.card {
  width: 100%;
  padding: 2%;
  background-color: #d7d7d7;
  box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.3);
}
</style>
