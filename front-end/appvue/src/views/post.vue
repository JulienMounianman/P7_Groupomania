<template>
  <div class="post">
    <h1>Post</h1>
    <PostComponent />
  </div>
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
