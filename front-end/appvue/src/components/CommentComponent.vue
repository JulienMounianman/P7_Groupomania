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
      <form class="col-md-12" @submit.prevent="Postcomment">
        <label for="comment">Ecrire un commentaire</label><br>
        <textarea name="comment" cols="30" rows="10" v-model="content"></textarea>
        <input type="submit" value="Envoyer" />
    </form>
     </div>
</template>

<script>
export default {
  name: 'CommentComponent',
  data() {
    return {
      content: "",
      dataPost: [],
      dataUser: [],
      datatest: [],
      postId: 0
    }
  }, 
  mounted() {
    this.postId = this.$store.getters.id
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
      }    
    },
    methods: {
      Postcomment () {
        this.$store.state.id = this.postId
        console.log(this.postId)
        console.log(this.content)
        this.$store.dispatch({
          type: "Postcomment", 
          content: this.content,
          }).then(() => {
            if(this.$store.getters.statusCode == 201) {
              console.log(true)
            }
          })
          
      } 
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style:none;
}
</style>
