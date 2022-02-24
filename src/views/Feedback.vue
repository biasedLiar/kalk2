<template>
  <div class="Feedback">
    <h1>Feedback about the calculator</h1>
    <form @submit.prevent="onSubmit({
      email: this.email,
      emailError: this.emailError,
      name: this.name,
      nameError: this.nameError,
      message: this.message,
      messageError: this.messageError,
      status: this.status
    })">
      <fieldset>
        <legend>Personal Info</legend>
        <div class="field">
          <BaseInput
            v-model="name"
            label="Name"
            type="text"
            :error="nameError"
            
          />
        </div>
        
        <div class="field">
          <BaseInput
            v-model="email"
            label="Email"
            type="text"
            :error="emailError"
          />
        </div>
        
      </fieldset>
      

      <fieldset>
        <legend>Feedback</legend>
        <div class="field">
          <BaseTextArea
            v-model="message"
            label="Message"
            type="text"
            :error="messageError"
          />
        </div>
        
      </fieldset>
      
      
      <button type="submit">Submit</button>
      <p> {{status}} </p>
    </form>
  </div>
</template>

<script>
import {useField} from 'vee-validate';

export default {
  name: "Feedback",
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

      const {value: message, errorMessage: messageError} = useField('message', function (value) {
        if (!value) return 'This field has no value'

        return true
      })


      return {
        email: email,
        emailError: emailError,
        name: name,
        nameError: nameError,
        message: message,
        messageError: messageError,


      }
    },
    created(){
      this.checkForMessage()
    },
    data(){
      return{
      }
    },
    computed: {
      status(){
        return this.$store.state.status
      }
    },
    methods: {
      onSubmit(data){
        if (!(data.emailError || data.nameError || data.messageError)){
          this.$store.dispatch('sendFeedback', {email: data.email, name: data.name, message: data.message})
        }
      
      },
      checkForMessage(){
        if(this.$store.state.name){
          this.name = this.$store.state.name
          this.email = this.$store.state.email
        }
      }
    },
    mounted(){
    }
}
</script>
<style scoped>
.Feedback{
  text-align: left;
  width: 30%;
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