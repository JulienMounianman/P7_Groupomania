<template>
   <div>
      <h3>Réponse de l'api:</h3>
      <p>{{ error }}</p>
      <ul id="example-1">
      <li v-for="item in this.response" :key="item.id">
         <button v-on:click="redirect($event)" :id="item.id">{{item.name}}</button>
      </li>
      </ul>
    </div>
</template>

<script>
import axios from "axios"
export default {
  name: 'ForumComponent',
  data() {
    return {
      token: this.$route.params.token,
      response: "",
      error: "",
    }
  }, mounted() {
      axios
        .get('http://localhost:3000/api/category/',{
          headers: {
            'Authorization': 'Bearer ' + this.token
          }
        })
        .then(response => {
          this.response = response.data;
        })
        .catch(error => {
        this.error = error
      })
    },
    methods: {
      redirect: function(event) {
        this.$router.push({ name:'Post', params: {token: this.token, categoryId: event.currentTarget.id } });
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
