<template>
   <div>
      <ul id="example-1">
      <li v-for="item in this.$store.getters.data" :key="item.id">
        {{ item.title }}
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
