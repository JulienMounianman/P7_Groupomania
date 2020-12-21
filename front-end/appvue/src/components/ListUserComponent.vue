<template>
   <div class="margin cardtest">
     <h1 class="text-center">Liste des Utilisateurs</h1>
      <div class="col-md-12" v-for="item in dataUsers" :key="item.id">
      <div class="card"  >     
      <div class="card-body">
        <h2 class="card-title">{{item.userName}}</h2>
        <p class="card-text">{{item.email}}</p>
        <p class="card-text">{{item.createdAt}}</p>
        <button class="btn btn-primary" :id="item.id" v-on:click="deleteUser($event)" >Supprimer</button>
      </div>
      </div>
      </div>
    </div>
</template>

<script>
const dateFormat = require("dateformat");
export default {
  name: 'ListUserComponent',
  data() {
    return {
      dataUsers: []
    }
  }, 
  mounted() {
      this.$store.state.url  = "http://localhost:3000/api/auth/users"
      this.$store.dispatch({type: "getAll"}).then(() => {
        this.$store.getters.data.forEach(user => {
          const usersObject = {
            id: user.id,
            userName: user.userName,
            email: user.email,
            createdAt: dateFormat(user.createdAt),
            updatedAt: dateFormat(user.updatedAt)
          }
          this.dataUsers.push(usersObject)
        }); 
      })
    },
    methods: {
      deleteUser: function(event) {
        this.$store.state.url = "http://localhost:3000/api/auth/user/"
        this.$store.dispatch({
          type: "delete",
          id: event.currentTarget.id
          }).then(() => {
            this.$router.go()
        })
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
</style>
