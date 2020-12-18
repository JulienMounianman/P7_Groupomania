<template>
     <div>
      <ul>
        <li clas="col-md-12" v-for="item in this.datatest" :key="item.id">
            <div class="card">     
                <div class="card-body">
                  <h2 class="card-title"  id="item.id"> {{ item.userName }}</h2>
                  <p class="card-text">{{item.content}}</p>
                </div>
            </div>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'CommentComponent',
  data() {
    return {
      name: "",
      dataPost: [],
      dataUser: [],
      datatest: []
    }
  }, 
  mounted() {
    if(this.$store.getters.token == null) {
      this.$router.push({ name:'Login'});
    } 
    else {
        this.$store.dispatch({type: "getCommentByPost"}).then(() => {
          this.$store.getters.data.forEach(element => {
            this.dataPost.push(element)
          });
          this.dataPost.forEach(e => {
            this.$store.state.id = e.userId
            this.$store.state.url  = "http://localhost:3000/api/auth/profile/"
            this.$store.dispatch({type: "getById"}).then(() => {
              const PostUser = new Object({
                content: e.content,
                userName: this.$store.getters.data.userName
              })
              this.datatest.push(PostUser)
              this.dataUser.push(this.$store.getters.data.userName)
            })
          })
        }).catch(() => {
        }); 
        console.log(this.datatest)
      }    
    },

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style:none;
}
</style>
