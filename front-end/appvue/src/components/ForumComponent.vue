<template>
   <div>
      <ul>
      <li  clas="col-md-12" v-for="item in this.$store.getters.data" :key="item.id">
      <div class="card"  v-on:click="redirect($event)" :id="item.id" >     
      <div class="card-body">
        <h2 class="card-title">{{item.name}}</h2>
        <p class="card-text">{{item.description}}</p>
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
      if(this.$store.getters.token == "") {
        this.$router.push({ name:'Login'});
      } else {
        this.$store.dispatch({type: "getAllCategories"}).then(() => {
        console.log(this.$store.getters.data)
        }).catch(() => {
        }); 
      }
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
