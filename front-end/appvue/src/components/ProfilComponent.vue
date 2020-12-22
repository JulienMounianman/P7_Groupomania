<template>
        <div class="margin col-md-12 card">
            <h1 class="text-center">Profil</h1>
            <form @submit.prevent="editProfil">
                <div>
                    <label for="userName" class="form-label">Prenom</label><br>
                    <input type="text" class="form-control" id="userName" name="userName" v-model="userName" required>
                </div>
                <div>
                    <label for="email" class="form-label">E-mail</label><br>
                    <input type="email" class="form-control" id="email" v-model="email" name="email" required>
                </div>
                <div>
                    <label for="password" class="form-label">Nouveau mot de passe</label><br>
                    <input type="password" class="form-control" id="password" v-model="password" name="password">
                </div>
                <input type="submit"  class="btn btn-secondary" value="Editer" />
                <div v-if="this.edit == true" class="alert alert-success" role="alert">
                    Le Profil a été edité !
                </div>
                  <div class="alert alert-danger"  v-if="this.$store.state.error != ''" role="alert">
                    {{ this.$store.state.error }}
                </div>
            </form>
            <br>
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
    this.$store.state.error = "";
    this.$store.state.statusCodeResponse = 0;  
    this.$store.state.url  = "http://localhost:3000/api/auth/profil"
    this.$store.dispatch({type: "getAll"}).then(() => {
        this.userName = this.$store.getters.data.userName;
        this.email = this.$store.getters.data.email;
        this.id = this.$store.getters.data.id
    })
    },
    methods: {
        editProfil() {
            this.$store.state.error = "";
            this.$store.state.statusCodeResponse = 0;
            this.$store.dispatch({
            type: "editProfil",
            userName: this.userName,
            email: this.email,
            password: this.password
            })
            .then(() => {
                if(this.$store.getters.statusCode == 200) {
                  this.edit = true;
                    setTimeout(() => {
                      this.edit = false;
                    }, 3000);
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
.card {
  width: 100%;
  padding: 2%;
  background-color: #d7d7d7;
  box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.3);
}
</style>
