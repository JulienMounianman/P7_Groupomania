<template>
  <form class="col-md-12" @submit.prevent="createPost">
    <div class="form-group">
      <label for="title">Title:</label>
      <input
        class="form-control"
        type="text"
        id="title"
        name="title"
        v-model="title"
        required
      />
    </div>
    <div class="form-group">
      <label for="content">Contenu:</label>
     <textarea v-model="content" class="form-control" id="content" name="content" rows="3"></textarea>
    </div>
    <div class="form-group">
      <label for="exampleFormControlSelect1">Categorie:</label>
      <select class="form-control" id="exampleFormControlSelect1" @change="category($event)" >
        <option v-for="item in this.Allcategory " :key="item.id" :id="item.id"  >{{ item.name }}</option>
      </select>
    </div>
    <input type="submit" class="btn btn-secondary" value="Créer ce Post" />
  </form>
</template>

<script>
export default {
  name: "CreatePostComponent",
  data() {
    return {
      title: "",
      content: "",
      password: "",
      Allcategory: [],
      categoryId: ""
    };
  },
  mounted() {
    this.$store.state.url = "http://localhost:3000/api/category/";
    this.$store.dispatch({ type: "getAll" }).then(() => {
    this.Allcategory = this.$store.getters.data 
    this.categoryId = this.Allcategory[0].id
    });
  },
  computed: {},
  methods: {
      category: function(event) {
        console.log(event.target.value)
        this.Allcategory.forEach(element => {
          if(element.name == event.target.value) {
            this.categoryId = element.id          
          }
        });
      },
      createPost () {
        this.$store.dispatch({
        type: "createPost", 
        title: this.title,
        content: this.content,
        categoryId: this.categoryId
        }).then(() => {
            if(this.$store.getters.statusCode == 201) {
                this.$store.state.categoryId = this.categoryId;
                this.$router.push({ name:'Post'});
            }
        })
      }
  },
};
</script>
<style scoped></style>
