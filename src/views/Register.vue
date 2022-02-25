<template>
  <div class="home">
  <h1>Register</h1>
    <form @submit.prevent="onSubmit({
      email: this.email,
      emailError: this.emailError,
      name: this.name,
      nameError: this.nameError,
      address: this.address,
      addressError: this.addressError,
      username: this.username,
      userNameError: this.userNameError,
      password: this.password,
      passwordError: this.passwordError,
      phone: this.phone,
      phoneError: this.phoneError,
    })">
      <fieldset>
        <legend>Personal Info</legend>
        <div class="field">
          <BaseInput data-testid="register-name"
            v-model="name"
            label="Full Name"
            type="text"
            :error="nameError"
            
          />
        </div>
        
        <div class="field">
          <BaseInput data-testid="register-email"
            v-model="email"
            label="Email"
            type="text"
            :error="emailError"
          />
        </div>

        <div class="field">
          <BaseInput data-testid="register-address"
            v-model="address"
            label="Address"
            type="text"
            :error="addressError"
          />
        </div>

        <div class="field">
          <BaseInput data-testid="register-username"
            v-model="username"
            label="Username"
            type="text"
            :error="userNameError"
          />
        </div>

        <div class="field">
          <BaseInput data-testid="register-password"
            v-model="password"
            label="Password"
            type="text"
            :error="passwordError"
          />
        </div>

        <div class="field">
          <BaseInput data-testid="register-phone"
            v-model="phone"
            label="Phone"
            type="tel"
            :error="phoneError"
          />
        </div>
        
      </fieldset>

      
      <button type="submit">Submit</button>
    </form>
    <h2 v-if="registered" data-testid="registered">Registered</h2>
  </div>
</template>

<script>
import {useField} from 'vee-validate';
import BaseInput from "../components/BaseInput.vue";

export default {
  name: "Register",
  components: {
    BaseInput
  },
  setup(){
      

      const {value: email, errorMessage: emailError} = useField('email', function (value) {
        if (!value) return 'This field has no value'

        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (!regex.test(String(value).toLowerCase())) {
          return 'Please enter a valid email address'
        }

        return true
      })

      const {value: name, errorMessage: nameError} = useField('name', function (value) {
        if (!value) return 'This field has no value'

        return true
      })

      const {value: address, errorMessage: addressError} = useField('address', function (value) {
        if (!value) return 'This field has no value'

        return true
      })

      const {value: username, errorMessage: userNameError} = useField('username', function (value) {
        if (!value) return 'This field has no value'

        return true
      })

      const {value: password, errorMessage: passwordError} = useField('password', function (value) {
        if (!value) return 'This field has no value'

        return true
      })

      const {value: phone, errorMessage: phoneError} = useField('phone', function (value) {
        if (!value) return 'This field has no value'

        return true
      })


      return {
        email: email,
        emailError: emailError,
        name: name,
        nameError: nameError,
        address: address,
        addressError: addressError,
        username: username,
        userNameError: userNameError,
        password: password,
        passwordError: passwordError,
        phone: phone,
        phoneError: phoneError,


      }
    },
    methods: {
      onSubmit(data){
        console.log(data.emailError + " " +  data.nameError)
        if (!(data.emailError || data.nameError || data.addressError || data.userNameError || data.passwordError || data.phoneError)){
          //Call to db goes here
          this.registered=true
          //alert("Succesfully registered.")
        }
      
      },
    }, 
    data(){
      return {
        registered: false
      }
    }
}
</script>
<style scoped>
.home{
  text-align: left;
  width: 50%;
  margin: auto;
}

fieldset{
  border-width: 0px;
  margin-bottom: 20px;
  padding: 0px;
}

.field{
  margin: 5px;
}
</style>
