<template>
<slideout-panel>
  <div class="slideout-menu">
    <ul>
      <li>
        <a href="#">Web</a>
      </li>
      <li>
        <a href="#">Mobile</a>
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
