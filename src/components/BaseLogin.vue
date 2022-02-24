<template>
  <div id="loginContainer">
    <div id="loginTitle">
        <label>{{loggedInUnsuccesfully}} login!</label>
    </div>
    <input><input>
    <div id="username">
        <label id="usernameLabel">Username:</label>
        <textarea v-model="username" data-testid="username-input"></textarea>
      </div>
      <div id="password">
        <label id="passwordLabel">Password: </label>
        <textarea v-model="password" data-testid="password-input"></textarea>
        <button type="submit" v-on:click="handleClickSignin">Sign in</button>
      </div>
      <div v-if="loggedInUnsuccesfully"  data-testid="register-link">
        <router-link class="registerLink"  :to="{ name: 'Register' }">Register</router-link>

      </div>
  </div>
  
</template>


<script>
export default {
  methods: {
    handleClickSignin (){
      this.loggedInUnsuccesfully = true
      /*
      if (this.logInInfoCorrect()){
        this.$store.dispatch('logInAs', this.username)
      } else{
        this.loggedInUnsuccesfully = true
        console.log("failed")
      }*/
    },
    logInInfoCorrect(){
      if (this.username === this.$store.state.username && this.password === this.$store.state.password) {
        return true;
      }
      return false;
    }
  },
  data() {
    return {
      username: '',
      password: '',
      newField: '',
      loggedInUnsuccesfully: false,
    }
  }

}
</script>

<style scoped>
#loginContainer {
    display: grid;
    justify-content: center;
    margin: 40px;
}

#loginTitle, .registerLink {
  font-size: x-large;
  font-weight: bold;
  margin-bottom: 20px;
}

.registerLink{
  color: aquamarine;
}

#username, #password {
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 20px;
}

#usernameLabel, #passwordLabel {
    width: 100px;
}

</style>
