<template>
  <main class="container">
    <div class="row">
    <ForumComponent />
    </div>
  </main>
</template>

<script>

import ForumComponent from '@/components/ForumComponent.vue'

export default {
  name: 'Forum',
  components: {
    ForumComponent
  }
}
</script>
