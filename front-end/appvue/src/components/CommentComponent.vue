<template>
     <div>
       <div>
        <form class="text-center" @submit.prevent="Postcomment">
          <div>
          <label for="comment">Ecrire un commentaire:</label><br>
          <textarea class="margin" name="comment" cols="50" rows="5" v-model="content"></textarea>
          </div>
          <input type="submit" class="btn btn-secondary" value="Envoyer" />
        </form>
      </div>
      <div>
        <ul>
          <li class=" margin col-md-12" v-for="item in this.datatest" :key="item.id">
              <div class="card">     
                  <div class="card-body">
                    <h2 class="card-title"  id="item.id"> {{ item.userName }}</h2>
                    <p class="card-text">{{item.content}}</p>
                  </div>
              </div>
          </li>
        </ul>
      </div>
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
      saveId:0
    }
  }, 
  mounted() {
    console.log(this.$store.getters.postId);
    if(this.$store.getters.token == null) {
      this.$router.push({ name:'Login'});
    } 
    else {
        this.$store.state.id = this.$store.getters.postId
        this.$store.state.url  = "http://localhost:3000/api/comment/post/"
        this.$store.dispatch({type: "getById"}).then(() => {
          this.$store.getters.data.forEach(element => {
            this.dataPost.push(element)
          });
          this.dataPost.forEach(e => {
            this.$store.state.id = e.userId
            this.$store.state.url  = "http://localhost:3000/api/auth/profil/"
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
.margin {
  margin: auto;
}
</style>
