<template>
  <select :value="modelValue" @change="changeOption">
    <option
      v-for="option in options"
      :key="option.strCategory"
      :value="option.strCategory"
    >
      {{ $t(`message.option.${option.strCategory.replace(/\s/g, '_')}`) }}
    </option>
  </select>
</template>

<script>
  export default {
    name: 'my-select',
    props: {
      modelValue: {
        type: String,
      },
      options: {
        type: Array,
        default: () => [],
      },
    },
    methods: {
      changeOption(event) {
        this.$emit('update:modelValue', event.target.value);
      },
    },
  };
</script>

<style scoped>
  select {
    border-radius: 10px;
    border: 2px solid darkred;
    padding: 10px 30px;
    color: darkred;
  }
</style>
