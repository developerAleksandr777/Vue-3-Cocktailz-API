<template>
  <div id="main-page">
    <div class="container">
      <div class="main-page__btns">
        <my-input
          v-model="searchQuery"
          :placeholder="$t('message.SearchByDrink')"
        />
        <my-pagination
          :totalPage="totalPage"
          :page="page"
          :changePage="changePage"
        />
        <my-select v-model="selectedCategory" :options="categories" />
      </div>

      <div>
        <cocktailz-list
          v-if="!isLoading"
          :cocktailz="paginatedCocktailz"
          :text="$t('message.Listofcocktailzisempty')"
        />
        <my-spinner v-else />
      </div>
    </div>
  </div>
</template>

<script>
  import CocktailzList from '@/components/CocktailzList';
  import axios from 'axios';
  import MyPagination from '@/components/UI/MyPagination';

  export default {
    components: { MyPagination, CocktailzList },
    data() {
      return {
        searchQuery: '',
        cocktailz: [],
        categories: [],
        isLoading: false,
        selectedCategory: 'Ordinary Drink',
        limit: 10,
        page: 1,
      };
    },
    methods: {
      changePage(newPage) {
        this.page = newPage;
      },
      async fetch() {
        try {
          this.isLoading = true;
          const response = await axios.get(
            'https://www.thecocktaildb.com/api/json/v1/1/filter.php',
            {
              params: {
                c: this.selectedCategory,
              },
            },
          );
          const categoriesRes = await axios.get(
            'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list',
          );
          this.cocktailz = response.data.drinks;
          this.categories = categoriesRes.data.drinks;
        } catch (error) {
          console.log(error);
        } finally {
          this.isLoading = false;
        }
      },
    },
    mounted() {
      this.fetch();
    },
    computed: {
      searchedCocktailz() {
        return this.cocktailz.filter((cocktail) => {
          return (
            (this.page = 1),
            cocktail.strDrink
              .toLowerCase()
              .includes(this.searchQuery.toLowerCase())
          );
        });
      },
      totalPage() {
        return Math.ceil(this.searchedCocktailz.length / this.limit);
      },
      paginatedCocktailz() {
        const startIndex = (this.page - 1) * this.limit;
        const endIndex = startIndex + this.limit;
        return this.searchedCocktailz.slice(startIndex, endIndex);
      },
    },
    watch: {
      selectedCategory(newCategory) {
        this.selectedCategory = newCategory;
        this.searchQuery = '';
        this.page = 1;
        this.fetch();
      },
      page(newPage) {
        console.log(newPage);
      },
    },
  };
</script>

<style scoped>
  #main-page {
    padding: 100px 0;
  }

  .main-page__btns {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .main-page__btns {
    margin-bottom: 20px;
  }
</style>
