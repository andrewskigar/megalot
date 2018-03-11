<template>
  <div class="w-full p-4 flex-1">
    <div v-if="loaded">
      <p v-for="(tirag, index) in results" :key="index" class="flex mb-4">
        <b v-for="(number, _index) in tirag"
          :key="_index"
          class="p-2 mr-2 border border-grey-light font-normal"
        >
          {{number}}
        </b>
      </p>
    </div>
    <div v-else class="loader">&nbsp;</div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'History',
  data() {
    return {
      loaded: false,
      results: [],
    }
  },
  created() {
    this.fetch()
  },
  methods: {
    fetch() {
      axios.get('http://localhost:9000/history').then((response) => {
        this.results = response.data
        this.loaded = true
      })
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
