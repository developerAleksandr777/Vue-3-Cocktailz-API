<template>
  <div class="page__wrapper">
    <my-button
      :style="{
        background: pageNumber === page ? 'orangered' : 'none',
        'font-weight': pageNumber === page ? 'bold' : 'normal',
        color: pageNumber === page ? 'white' : 'darkred',
      }"
      style="border: 2px solid darkred"
      @click="changePage(pageNumber)"
      :key="pageNumber"
      v-for="pageNumber in totalPage"
    >
      {{ pageNumber }}
    </my-button>
  </div>
</template>

<script>
  export default {
    props: {
      totalPage: {
        type: Number,
        required: true,
      },
      changePage: {
        type: Function,
        required: true,
      },
      page: {
        type: Number,
        required: true,
      },
    },
  };
</script>

<style scoped>
  .page__wrapper {
    display: flex;
    column-gap: 10px;
  }

  .current-page {
    background: orangered;
  }
</style>
