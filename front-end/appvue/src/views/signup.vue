<template>
  <main class="container">
    <div class="row">
    <SignupComponent />
    </div>
  </main>
</template>

<script>

import SignupComponent from '@/components/SignupComponent.vue'

export default {
  name: 'Signup',
  components: {
    SignupComponent
  }
}
</script>
