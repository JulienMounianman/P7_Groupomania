<template>
    <main class="container">
    <div class="row">
    <Create />
    </div>
  </main>
</template>

<script>

import Create from '@/components/CreateCategoryComponent.vue'

export default {
  name: 'CreateCategory',
  components: {
    Create
  }
}
</script>
