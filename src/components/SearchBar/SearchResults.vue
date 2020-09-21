<template>
  <div class="results-container" :class="results === null ? 'hide' : ''">
    <ul>
      <li v-bind:key="i"
          v-for="(result, i) in this.results">
          <a :href="result.link">{{result.name}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SeachResults',

  props: ['results'],
};
</script>

<style lang="scss">
  .hide {
    display: none;
  }

  .results-container {
    position: absolute;
    background-color: $softOrange;
    padding: 20px;
  }
</style>
