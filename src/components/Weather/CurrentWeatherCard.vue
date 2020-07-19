<template>
<div class="card">
        <div class="card-body">
        <h1>Current Weather</h1>
        <span>{{ weather.summary }}</span>
          <div class="row mt-4">
            <div class="col-3">
              <span class="big-text-label d-block">
                Temp
              </span>
              <span class="big-text d-block">
                {{ weather.temperature }}
              </span>
            </div>
            <div class="col-3">
              <span class="big-text-label d-block">
                Visibility
              </span>
              <span class="big-text d-block">
                {{ weather.visibility }}
              </span>
            </div>
            <div class="col-3">
              <span class="big-text-label d-block">
                wind
              </span>
              <span class="big-text d-block">
                {{ weather.windSpeed }}km
              </span>
            </div>
            <div class="col-3">
              <span class="big-text-label d-block">
                UV
              </span>
              <span class="big-text d-block">
                {{ weather.uvIndex }}
              </span>
            </div>
          </div>
        </div>

    </div>
</template>

<script>
export default {
  name: 'CurrentWeatherCard',

  props: ['weather'],
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables.scss";

.big-text {
  font-weight: bold;
  font-size: 1.8em;
}

.big-text-label {
  font-size: 0.6em;
}
</style>
