<template>
  <button class="my-btn">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'my-button',
  };
</script>

<style scoped>
  .my-btn {
    background: none;
    border: 2px solid white;
    border-radius: 10px;
    color: white;
    padding: 5px 15px;
    transition: all 0.2s;
  }

  .my-btn:hover {
    opacity: 0.4;
  }
</style>
