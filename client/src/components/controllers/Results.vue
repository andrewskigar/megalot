<template>
  <div class="w-full px-4 pb-8">
    <p v-for="(tirag, index) in results" :key="index" class="flex mt-4">
      <b v-for="(number, _index) in tirag"
        :key="_index"
        class="p-2 mr-2 border border-grey-light font-normal"
      >
        {{number}}
      </b>
    </p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Results',
  data() {
    return {
      results: [],
    }
  },
  created() {
    this.fetch()
  },
  methods: {
    fetch() {
      axios.get('http://localhost:9000/results').then((response) => {
        this.results = response.data
      })
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
