<template>
  <div id="app">
    <app-header></app-header>
    <router-view/>
    <app-footer></app-footer>
  </div>
</template>
<script>

import Navbar from '@/views/navbar.vue'
import Footer from '@/views/footer.vue'
export default {
    name: 'app',
    components: {
       'app-header': Navbar,
       'app-footer': Footer,
    }
}

</script>
<style>
</style>
