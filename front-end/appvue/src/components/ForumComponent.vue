<template>
   <div class="margin">
     <h1 class="text-center">Forum</h1>
      <ul>
      <li class="col-md-12" v-for="item in this.$store.getters.data" :key="item.id">
      <div class="card"  >     
      <div class="card-body">
        <h2 class="card-title">{{item.name}}</h2>
        <p class="card-text">{{item.description}}</p>
        <button class="btn btn-primary" :id="item.id" v-on:click="redirect($event)" >Voir les articles</button>
        <button class="btn btn-warning" :id="item.id" v-on:click="editCategory($event)" > Editer </button>
      </div>
      </div>
      </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'ForumComponent',
  data() {
    return {
    }
  }, 
  mounted() {
      if(localStorage.getItem('token') == "") {
        this.$router.push({ name:'Login'});
      } else {
        this.$store.state.url  = "http://localhost:3000/api/category/"
        this.$store.dispatch({type: "getAll"}).then(() => {
        })
      }
    },
    methods: {
      redirect: function(event) {
        this.$store.state.categoryId = event.currentTarget.id;
        this.$router.push({ name:'Post'});
      },
      editCategory: function(event) {
        this.$store.state.categoryId = event.currentTarget.id;
        this.$router.push({ name:'editCategory'});
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style:none;
}
.margin {
  margin:auto;
  margin-top: 10%;
}
button {
  margin: 1% 1% 1% 1%;
}
</style>
