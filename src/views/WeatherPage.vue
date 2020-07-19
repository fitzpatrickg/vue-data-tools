<template>
  <main>
    <CurrentWeatherCard
      v-if="loaded"
      :weather="current" />

    <div class="card">
      <LoadingAnimation v-if="!loaded"/>
      <div class="card-body">
        <h4>Temp Highs and Lows for the week</h4>
        <LineChart
          v-if="loaded"
          :chartdata="buildDailyChartData"
          :options="lineChartOptions"/>
      </div>
    </div>
  </main>
</template>

<script>
import weatherUtils from '../mixins/weatherUtils';
import LoadingAnimation from '../components/LoadingAnimation.vue';
import CurrentWeatherCard from '../components/Weather/CurrentWeatherCard.vue';
import LineChart from '../components/Charts/LineChart.vue';

export default {
  name: 'WeatherPage',

  components: {
    CurrentWeatherCard,
    LineChart,
    LoadingAnimation,
  },

  mixins: [weatherUtils],

  data() {
    return ({
      weather: null,
      current: null,
      loaded: false,
    });
  },

  mounted() {
    // setTimeout(() => {
    weatherUtils.getWeatherData()
      .then((data) => {
        this.weather = data;
        this.current = data.currently;
        this.loaded = true;
      })
      .catch((err) => console.log(err));
    // }, 2000);
  },

  computed: {
    dailyHighTempDataSet() {
      const dailyData = this.weather.daily.data;
      const dataset = [];
      dailyData.forEach((day) => {
        const dailyHigh = day.apparentTemperatureHigh;
        dataset.push(dailyHigh);
      });
      return dataset;
    },

    dailyLowTempDataSet() {
      const dailyData = this.weather.daily.data;
      const dataset = [];
      dailyData.forEach((day) => {
        const dailyHigh = day.apparentTemperatureLow;
        dataset.push(dailyHigh);
      });
      return dataset;
    },

    buildDailyChartData() {
      return {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon'],
        datasets: [
          {
            label: 'High',
            borderColor: 'blue',
            data: this.dailyHighTempDataSet,
          },
          {
            label: 'Low',
            borderColor: 'red',
            data: this.dailyLowTempDataSet,
          },
        ],
      };
    },

    lineChartOptions() {
      return {
        responsive: true,
        maintainAspectRatio: false,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
h4 {
  color: $red;
}

</style>
