<template>
  <div
    v-if="cocktailz.length > 0"
    class="row gy-4 row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1"
  >
    <transition-group
      appear
      name="cocktailz-list"
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
    >
      <cocktail-item
        v-for="cocktail in cocktailz"
        :cocktail="cocktail"
        :key="cocktail.idDrink"
      />
    </transition-group>
  </div>
  <h1 v-else style="color: darkred">{{ text }}</h1>
</template>

<script>
  import CocktailItem from '@/components/CocktailItem';

  export default {
    components: { CocktailItem },
    props: {
      cocktailz: {
        type: Array,
        required: true,
      },
      text: {
        type: String,
        required: true,
      },
    },
  };
</script>

<style scoped>
  .cocktailz-list-item {
    display: inline-block;
    margin-right: 10px;
  }

  .cocktailz-list-enter-active,
  .cocktailz-list-leave-active {
    transition: all 0.4s ease;
  }

  .cocktailz-list-enter-from,
  .cocktailz-list-leave-to {
    opacity: 0;
    transform: translateX(130px);
  }

  .cocktailz-list-move {
    transition: transform 0.4s ease;
  }
</style>
