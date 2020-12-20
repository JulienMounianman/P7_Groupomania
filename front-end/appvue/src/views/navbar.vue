<template>
<header class="navbar navbar-expand-sm navbar-dark bg-dark">
   <a class="navbar-brand" href="#">Groupomania</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
  <ul class="navbar-nav" v-if="this.$store.getters.token == null">
    <li class="nav-item">
      <a class="nav-link" href="#"><router-link class="navbar-brand" to="/login">Login</router-link></a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#"><router-link  class="navbar-brand" to="/signup">Signup</router-link></a>
    </li>
  </ul>
  <ul class="navbar-nav " v-if="this.$store.getters.token !== null">
    <li class="nav-item">
      <a class="nav-link"  href="#"><router-link class="text-white" to="/forum">Forum</router-link></a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#"><router-link class="text-white" to="/profil">Profil</router-link></a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#"><router-link class="text-white" to="/createPost">Créer un article</router-link></a>
    </li>
      <li class="nav-item">
      <a class="nav-link" v-on:click="disconnect()" href="#">Déconnexion</a>
     </li>
  </ul>
  <ul class="navbar-nav " v-if="this.$store.getters.isAdmin === true">
    <li class="nav-item">
      <a class="nav-link" href="#"><router-link class="text-white" to="/category">Ajouté une Catégorie</router-link></a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#"><router-link class="text-white" to="/users">Liste des Utilisateurs</router-link></a>
    </li>
  </ul>
  </div>
</header>
</template>

  
<script>
export default {
  name: "Navbar",
  components: {},
   methods: {
      disconnect: function() {
        this.$store.commit('disconnect');
        this.$router.push({ name:'Login'});
      }
    }
};
</script>

<style lang="scss" scoped>
header {
  overflow: hidden;
  background-color: #333;
  position: fixed; 
  top: 0; 
  width: 100%; 
  z-index: 1;
}
</style>
