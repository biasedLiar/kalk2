<template>
  <div class="application">
    <h1 class="screen" v-if="isNumber">{{ msg }}</h1>
    <h1 class="screen" v-else>error</h1>
    <div class="buttonContainer">
      <button class="calcButton" @click="totalReset">C</button> 
      <button class="calcButton"  @click="ansPushed">ANS </button>
      <button class="calcButton"  @click="del">DEL</button>
      <button class="calcButton"  @click="setOperation((n1, n2) => n1 + n2, false, '+')">+</button>

      <button class="calcButton"  @click="numbWritten(1)">1</button>
      <button class="calcButton"  @click="numbWritten(2)">2</button>
      <button class="calcButton"  @click="numbWritten(3)">3</button>
      <button class="calcButton"  @click="setOperation((n1, n2) => n1 - n2, false, '-')">-</button>
      
      <button class="calcButton"  @click="numbWritten(4)">4</button>
      <button class="calcButton"  @click="numbWritten(5)">5</button>
      <button class="calcButton"  @click="numbWritten(6)">6</button>
      <button class="calcButton"  @click="setOperation((n1, n2) => n1 * n2, false, '*')">*</button>
      
      <button class="calcButton"  @click="numbWritten(7)">7</button>
      <button class="calcButton"  @click="numbWritten(8)">8</button>
      <button class="calcButton"  @click="numbWritten(9)">9</button>
      <button class="calcButton"  @click="setOperation((n1, n2) => n1 / n2, true, '/')">/</button>
      
      <button class="calcButton"  @click="addDot">.</button>
      <button class="calcButton"  @click="numbWritten(0)">0</button>
      <button class="calcButton" id="equals"  @click="equals">=</button>
    </div>
    <ul class="calcButton">
      <div  v-for="logItem in this.log" :key="logItem.id">
        <li>{{logItem.problem}}</li>
      </div>
    </ul>

  
    
  </div>
</template>

<script>
export default { //work on log
  name: "Calculator",
  data() {
    return {
      oldNumb: 0,
      newNumb: null,
      func: null,
      funcSymbol: "",
      msg: 0,
      charSinceDot: null,
      ans: null,
      disabled: false,
      division: false,
      currentLog: "",
      log: [],
      id: 0
    };
  },
  methods: {
    roundTo(n) {
      this.oldNumb = +(this.oldNumb.toFixed(n));
    },
    numbWritten(numb) {
      if (!this.disabled){
        if(this.newNumb === null){
          this.newNumb = 0;
        }
        if (this.charSinceDot === null) {
          this.newNumb = this.newNumb*10;
          this.newNumb +=numb;
        } else{
          this.charSinceDot++;
          this.newNumb += numb * (10 ** (-1 * this.charSinceDot));
          //this.roundTo(6);
        }
        this.msg = this.newNumb;
        console.log("newNumb: " + this.newNumb);
        console.log("oldNumb: " + this.oldNumb);
      }
    },
    setOperation(newFunc, division, symbol){
      if(this.newNumb === 0 && this.division){
        this.oldNumb = NaN;
      } else{
        if (this.newNumb != null){
          this.currentLog += this.funcSymbol + " ";
          this.currentLog += this.newNumb + " ";
        }
        if(this.func === null){
          this.oldNumb = this.newNumb;
        } else if (this.newNumb != null){
          this.oldNumb = this.func(this.oldNumb, this.newNumb);
          this.roundTo(6);
        }
      }
      this.division = division;
      this.newNumb = null;
      this.func = newFunc;
      this.funcSymbol = symbol;
      this.charSinceDot = null;
      this.msg = this.oldNumb;
      this.disabled = false;
      console.log("newNumb: " + this.newNumb);
      console.log("oldNumb: " + this.oldNumb);
    },
    resetValues(){
      this.oldNumb=0;
      this.newNumb=null;
      this.func=null;
      this.charSinceDot = null;
      this.disabled = false;
      this.division = false;
      this.currentLog = "";
      this.funcSymbol = "";
    },
    totalReset(){
      this.resetValues();
      this.msg = this.oldNumb;
    },
    del() {
      if(this.disabled) {
        this.newNumb = null;
        this.disabled = false;
        this.msg = 0;
      } else {
        if (this.charSinceDot === null){
          this.newNumb = (this.newNumb - (this.newNumb % 10))/10;
        } else if (this.charSinceDot === 0){
          this.charSinceDot = null;
        } else {
          this.charSinceDot--;
          this.newNumb -= (this.newNumb**this.charSinceDot - (this.newNumb**this.charSinceDot % 1))**(-1 * this.charSinceDot);
          this.roundTo(6);
        }
        this.msg =this.newNumb;
      }
    },
    equals(){
      if(this.newNumb === 0 && this.division){
        console.log(toString(this.func));
        console.log(toString(((n1, n2) => n1 / n2)));
        this.oldNumb = NaN;
      } else{
        this.currentLog += this.funcSymbol;
        this.currentLog += this.newNumb;
        if(this.func === null){
          this.oldNumb = this.newNumb;
        } else if (this.newNumb != null){
           
          this.oldNumb = this.func(this.oldNumb, this.newNumb);
          this.roundTo(6);
          this.currentLog += "= " + this.oldNumb; 
          let newId = this.id;
          this.log.unshift({
            problem: this.currentLog,
            id: newId,
          });
          this.id++;
        }
      }
      if (this.oldNumb != null){
        this.msg = this.oldNumb;
        this.ans = this.oldNumb;
      }
      this.resetValues();
      console.log("ans: " + this.ans);
      console.log("oldNumb: " + this.oldNumb);
    },
    ansPushed(){
      if (this.ans != null) {
        console.log("ans: " + this.ans);
        this.newNumb = this.ans;
        this.disabled = true;
        this.msg = this.newNumb;
        
      console.log("newNumber: " + this.newNumb);
      }
    },
    addDot(){
      if (this.charSinceDot === null && !this.disabled){
        this.charSinceDot = 0;
      }
    },
  },
  computed: {
    isNumber(){
      return !isNaN(this.msg);
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
