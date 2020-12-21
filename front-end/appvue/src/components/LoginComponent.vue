import ForumComponent from '@/components/ForumComponent.vue';
<template>
    <div class="margin card">
      <h1 class="text-center">Connexion</h1>
      <form class="col-md-12"  @submit.prevent="login">
          <div class="form-group">
              <label for="email">Adresse Email</label>
              <input type="email" class="form-control" id="email" v-model="email" name="email" required>
          </div>
          <div class="form-group">
              <label for="password">Mot de passe</label>
              <input type="text" class="form-control" id="password" v-model="password" name="password" required>
        </div>
        <input type="submit" class="btn btn-secondary" value="connexion" />
      </form>
      <div class="alert alert-danger"  v-if="this.$store.state.error != ''" role="alert">
        {{ this.$store.state.error }}
      </div>
    </div>
</template>


<script>
export default {
  name: 'LoginComponent',
  data() {
    return {
      email:'',
      password: '',
      response: '',
      error: '',
    }
  },
  mounted () {
    this.$store.state.error = "";
    this.$store.state.statusCodeResponse = 0;
  },
  methods: {
    login () {
      this.$store.dispatch({
      type: "login", 
      password: this.password,
      email: this.email
      }).then(() => {
          if( this.$store.state.statusCodeResponse == 200) {
            this.$store.state.statusCodeResponse = 0;
            this.$store.state.error = "";
            this.$router.push({ name:'Forum'});
          }
      }).catch(() => {}); 
    }
  }
}
</script>

<style scoped>
.margin {
  margin: auto;
  margin-top: 15%;
}
.card {
  width: 100%;
  padding: 2%;
  background-color: #d7d7d7;
  box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.3);
}

</style>
