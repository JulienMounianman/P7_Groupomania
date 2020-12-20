<template>
    <main class="container">
    <div class="row">
    <Create />
    </div>
  </main>
</template>

<script>

import Create from '@/components/CreatePostComponent.vue'

export default {
  name: 'CreatePost',
  components: {
    Create
  }
}
</script>
