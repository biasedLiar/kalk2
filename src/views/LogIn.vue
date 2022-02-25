<template>
  <div class="home">
    <BaseLogin @loginSubmitted="handleSignin" />
  </div>
  <div v-if="loggedInUnsuccesfully"  data-testid="register-link"> 
    <router-link class="registerLink"  :to="{ name: 'Register' }">Register</router-link>
  </div>
</template>

<script>
import BaseLogin from "../components/BaseLogin.vue";

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
    }
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
