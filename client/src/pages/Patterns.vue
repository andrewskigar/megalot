<template>
  <div class="w-full p-4 flex-1">
    <div class="mb-4 inline-flex">
      <button @click="pattern = 1"
        :class="[pattern === 1 ? 'bg-grey' : 'bg-grey-light']"
        class="hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded-l appearance-none"
      >
        Через тираж
      </button>
      <button @click="pattern = 2"
        :class="[pattern === 2 ? 'bg-grey' : 'bg-grey-light']"
        class="hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded-r appearance-none"
      >
        Через два тиража
      </button>
    </div>
    <p v-for="(tirag, index) in results" :key="index" class="flex mb-4">
      <b v-for="(bead, _index) in tirag"
        :key="_index"
        class="p-2 mr-2 border border-grey-light font-normal"
        :class="{'bg-green-light' : bead.isSame}"
      >
          {{bead.number}}
      </b>
    </p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Patterns',
  data() {
    return {
      pattern: 1,
      results: [],
    }
  },
  created() {
    this.fetch()
  },
  watch: {
    pattern() {
      this.fetch(this.pattern)
    },
  },
  methods: {
    fetch(param) {
      const factor = !param ? 1 : param

      axios.get(`http://localhost:9000/patterns?factor=${factor}`).then((response) => {
        this.results = response.data
      })
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
