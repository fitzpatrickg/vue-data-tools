<template>
<div id="sidebar-container">
  <SidebarItem
    v-bind:key="idx"
    v-for="(route, idx) in routes"
    :name="route.name"
    :link="route.link"
    :icon="route.icon"/>
</div>
</template>

<script>
import SidebarItem from './SidebarItem.vue';

export default {
  name: 'Sidebar',

  components: {
    SidebarItem,
  },

  data() {
    return {
      routes: null,
    };
  },

  created() {
    this.routes = this.$store.getters.getRoutesForNav;
  },
};
</script>

<style scoped>

</style>
