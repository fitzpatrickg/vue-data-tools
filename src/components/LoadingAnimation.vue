<template>
  <div class="loading-container d-flex justify-content-center align-items-center">
    <div class="loading-animation"></div>
  </div>
</template>

<script>
export default {
  name: 'LoadingAnimation',
};
</script>

<style scoped>
.loading-container {
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  background-color: rgba(221, 212, 212, 0.788);
}

.loading-animation {
  background-image: url('../../public/images/loading-blocks.gif');
  background-repeat: no-repeat;
  background-position: center center;
  height: 200px;
  width: 200px;
}
</style>
