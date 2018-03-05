<template>
  <div class="w-full px-4">
    <chart-long-ago></chart-long-ago>
  </div>
</template>

<script>
import ChartLongAgo from '../charts/ChartLongAgo'

export default {
  name: 'Statistics',
  components: { ChartLongAgo },
  data() {
    return {

    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
