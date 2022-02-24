<template>
  <label :for="uuid" v-if="label">{{ label }}</label>
  <textarea
    v-bind="$attrs"
    :value="modelValue"
    :placeholder="label"
    @input="$emit('update:modelValue', $event.target.value)"
    class="field"
    :id="uuid"
    :aria-describedby="error ? '${uuid}-error' : null"
    :aria-invalid="error ? true : null"
  ></textarea>
    <p 
      v-if="error"
      class="errorMessage"
      :id="'${uuid}-error'">
      {{ error }}
    </p>
</template>

<script>
import UniqueID from '../features/UniqueID';

export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    modelValue: {
      type: [String, Number],
      default: ''
    },
    error: {
      type: String,
      default: ''
    }
  },
  setup(){
    const uuid = UniqueID().getID();
    return{
      uuid
    }
  },
}
</script>
<style scoped>

label{
  display: block;
  margin-left: 0;
  margin-right: auto;
}

input{
  display: inline;
}

.errorMessage{
  font-size: 12px;
  color: red;
  margin: 0px;
}
</style>