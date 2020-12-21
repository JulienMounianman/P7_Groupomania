<template>
        <div class="margin col-md-12">
            <h1 class="text-center">Profil</h1>
            <form @submit.prevent="editProfil">
                <div>
                    <label for="userName" class="form-label">Prenom</label><br>
                    <input type="text" class="form-control" id="userName" name="userName" v-model="userName" required>
                </div>
                <div>
                    <label for="email" class="form-label">e-mail</label><br>
                    <input type="email" class="form-control" id="email" v-model="email" name="email" required>
                </div>
                <br>
                <input type="submit"  class="btn btn-secondary" value="Editer" />
                <div v-if="this.edit" class="alert alert-success" role="alert">
                    Le Profil a été edité !
                </div>
            </form>
            <button v-on:click="deleteAccount($event)" :id="id" class="btn btn-danger">Supprimer le compte</button>
        </div>
</template>

<script>
export default {
  name: 'ProfilComponent',
  data() {
    return { 
      userName: '',
      email:'',
      password: '',     
      id:0,
      edit: false
    }
  }, 
  mounted() {         
    this.$store.state.url  = "http://localhost:3000/api/auth/profil"
    this.$store.dispatch({type: "getAll"}).then(() => {
        this.userName = this.$store.getters.data.userName;
        this.email = this.$store.getters.data.email;
        this.id = this.$store.getters.data.id
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
        },
        deleteAccount: function(event) {
        this.$store.state.url = "http://localhost:3000/api/auth/user/"
        this.$store.dispatch({
          type: "delete",
          id: event.currentTarget.id
          }).then(() => {
            this.$store.commit('disconnect');
            this.$router.push({ name:'Login'});
        })
      }
    },
  }
</script>

<style scoped>
.margin {
    margin:auto;
    margin-top: 10%;
}
</style>
