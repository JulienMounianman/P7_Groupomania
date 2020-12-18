<template>
<nav class="navbar navbar-expand-sm bg-dark">
  <!-- Links -->
  <ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link" href="#"><router-link class=" text-white navbar-brand" to="/login">Login</router-link></a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#"><router-link  class=" text-white navbar-brand" to="/signup">Signup</router-link></a>
    </li>
    <li  v-if="this.$store.getters.token !== ''" class="nav-item">
      <a class="nav-link" href="#"><router-link  class=" text-white navbar-brand" to="/forum">Forum</router-link></a>
    </li>
  </ul>

</nav>
</template>

  
<script>
export default {
  name: "Navbar",
  components: {},
};
</script>

<style lang="scss" scoped></style>
