<template>
  <div id="loginContainer">
    <div id="loginTitle">
        <label>Please login!</label>
    </div>
    <div id="username">
        <label id="usernameLabel">Username:</label>
        <textarea v-model="username" data-testid="username-input"></textarea>
      </div>
      <div id="password">
        <label id="passwordLabel">Password: </label>
        <textarea v-model="password" data-testid="password-input"></textarea>
        <button type="submit" v-on:click="handleClickSignin">Sign in</button>
      </div>
      
  </div>
  
</template>


<script>
export default {
  
  data() {
    return {
      username: '',
      password: '',
      newField: '',
    }
  },
  emits: ['loginSubmitted'],
  methods: {
    handleClickSignin(){
      this.$emit('loginSubmitted', {username: this.username, password: this.password})
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

#loginTitle {
  font-size: x-large;
  font-weight: bold;
  margin-bottom: 20px;
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
