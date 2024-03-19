<template>
  <input
    class="my-input"
    :value="modelValue"
    @input="updateInput"
    type="text"
  />
</template>

<script>
  export default {
    name: 'my-input',
    props: {
      modelValue: [String, Number],
    },
    methods: {
      updateInput(event) {
        this.$emit('update:modelValue', event.target.value);
      },
    },
  };
</script>

<style scoped>
  .my-input {
    border: 2px solid darkred;
    padding: 10px 30px;
    color: darkred;
    border-radius: 10px;
  }
</style>
