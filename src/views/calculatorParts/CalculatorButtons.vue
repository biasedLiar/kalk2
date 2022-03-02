<template>
  <div class="application">
    <h1 class="screen">{{ msg }}</h1>
    <div class="buttonContainer">
      <button class="calcButton" @click="sendGetRequest('c')">C</button> 
      <button class="calcButton"  @click="sendGetRequest('ans')">ANS </button>
      <button class="calcButton"  @click="sendGetRequest('del')">DEL</button>
      <button class="calcButton"  @click="sendGetRequest('+')">+</button>

      <button class="calcButton"  @click="sendGetRequest(1)">1</button>
      <button class="calcButton"  @click="sendGetRequest(2)">2</button>
      <button class="calcButton"  @click="sendGetRequest(3)">3</button>
      <button class="calcButton"  @click="sendGetRequest('-')">-</button>
      
      <button class="calcButton"  @click="sendGetRequest(4)">4</button>
      <button class="calcButton"  @click="sendGetRequest(5)">5</button>
      <button class="calcButton"  @click="sendGetRequest(6)">6</button>
      <button class="calcButton"  @click="sendGetRequest('*')">*</button>
      
      <button class="calcButton"  @click="sendGetRequest(7)">7</button>
      <button class="calcButton"  @click="sendGetRequest(8)">8</button>
      <button class="calcButton"  @click="sendGetRequest(9)">9</button>
      <button class="calcButton"  @click="sendGetRequest('d')">/</button>
      
      <button class="calcButton"  @click="sendGetRequest('dot')">.</button>
      <button class="calcButton"  @click="sendGetRequest(0)">0</button>
      <button class="calcButton" id="equals"  @click="sendGetRequest('equals')">=</button>
    </div>

  
    
  </div>
</template>

<script>
import axios from 'axios'

export default { //work on log
  name: "Calculator",
  data() {
    return {
      msg: 0,
    };
  },
  methods: {
    sendGetRequest(button){
      console.log("REquest sent")
      axios
        .get('http://localhost:8080/Calc/' + button)
        .then(response =>
          this.msg = response.data
          )
        .catch(error => console.log(error))
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.application{
  display: grid;
  grid-template-columns: 500px;
  grid-template-rows: auto;
  align-self: center;
  margin: auto;
  width: 500px;
}
.screen{
  background-color: gray;
  color: beige;
  height: 60px;
  width: 430px;
  font-size: 40px;
}

.buttonContainer{
  display: grid;
  grid-template-columns: repeat(4, 100px);
  grid-template-rows: repeat(5, 50px);
  column-gap: 10px;
  row-gap: 10px;
  align-self: center;
}

.calcButton{
  color: beige;
  background-color: cadetblue;
  font-size: 30px;
}

#equals{
  background-color:gold;
  grid-column: span 2;
  color:black;
}
</style>
