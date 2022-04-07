<template>
  <div class="home">
    <CalculatorButtons @equals-pressed="updateEquations"/>
    <p v-for="equation in equations" :key="equation.id">{{equation.text}}</p>
  </div>
</template>

<script>
import CalculatorButtons from "../views/calculatorParts/CalculatorButtons.vue";
import APIService from "../services/APIService.js";

export default {
  name: "Home",
  components: {
    CalculatorButtons,
  },
  mounted(){
    this.updateEquations();
  },
  data() {
    return{
      equations: [""],
    }
  },
  methods: {
    updateEquations(){
      APIService.getEquations()
        .then((response) => {
          this.equations = response.data;
        })
    }
  }
};
</script>
<style scoped>

</style>
