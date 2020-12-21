<template>
  <main class="container">
    <div class="row">
    <ListUser />
    </div>
  </main>
</template>

<script>

import ListUser from '@/components/ListUserComponent.vue'

export default {
  name: 'ListUserComponent',
  components: {
    ListUser
  }
}
</script>
