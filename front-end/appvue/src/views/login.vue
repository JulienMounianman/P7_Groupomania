<template>
    <main class="container">
    <div class="row">
    <LoginComponent />
    </div>
  </main>
</template>

<script>

import LoginComponent from '@/components/LoginComponent.vue'

export default {
  name: 'Forum',
  components: {
    LoginComponent
  }
}
</script>

