<template>
  <div class="card">
    <div class="card-header">
      <h1>Placeholder homepage</h1>
    </div>
    <div class="card-body">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    <div class="card-footer d-flex justify-content-between">
      <span class="footer-option">
        <a
          @click="updateSelection('web')"
          class="btn btn-primary text-white"
          href="#">
            Web
          </a>
      </span>
      <span class="footer-option text-light">
        <a
          @click="updateSelection('mobile')"
          class="btn btn-primary text-white"
          href="#">
          Mobile
        </a>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',

  methods: {
    updateSelection(selection) {
      this.$store.commit('updateSelectedSection', selection);
      console.log(this.$store.state.selection);
    },
  },
};
</script>

<style scoped>
  .footer-option a {
    font-size: 12px;
    color: #9b9b9b;
    text-decoration: none;
  }
</style>
