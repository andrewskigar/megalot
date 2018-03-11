<script>
import { Bar } from 'vue-chartjs'

export default {
  name: 'barChart',
  extends: Bar,
  props: {
    chartData: {
      /* eslint no-bitwise: 0 */
      type: Array | Object,
      required: false,
    },
    chartLabels: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
              gridLines: {
                display: true,
              },
            },
          ],
          xAxes: [
            {
              gridLines: {
                display: false,
              },
            },
          ],
        },
        legend: {
          display: false,
        },
        responsive: true,
        maintainAspectRatio: false,
      },
    }
  },

  mounted() {
    this.refresh()
  },

  watch: {
    chartData() {
      // update chartjs object [labels, datasets]
      /* eslint-disable no-underscore-dangle */
      this.$data._chart.data.labels = this.chartLabels
      this.$data._chart.data.datasets[0].data = this.chartData

      this.$data._chart.update()
    },
  },

  methods: {
    refresh() {
      this.renderChart(
        {
          labels: this.chartLabels,
          datasets: [
            {
              label: '',
              backgroundColor: '#6cb2eb',
              borderColor: '#6cb2eb',
              data: this.chartData,
            },
          ],
        },
        this.options,
      )
    },
  },
}
</script>
