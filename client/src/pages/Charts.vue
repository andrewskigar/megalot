<template>
  <div class="w-full p-4 flex-1">
    <div v-if="loaded">
      <div class="mb-4 inline-flex">
        <button @click="requestedChart = 'longago'"
          :class="[requestedChart === 'longago' ? 'bg-grey' : 'bg-grey-light']"
          class="hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded-l">
          Давно
        </button>
        <button @click="requestedChart = 'pairs/min'"
          :class="[requestedChart === 'pairs/min' ? 'bg-grey' : 'bg-grey-light']"
          class="hover:bg-grey text-grey-darkest font-bold py-2 px-4">
          Пары &darr;
          <div v-if="requestedChart === 'pairs/min'"
            class="inline text-xs text-white">
              {{ chart.data.length }}
          </div>
        </button>
        <button @click="requestedChart = 'pairs/max'"
          :class="[requestedChart === 'pairs/max' ? 'bg-grey' : 'bg-grey-light']"
          class="hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded-r">
          Пары &uarr;
          <div v-if="requestedChart === 'pairs/max'"
            class="inline text-xs text-white">
              {{ chart.data.length }}
          </div>
        </button>
      </div>
      <bar-chart class="shadow"
        :chart-data="chart.data"
        :chart-labels="chart.labels">
      </bar-chart>
    </div>
    <div v-else class="loader"></div>
  </div>
</template>

<script>
import axios from 'axios'
import BarChart from '@/components/BarChart'

export default {
  name: 'Charts',
  components: { BarChart },
  data() {
    return {
      loaded: false,
      requestedChart: 'longago',
      chart: {
        data: [],
        labels: [],
      },
    }
  },
  mounted() {
    this.requestData()
  },
  computed: {
    requestUrl() {
      return `http://localhost:9000/${this.requestedChart}`
    },
  },
  watch: {
    requestedChart() {
      this.loaded = false
      this.requestData()
    },
  },
  methods: {
    requestData() {
      axios.get(this.requestUrl).then((response) => {
        switch (this.requestedChart) {
          case 'pairs/max':
          case 'pairs/min':
            this.chart.data = response.data.map(item => item.count)
            this.chart.labels = response.data.map(item => item.pair)
            break
          default:
            this.chart.data = response.data.map(tirag => tirag)
            this.chart.labels = response.data.map((tirag, number) => number + 1)
            break
        }
        this.loaded = true
      }).catch((err) => {
        /* eslint-disable no-console */
        console.log(err)
      })
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
