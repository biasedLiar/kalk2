<template>
  <div class="home">
    <BaseLogin @loginSubmitted="submitData" />
  </div>
</template>

<script>
import BaseLogin from "../components/BaseLogin.vue";
import APIService from "../services/APIService.js";

export default {
  name: "LogIn",
  components: {
    BaseLogin
  },
  methods: {
    handleSignin (data){
      
      if (this.logInInfoCorrect( data.username, data.password)){
        this.$store.dispatch('logInAs', data.username)
      } else{
        this.loggedInUnsuccesfully = true
      }
    },
    logInInfoCorrect(username, password){
      if (username === this.$store.state.username && password === this.$store.state.password) {
        return true;
      }
      return false;
    },
    submitData(data) {
      APIService.getToken(data.username, data.password)
        .then((response) => {
          console.log(response.data);

          if (response.data == "Access denied, wrong credentials....") {
            return alert("Wrong username/password");
          }
          this.$store.dispatch("logInAs", {
            token: response.data[0],
            user: response.data[1],
          });
          this.$router.push("/");
        })
        .catch((error) => console.log(error));
      console.log("test");
    },
  },
  data(){
    return {
      
      loggedInUnsuccesfully: false,
    }
  }
};
</script>
<style scoped>

.registerLink{
  color: aquamarine;
   font-size: x-large;
  font-weight: bold;
  margin-bottom: 20px;
}

</style>
