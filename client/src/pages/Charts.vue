<template>
  <div class="w-full p-4 flex-1">
    <div class="mb-4 inline-flex">
      <button class="bg-grey-light hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded-l">
        Давно
      </button>
      <button class="bg-grey-light hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded-r">
        Пары
      </button>
    </div>
    <bar-chart v-if="loaded" class="shadow"
      :chart-data="chart.data"
      :chart-labels="chart.labels">
    </bar-chart>
    <div v-else class="loader">&nbsp;</div>
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
      requestUrlParam: 'longago',
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
      return `http://localhost:9000/${this.requestUrlParam}`
    },
  },

  methods: {
    requestData() {
      axios.get(this.requestUrl).then((response) => {
        this.chart.data = response.data.map(tirag => tirag)
        this.chart.labels = response.data.map((tirag, number) => number + 1)
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
