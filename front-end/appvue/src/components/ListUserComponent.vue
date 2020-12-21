<template>
   <div class="margin">
     <h1 class="text-center">Liste des Utilisateurs</h1>
      <ul>
      <li class="col-md-12" v-for="item in this.$store.getters.data" :key="item.id">
      <div class="card"  >     
      <div class="card-body">
        <h2 class="card-title">{{item.userName}}</h2>
        <p class="card-text">{{item.email}}</p>
        <p class="card-text">{{item.createdAt}}</p>
        <button class="btn btn-primary" :id="item.id" v-on:click="deleteUser($event)" >Supprimer</button>
      </div>
      </div>
      </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'ListUserComponent',
  data() {
    return {
    }
  }, 
  mounted() {
      if(localStorage.getItem('token') == "") {
        this.$router.push({ name:'Login'});
      } else {
        this.$store.state.url  = "http://localhost:3000/api/auth/users"
        this.$store.dispatch({type: "getAll"}).then(() => {
        })
      }
    },
    methods: {
      deleteUser: function(event) {
        this.$store.state.categoryId = event.currentTarget.id;
        this.$router.push({ name:'Post'});
      },
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
