<template>
    <main class="container">
    <div class="row">
    <CommentComponent />
    </div>
  </main>
</template>

<script>

import CommentComponent from '@/components/CommentComponent.vue'

export default {
  name: 'Comment',
  components: {
    CommentComponent
  }
}
</script>
