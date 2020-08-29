<template>
<slideout-panel>
  <div class="slideout-menu">
    <ul>
      <li v-bind:key="i" v-for="(item, i) in menu">
        <a href="#">{{ item }}</a>
      </li>
    </ul>
  </div>
</slideout-panel>
</template>

<script>
// https://officert.github.io/vue-slideout-panel/#/home
export default {
  name: 'SlideoutMenu',

  props: ['menu'],
};
</script>

<style lang="scss" scoped>

.slideout {
  background-color: red;
}

</style>
