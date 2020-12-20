<template>
  <div class="margin">
    <h1>Création d'une catégorie</h1>
    <form class="col-md-12" @submit.prevent="createCategory">
      <div class="form-group">
        <label for="title">Name:</label>
        <input class="form-control" type="text" id="name" name="name"  v-model="name" required />
      </div>
      <div class="form-group">
        <label for="content">Description:</label>
      <textarea v-model="description" class="form-control" id="description" name="description" rows="3"></textarea>
      </div>
      <input type="submit" class="btn btn-secondary" value="Créer cette catégorie" />
    </form>
  </div>
</template>

<script>
export default {
  name: "CreateCategoryComponent",
  data() {
    return {
      name: "",
      description: "",
    };
  },
  mounted() {

  },
  computed: {},
  methods: {
      createCategory () {
        this.$store.dispatch({
        type: "createCategory", 
        name: this.name,
        description: this.description,
        }).then(() => {
            if(this.$store.getters.statusCode == 201) {
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
