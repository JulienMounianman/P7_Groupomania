<template>
    <form class="col-md-12" @submit.prevent="editProfil">
        <div>
            <label for="userName">Prenom</label><br>
            <input type="text" id="userName" name="userName" v-model="userName" required>
        </div>
        <div>
            <label for="email">e-mail</label><br>
            <input type="email" id="email" v-model="email" name="email" required>
        </div>
        <br>
        <input type="submit"  class="btn btn-secondary" value="Editer" />
        <div v-if="this.edit" class="alert alert-success" role="alert">
            Le Profil a été edité !
        </div>
    </form>
</template>

<script>
export default {
  name: 'ProfilComponent',
  data() {
    return { 
      userName: '',
      email:'',
      password: '',     
      edit: false
    }
  }, 
  mounted() {         
    this.$store.state.url  = "http://localhost:3000/api/auth/profil"
    this.$store.dispatch({type: "getAll"}).then(() => {
        console.log(this.$store.getters.data);
        this.userName = this.$store.getters.data.userName;
        this.email = this.$store.getters.data.email;
    })
    },
    methods: {
        editProfil() {
            this.$store.dispatch({
            type: "editProfil",
            userName: this.userName,
            email: this.email
            })
            .then(() => {
                console.log(this.$store.getters.statusCode);
                if(this.$store.getters.statusCode == 200) {
                    this.edit = true;
                }
            })
        }
    },
  }
</script>

<style scoped>
</style>
