<template>
  <div id="hamburger-sidebar" class="d-flex justify-content-center pt-2">
    <SlideoutMenu />
    <a href="#" @click="showPanel">
      <i class="fas fa-bars"></i>
    </a>
  </div>
</template>

<script>
import SlideoutMenu from './SlideoutMenu.vue';

export default {
  name: 'HamburgerSideBar',

  components: {
    SlideoutMenu,
  },

  methods: {
    showPanel() {
      const panel1Handle = this.$showPanel({
        component: 'SlideoutMenu',
        width: '400px',
        openOn: 'left',
        props: {
          menu: 'web',
        },
      });

      panel1Handle.promise
        .then((results) => {
          console.log(results);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
  #hamburger-sidebar a i {
    color: #FFF;
    text-decoration: none;
  }
</style>
