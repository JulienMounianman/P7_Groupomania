<template>
     <div class="margin">
       <h1 class="text-center">{{ this.categoryName }}</h1>
      <ul>
      <li clas="col-md-12" v-for="item in listPost" :key="item.id">
      <div class="card">     
      <div class="card-body">
        <h2 class="card-title">{{item.title}}</h2>
        <p class="card-text">{{item.content}}</p>
        <p>{{item.createdAt}}</p>
        <button class="btn btn-info" v-on:click="redirect($event)" :id="item.id">Plus d'info</button>
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
      listPost: [],
      categoryName:""
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
          this.listPost = this.$store.getters.data;
          this.$store.state.url  = "http://localhost:3000/api/category/"
           this.$store.dispatch({type: "getById"}).then(() => {
             this.categoryName = this.$store.getters.data.name;
             console.log(this.categoryName)
           })
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
  margin: auto;
}
.margin {
  margin:auto;
  margin-top: 10%;
}
</style>
