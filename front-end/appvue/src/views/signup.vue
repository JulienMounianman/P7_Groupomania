<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <SignupComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import SignupComponent from '@/components/SignupComponent.vue'

export default {
  name: 'Signup',
  components: {
    SignupComponent
  }
}
</script>
