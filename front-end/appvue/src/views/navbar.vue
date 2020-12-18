<template>
<nav class="navbar navbar-expand-sm navbar-dark bg-dark">
   <a class="navbar-brand" href="#">Groupomania</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
  <ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link" href="#"><router-link class="navbar-brand" to="/login">Login</router-link></a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#"><router-link  class="navbar-brand" to="/signup">Signup</router-link></a>
    </li>
    <li  v-if="this.$store.getters.token !== ''" class="nav-item">
      <a class="nav-link" href="#"><router-link  class=" text-white navbar-brand" to="/forum">Forum</router-link></a>
    </li>
  </ul>
  </div>
</nav>
</template>

  
<script>
export default {
  name: "Navbar",
  components: {},
};
</script>

<style lang="scss" scoped>

</style>
