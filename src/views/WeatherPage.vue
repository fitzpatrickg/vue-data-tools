<template>
  <main>
    <CurrentWeatherCard
      :loaded="loaded"
      :weather="current" />

<div class="row">
  <div class="col-6">
    <div class="card">
      <LoadingAnimation v-if="!loaded"/>
      <div v-if="loaded" class="card-body">
        <h4>Weekly Temperature</h4>
        <LineChart
          :chartdata="buildDailyTempChartData"
          :options="lineChartOptions"/>
      </div>
    </div>
  </div>
  <div class="col-6">
    <div class="card">
      <LoadingAnimation v-if="!loaded"/>
      <div v-if="loaded" class="card-body">
        <h4>Weekly Humidity</h4>
        <BarChart
          :chartdata="buildDailyHumidityChartData"
          :options="lineChartOptions"/>
      </div>
    </div>
  </div>
</div>

  </main>
</template>

<script>
import weatherUtils from '../mixins/weatherUtils';
import CurrentWeatherCard from '../components/Weather/CurrentWeatherCard.vue';
import LineChart from '../components/Charts/LineChart.vue';
import BarChart from '../components/Charts/BarChart.vue';

export default {
  name: 'WeatherPage',

  components: {
    CurrentWeatherCard,
    LineChart,
    BarChart,
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
        setTimeout(() => {
          this.weather = data;
          this.current = data.currently;
          this.loaded = true;
        }, 1500);
      })
      .catch((err) => console.log(err));
    // }, 2000);
  },

  methods: {
    dailyTempDataSet(type) {
      const dailyData = this.weather.daily.data;
      const dataset = [];
      dailyData.forEach((day) => {
        const temp = day[type];
        dataset.push(temp);
      });
      return dataset;
    },
  },

  computed: {
    buildDailyTempChartData() {
      return {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon'],
        datasets: [
          {
            label: 'High',
            borderColor: 'blue',
            data: this.dailyTempDataSet('apparentTemperatureHigh'),
          },
          {
            label: 'Low',
            borderColor: 'red',
            data: this.dailyTempDataSet('apparentTemperatureLow'),
          },
        ],
      };
    },

    buildDailyHumidityChartData() {
      return {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon'],
        datasets: [
          {
            label: 'Humidity',
            borderColor: 'green',
            data: this.dailyTempDataSet('humidity'),
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
