<template>
  <div class="margin">
    <div v-if="this.edit === false && allPostInfo.isAdmin === false">
      <h1 class="text-center">{{ allPostInfo.title }}</h1>
      <div class="card">
        <div class="card-body">
          <h2 class="card-title" id="item.id">{{ allPostInfo.title }}</h2>
          <p class="card-text">{{ allPostInfo.content }}</p>
          <span
            >Crée par : {{ allPostInfo.userName }}, le
            {{ allPostInfo.createdAt }} modifié le : {{ allPostInfo.updatedAt }}
          </span>
        </div>
      </div>
    </div>
    <div v-if="this.edit === true || allPostInfo.isAdmin === true">
      <h1 class="text-center">{{ allPostInfo.title }}</h1>
      <form class="col-md-12" @submit.prevent="editPost">
        <div class="form-group">
          <label for="title">Title:</label>
          <input
            class="form-control"
            type="text"
            id="title"
            name="title"
            v-model="allPostInfo.title"
            required
          />
        </div>
        <div class="form-group">
          <label for="content">Contenu:</label>
          <textarea
            v-model="allPostInfo.content"
            class="form-control"
            id="content"
            name="content"
            rows="3"
          ></textarea>
        </div>
        <div class="form-group">
          <label for="exampleFormControlSelect1">Categorie:</label>
          <select
            class="form-control"
            id="exampleFormControlSelect1"
            @change="category($event)"
          >
            <option
              v-for="item in this.Allcategory"
              :key="item.id"
              :id="item.id" 
              >{{ item.name }}</option
            >
          </select>
        </div>
        <input type="submit" class="btn btn-secondary" value="Editer ce Post" />
      </form>
    </div>
    <br>
    <div>
      <form class="text-center" @submit.prevent="Postcomment">
        <div>
          <label for="comment">Ecrire un commentaire:</label><br />
          <textarea
            class="margin"
            name="comment"
            cols="50"
            rows="5"
            v-model="content"
          ></textarea>
        </div>
        <input type="submit" class="btn btn-secondary" value="Envoyer" />
      </form>
    </div>
    <div>
      <ul>
        <li
          class=" margin col-md-12"
          v-for="item in this.allCommentInfo"
          :key="item.id"
        >
          <div class="card">
            <div class="card-body">
              <h2 class="card-title" id="item.id">{{ item.userName }}</h2>
              <p class="card-text">{{ item.content }}</p>
              <button v-if="item.userId === item.currentUser" class="btn btn-danger" :id="item.idComment" v-on:click="delete_Comment($event)">supprimer</button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommentComponent",
  data() {
    return {
      content: "",
      dataComment: [],
      dataUser: [],
      dataPost: {},
      allCommentInfo: [],
      allPostInfo: {},
      saveId: 0,
      edit: false,
      editTitle: "",
      editContent: "",
      Allcategory: [],
      selected: false,
      categoryId: 0,
      deleteComment:false,
      currentUser:0
    };
  },
  mounted() {
    if (this.$store.getters.token == null) {
      this.$router.push({ name: "Login" });
    } else {
      this.$store.state.id = this.$store.getters.postId;
      this.$store.state.url = "http://localhost:3000/api/post/";
      this.$store.dispatch({ type: "getById" }).then(() => {
        this.dataPost = this.$store.getters.data;
        this.$store.state.id = this.dataPost.userId;
        this.$store.state.url = "http://localhost:3000/api/auth/profil/";
        this.$store.dispatch({ type: "getById" }).then(() => {
          this.allPostInfo = {
            id: this.dataPost.id,
            title: this.dataPost.title,
            content: this.dataPost.content,
            userName: this.$store.getters.data.userName,
            updatedAt: this.dataPost.updatedAt,
            createdAt: this.dataPost.createdAt,
            categoryId: this.dataPost.categoryId,
            userId: this.$store.getters.data.userId,
            isAdmin: this.$store.getters.isAdmin
          }
        })
      })

      this.$store.state.url = "http://localhost:3000/api/auth/profil/";
      this.$store
        .dispatch({ type: "getAll" })
        .then(() => {
          this.currentUser = this.$store.getters.data.id
          if (this.dataPost.userId == this.currentUser) {
            this.edit = true      
          }
        })
        .then(() => {
          if (this.edit === true || this.$store.getters.data.isAdmin === true) {
            this.$store.state.url = "http://localhost:3000/api/category/";
            this.$store.dispatch({ type: "getAll" })
              .then(() => {
                this.Allcategory = this.$store.getters.data;
              })
              .then(() => {
                this.Allcategory.forEach((e) => {
                  if (e.id == this.dataPost.categoryId) {
                    const attr = document.getElementById(this.dataPost.categoryId);
                    attr.setAttribute('selected', 'selected')
                    this.categoryId = this.dataPost.categoryId;
                  }
                })
              });
          }
        });

      this.$store.state.url = "http://localhost:3000/api/comment/post/";
      this.$store
        .dispatch({ type: "getById" })
        .then(() => {
          this.$store.getters.data.forEach((element) => {
            this.dataComment.push(element);
          });
          this.dataComment.forEach((e) => {
            this.$store.state.id = e.userId;
            this.$store.state.url = "http://localhost:3000/api/auth/profil/";
            this.$store.dispatch({ type: "getById" }).then(() => {
              const Comment_user = new Object({
                idComment:  e.id,
                content: e.content,
                userName: this.$store.getters.data.userName,
                userId: e.userId,
                currentUser: this.currentUser
              });
              this.allCommentInfo.push(Comment_user);
              this.dataUser.push(this.$store.getters.data.userName);
            });
          });
        })
        .catch(() => {});
    }
  },
  methods: {
    Postcomment() {
      this.$store.state.id = this.$store.getters.postId;
      this.$store
        .dispatch({
          type: "Postcomment",
          content: this.content,
        })
        .then(() => {
          if (this.$store.getters.statusCode == 201) {
            this.$router.go();
          }
        });
    },
    category: function(event) {
        console.log(event.target.value)
        this.Allcategory.forEach(element => {
          if(element.name == event.target.value) {
            this.categoryId = element.id          
          }
        });
      },
      editPost () {
        this.$store.dispatch({
        type: "editPost", 
        title: this.allPostInfo.title,
        content: this.allPostInfo.content,
        postId: this.allPostInfo.id,
        categoryId: this.categoryId
        }).then(() => {
              this.$store.state.categoryId = this.categoryId;
              this.$router.push({ name:'Post'})
        })
      },
      delete_Comment: function(event) {
        this.$store.state.url = "http://localhost:3000/api/comment/"
        this.$store.dispatch({
          type: "delete",
          id: event.currentTarget.id
          }).then(() => {
            this.$router.go()
        })
      }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style: none;
}
.margin {
  margin:auto;
  margin-top: 10%;
}
</style>
