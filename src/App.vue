<template>
  <div id="app">
    <HamburgerSideBar/>
    <Sidebar/>
    <main id="main-container" class="conatiner">
      <router-view/>
    </main>
  </div>
</template>

<script>
import HamburgerSideBar from './views/layout/HamburgerSideBar.vue';
import Sidebar from './views/layout/Sidebar.vue';

export default {
  name: 'App',

  components: {
    Sidebar,
    HamburgerSideBar,
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
  position: fixed;
  top: 0;
  bottom: 0;
  left: 35px;
  background-color: $strongOrange;
}

  #hamburger-sidebar {
    width: 35px;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 99;
    background-color: $darkBlue;
  }

#main-container {
  margin-left: 345px;
  margin-right: 15px;
}

.card {
  margin: 15px;
  box-shadow: 0px 0px 6px #888888;
}

</style>
