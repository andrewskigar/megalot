import { Bar } from 'vue-chartjs'
import axios from 'axios'

export default {
  extends: Bar,
  mounted() {
    axios.get('http://localhost:9000/longago').then((response) => {
      const results = response.data

      const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      }

      const chartConfig = {
        labels: [],
        datasets: [
          {
            label: 'Тираж',
            backgroundColor: '#6cb2eb',
            borderColor: '#6cb2eb',
            data: [],
          },
        ],
      }

      chartConfig.labels = results.map((tirag, number) => number + 1)
      chartConfig.datasets[0].data = results.map(tirag => tirag)

      this.renderChart(chartConfig, options)
    })
  },
}
