<template>
     <div class="margin cardtest">
       <h1 class="text-center">{{ this.categoryName }}</h1>
      <div clas="col-md-12" v-for="item in allPostInfo" :key="item.id">
      <div class="card">     
      <div class="card-body">
        <h2 class="card-title">{{item.title}}</h2>
        <p class="card-text">{{item.content}}</p>
        <p>{{item.createdAt}} By {{ item.userName}}</p>
        <button class="btn btn-info" v-on:click="redirect($event)" :id="item.id">Plus d'info</button>
        <button v-if="item.userId == item.currentUserId || item.isAdmin == true" class="btn btn-danger" v-on:click="deletePost($event)" :id="item.id">Supprimer</button>
      </div>
      </div>
      </div>
      <div v-if="this.listPost.length === 0" class="alert alert-info" role="alert">
          Il n'y a aucun article dans cette catégorie
      </div>
    </div>
</template>

<script>
const dateFormat = require("dateformat");
export default {
  name: 'PostComponent',
  data() {
    return {
      listPost: [],
      categoryName:"",
      allPostInfo: []
    }
  }, 
  mounted() {
      this.$store.state.id = this.$store.getters.categoryId
      this.$store.state.url  = "http://localhost:3000/api/post/category/"
        this.$store.dispatch({type: "getById"}).then(() => {
          this.listPost = this.$store.getters.data;
          this.$store.state.url  = "http://localhost:3000/api/category/"
           this.$store.dispatch({type: "getById"}).then(() => {
             this.categoryName = this.$store.getters.data.name;
           })
        }).catch(() => {
        }); 

      this.$store.state.url = "http://localhost:3000/api/auth/profil/";
      this.$store
        .dispatch({ type: "getAll" })
        .then(() => {       
          this.listPost.forEach(postInfo => {
            const postObject = {
              id: postInfo.id,
              title: postInfo.title,
              content: postInfo.content,
              createdAt: dateFormat(postInfo.createdAt),
              updatedAt: dateFormat(postInfo.updatedAt),
              userId: postInfo.userId,
              currentUserId: this.$store.getters.data.id,
              userName: this.$store.getters.data.id === postInfo.userId ? this.$store.getters.data.userName : "test",
              isAdmin: this.$store.getters.isAdmin
            }
            this.allPostInfo.push(postObject)
          });
        })    
    },
    methods: {
      redirect: function(event) {
        this.$store.state.postId = event.currentTarget.id;
        this.$router.push({ name:'Comment'});
      },
       deletePost: function(event) {
        this.$store.state.url = "http://localhost:3000/api/post/"
        this.$store.dispatch({
          type: "delete",
          id: event.currentTarget.id
          }).then(() => {
            this.$router.go()
        })
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
.cardtest {
  width: 100%;
  padding: 2%;
  background-color: #d7d7d7;
  box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.3);
}
.card {
   background-color: #d3d3d3;
   margin-top: 1%;;
}
button {
  margin-right: 1%;
}
</style>
