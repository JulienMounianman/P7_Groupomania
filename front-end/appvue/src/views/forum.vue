<template>
  <div class="forum">
    <h1>forum</h1>
    <ForumComponent />
  </div>
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
