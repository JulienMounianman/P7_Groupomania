<template>
     <div>
      <ul>
      <li clas="col-md-12" v-for="item in this.$store.getters.data" :key="item.id">
      <div class="card" v-on:click="redirect($event)" :id="item.id">     
      <div class="card-body">
        <h2 class="card-title">{{item.title}}</h2>
        <p class="card-text">{{item.content}}</p>
      </div>
      </div>
      </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'PostComponent',
  data() {
    return {
    }
  }, 
  mounted() {
    if(this.$store.getters.token == null) {
      this.$router.push({ name:'Login'});
    } 
    else {
      this.$store.state.id = this.$store.getters.categoryId
      this.$store.state.url  = "http://localhost:3000/api/post/category/"
        this.$store.dispatch({type: "getById"}).then(() => {
        }).catch(() => {
        }); 
      }    
    },
    methods: {
      redirect: function(event) {
        this.$store.state.postId = event.currentTarget.id;
        this.$router.push({ name:'Comment'});
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style:none;
}
</style>
