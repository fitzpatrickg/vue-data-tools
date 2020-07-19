<template>
  <div id="app">
    <div id="sidebar-container">

    </div>
    <main id="main-container" class="conatiner">
      <WeatherPage/>
    </main>
  </div>
</template>

<script>
import WeatherPage from './views/WeatherPage.vue';

export default {
  name: 'App',
  components: {
    WeatherPage,
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  background-color: $greyBlue;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#sidebar-container {
  width: 300px;
  position: absolute;
  top: 0;
  bottom: 0;
  background-color: $strongOrange;
}

#main-container {
  margin-left: 315px;
  margin-right: 15px;
}

.card {
  margin: 15px;
  box-shadow: 0px 0px 6px #888888;
}

.loading {
  background-image: url('../public/images/loading-blocks.gif');
  background-repeat: no-repeat;
  background-position: center center;
  opacity: 0.3;
}
</style>
