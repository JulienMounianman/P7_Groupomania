<template>
     <div>
      <ul>
      <li clas="col-md-12" v-for="item in this.$store.getters.data" :key="item.id">
      <div class="card">     
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
        this.$store.dispatch({type: "getPostByCategory"}).then(() => {
          console.log(this.$store.getters.data)
        }).catch(() => {
        }); 
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
