<template>
   <div>
      <ul id="example-1">
      <li v-for="item in response" :key="item.id">
        {{ item.title }}
      </li>
      </ul>
    </div>
</template>

<script>
import axios from "axios"
export default {
  name: 'PostComponent',
  data() {
    return {
      token: this.$route.params.token,
      categoryId: this.$route.params.categoryId,
      response: "",
      error: ""
    }
  }, mounted() {
    if(this.token == null) {
      this.$router.push({ name:'Login'});
    } 
    else {
        axios
          .get('http://localhost:3000/api/post/category/' + this.categoryId,{
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
