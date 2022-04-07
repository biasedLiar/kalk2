<template>
  <div id="app">
    
    <div id="nav">
      <p v-if="user">Logged in as {{user}} </p>
      <router-link v-else :to="{ name: 'LogIn' }">Log In</router-link>
      <router-link :to="{ name: 'Home' }" v-if="loggedIn">Home</router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  computed: {
    user(){
      return this.$store.state.user;
    },
    loggedIn(){
      return this.$store.state.loggedIn;
    }
  }

}
</script>
<style>
body{
  
  background-color: navy;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color:aquamarine;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: white;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
