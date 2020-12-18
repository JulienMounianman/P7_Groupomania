<template>
    <main class="container">
    <div class="row">
    <PostComponent />
    </div>
  </main>
</template>

<script>

import PostComponent from '@/components/PostComponent.vue'

export default {
  name: 'Post',
  components: {
    PostComponent
  }
}
</script>
