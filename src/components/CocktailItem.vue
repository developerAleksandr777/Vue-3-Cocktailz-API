<template>
  <div class="col">
    <div class="my-card">
      <v-lazy-image-component :src="cocktail.strDrinkThumb" />
      <div class="my-card__content">
        <p>
          <strong>{{ $t('message.ID') }}: </strong>{{ cocktail.idDrink }}
        </p>
        <p>
          <strong>{{ $t('message.Drink') }}: </strong>{{ cocktail.strDrink }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  import VLazyImageComponent from 'v-lazy-image';

  export default {
    components: { VLazyImageComponent },
    props: {
      cocktail: {
        type: Object,
        required: true,
      },
    },
  };
</script>

<style scoped>
  .my-card {
    margin-bottom: 20px;
    border: 2px solid darkred;
    border-radius: 10px;
    font-size: 14px;
  }

  .my-card img {
    width: 100%;
    border-radius: 9px 9px 0 0;
  }

  .my-card__content {
    padding: 20px;
    border-top: 2px solid darkred;
  }
</style>
