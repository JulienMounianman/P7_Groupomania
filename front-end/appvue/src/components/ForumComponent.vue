<template>
   <div>
      <h3>Réponse de l'api:</h3>
      <ul id="example-1">
      <li v-for="item in this.$store.getters.data" :key="item.id">
         <button v-on:click="redirect($event)" :id="item.id">{{item.name}}</button>
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
      this.$store.dispatch({type: "getAllCategories"}).then(() => {
        console.log(this.$store.getters.data)
      }).catch(() => {
      }); 
    },
    methods: {
      redirect: function(event) {
        this.$store.state.id = event.currentTarget.id;
        this.$router.push({ name:'Post'});
      }
    },
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
