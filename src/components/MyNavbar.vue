<template>
  <div class="my-navbar">
    <div>
      <h1 class="cock">{{ $t('message.Cocktailz') }}</h1>
    </div>
    <div class="navbar__btns">
      <my-button @click="$router.push('/')">{{ $t('message.Main') }}</my-button>
      <my-button style="margin-left: 20px" @click="toggleLocale">
        {{ $t('message.changeLanguage') }}
      </my-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'my-navbar',
    methods: {
      toggleLocale() {
        this.$i18n.locale = this.$i18n.locale === 'ru' ? 'en' : 'ru';
      },
    },
  };
</script>

<style scoped>
  .my-navbar {
    position: fixed;
    width: 100%;
    height: 50px;
    background-color: darkred;
    box-shadow: 2px 2px 4px gray;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 15px;
  }
  .cock {
    color: white;
  }
</style>
