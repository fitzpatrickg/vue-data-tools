<template>
<main>
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-body form-group">
          <label for="get-weather-by-location">Select a location:</label>
          <input id="get-weather-by-location" class="form-control" type="text">
          <button class="btn btn-primary mt-2">Search</button>
          <button class="btn btn-success mt-2 ml-4" @click="showSuccessModal = true">Show Modal</button>
        </div>
      </div>
    </div>
  </div>

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

  <div class="row">
    <div class="col-12">
      <div class="card">
        <LoadingAnimation v-if="!loaded"/>
        <div v-if="loaded" class="card-body">
          <h4>Hourly Temperature</h4>
          <LineChart
            :chartdata="buildHourlyTempChartData"
            :options="lineChartOptions"/>
        </div>
      </div>
    </div>
  </div>

  <!-- @close listens for event on close button & modal-wrapper -->
  <SuccessModal
    v-if="showSuccessModal"
    @close="showSuccessModal = false"/>

</main>
</template>

<script>
import weatherUtils from '../mixins/weatherUtils';
import dateTimeUtils from '../mixins/dateTimeUtils';
import CurrentWeatherCard from '../components/Weather/CurrentWeatherCard.vue';
import LineChart from '../components/Charts/LineChart.vue';
import BarChart from '../components/Charts/BarChart.vue';
import SuccessModal from '../components/Modals/SuccessModal.vue';

export default {
  name: 'WeatherPage',

  components: {
    CurrentWeatherCard,
    LineChart,
    BarChart,
    SuccessModal,
  },

  mixins: [weatherUtils, dateTimeUtils],

  data() {
    return ({
      weather: null,
      current: null,
      loaded: false,
      showSuccessModal: false,
    });
  },

  mounted() {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      weatherUtils.getWeatherData(lat, lng)
        .then((data) => {
          this.weather = data;
          this.current = data.currently;
          this.loaded = true;
        })
        .catch((err) => console.log(err));
    },
    () => {
      console.log('no geolocation');
    });
  },

  methods: {
    dailyTempDataSet(type, timeRange) {
      const { data } = this.weather[timeRange];
      const dataset = [];
      data.forEach((d) => {
        const temp = d[type];
        dataset.push(temp);
      });
      return dataset;
    },

    buildWeeklyChartLabels() {
      const labels = [];
      this.weather.daily.data.forEach((d) => {
        labels.push(dateTimeUtils.getWeekdayFromTimestamp(d.apparentTemperatureMinTime));
      });
      return labels;
    },

    buildHourlyChartLabels() {
      const labels = [];
      this.weather.hourly.data.forEach((h) => {
        labels.push(dateTimeUtils.getHourFromTimeStamp(h.time));
      });
      return labels;
    },

    closeEvent() {
      this.showSuccessModal = false;
    },
  },

  computed: {
    buildHourlyTempChartData() {
      return {
        labels: this.buildHourlyChartLabels(),
        datasets: [
          {
            label: 'Average',
            borderColor: 'green',
            data: this.dailyTempDataSet('apparentTemperature', 'hourly'),
          },
        ],
      };
    },

    buildDailyTempChartData() {
      return {
        labels: this.buildWeeklyChartLabels(),
        datasets: [
          {
            label: 'High',
            borderColor: 'blue',
            data: this.dailyTempDataSet('apparentTemperatureHigh', 'daily'),
          },
          {
            label: 'Low',
            borderColor: 'red',
            data: this.dailyTempDataSet('apparentTemperatureLow', 'daily'),
          },
        ],
      };
    },

    buildDailyHumidityChartData() {
      return {
        labels: this.buildWeeklyChartLabels(),
        datasets: [
          {
            label: 'Humidity',
            borderColor: 'green',
            data: this.dailyTempDataSet('humidity', 'daily'),
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
