<template>
  <div>
    <input v-model="searchText" @keyup="getResults()" type="text" class="form-control">
    <SearchResults :results="searchResults" />
  </div>
</template>

<script>
import SearchResults from './SearchResults.vue';

export default {
  name: 'SearchBar',

  components: {
    SearchResults,
  },

  data() {
    return {
      searchText: '',
      searchResults: null,
    };
  },

  methods: {
    getResults() {
      this.searchResults = this.$store.getters.filterSearchResults(this.searchText);
      console.log(this.searchResults);
    },
  },
};
</script>

<style scoped>

</style>
