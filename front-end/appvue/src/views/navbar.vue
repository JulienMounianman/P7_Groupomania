<template>
<header class="navbar navbar-expand-sm navbar-dark bg-dark">
   <a class="navbar-brand" href="#">Groupomania</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
  <ul class="navbar-nav mr-auto" >
    <li class="nav-item" v-if="this.$store.getters.token == null">
      <a class="nav-link" href="#"><router-link class="navbar-brand" to="/login">Connexion</router-link></a>
    </li>
    <li class="nav-item" v-if="this.$store.getters.token == null">
      <a class="nav-link" href="#"><router-link  class="navbar-brand" to="/signup">Inscription</router-link></a>
    </li>
    <span v-if="this.$store.getters.token !== null">
      <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Menu
      </a>
      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        <a class="nav-link"  href="#"><router-link  to="/forum">Forum</router-link></a>
        <a class="nav-link" href="#"><router-link  to="/profil">Profil</router-link></a>
        <a class="nav-link" href="#"><router-link  to="/createPost">Créer un article</router-link></a>
        <a class="nav-link text-dark" v-on:click="disconnect()" href="#">Déconnection</a>
      </div>
    </li>
    </span>
    <li class="nav-item dropdown" v-if="this.$store.getters.isAdmin === true">
      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Administration
      </a>
      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        <a class="dropdown-item" href="#"><router-link  to="/createCategory">Ajouter une Catégorie</router-link></a>
        <a class="dropdown-item" href="#"><router-link  to="/listUser">Liste des Utilisateurs</router-link></a>
      </div>
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
  background-color: #333;
  position: fixed; 
  top: 0; 
  width: 100%; 
  z-index: 1;
}
</style>
