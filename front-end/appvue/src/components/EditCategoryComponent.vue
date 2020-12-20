<template>
  <div class="margin">
    <h1>Modification d'une catégorie</h1>
    <form class="col-md-12" @submit.prevent="editCategory">
      <div class="form-group">
        <label for="title">Name:</label>
        <input class="form-control" type="text" id="name" name="name"  v-model="name" required />
      </div>
      <div class="form-group">
        <label for="content">Description:</label>
      <textarea v-model="description" class="form-control" id="description" name="description" rows="5"></textarea>
      </div>
      <input type="submit" class="btn btn-secondary" value="Editer cette catégorie" />
    </form>
  </div>
</template>

<script>
export default {
  name: "EditCategoryComponent",
  data() {
    return {
      name: "",
      description: "",
      id:0
    };
  },
  mounted() {
    this.$store.state.url  = "http://localhost:3000/api/category/"
    this.$store.dispatch({type: "getById"}).then(() => {
      this.name = this.$store.getters.data.name
      this.description = this.$store.getters.data.description
      this.id = this.$store.getters.data.id
    })
  },
  computed: {},
  methods: {
      editCategory () {
        this.$store.dispatch({
        type: "editCategory", 
        name: this.name,
        description: this.description,
        id: this.id 
        }).then(() => {
            if(this.$store.getters.statusCode == 200) {
                this.$router.push({ name:'Forum'});
            }
        })
      }
  },
};
</script>
<style scoped>
.margin {
  margin:auto;
  margin-top: 10%;
}
</style>
