import ForumComponent from '@/components/ForumComponent.vue';
<template>
     <form class="col-md-12" @submit.prevent="login">
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
