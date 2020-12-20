import ForumComponent from '@/components/ForumComponent.vue';
<template>
    <div class="margin">
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
    }
  },
  mounted () {
    this.$store.state.error = "";
  },
  methods: {
    login () {
      this.$store.dispatch({
      type: "login", 
      password: this.password,
      email: this.email
      }).then(() => {
        if(this.$store.getters.error != "") {
          console.log(this.$store.getters.error);
        } else {
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


</style>
