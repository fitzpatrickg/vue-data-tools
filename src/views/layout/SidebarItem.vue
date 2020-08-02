<template>
  <div class="sidebar-item">
    <router-link class="sidebar-text" :to="link">
      <i :class="icon"></i>
      {{ name }}
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'SidebarItem',

  props: ['name', 'link', 'icon'],
};
</script>

<style lang="scss" scoped>
  .sidebar-item {
    &:hover {
      background-color: #CCC;
    }
  }

  .sidebar-text {
    color: #FFF;
    padding: 15px 20px;
    display: block;
    width: 100%;
    height: 100%;

    &:hover {
      text-decoration: none;
    }
  }
</style>
