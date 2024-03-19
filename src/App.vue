<template>
  <my-navbar />
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import MyNavbar from '@/components/MyNavbar';
  export default {
    components: { MyNavbar },
  };
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

  ::selection {
    background: teal;
    color: darkred;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }
</style>
