<template>
  <div class="w-full px-4 pb-8">
    <div class="flex my-4">
      <button @click="fetch(1)"
        class="bg-purple-dark hover:bg-purple-darker text-white font-bold py-2 px-4 mr-2 rounded">
        Через тираж
      </button>
      <button @click="fetch(2)"
        class="bg-purple-dark hover:bg-purple-darker text-white font-bold py-2 px-4 rounded">
        Через два тиража
      </button>
    </div>
    <p v-for="(tirag, index) in results" :key="index" class="flex mt-4">
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
import axios from 'axios';

export default {
  name: 'Patterns',
  data() {
    return {
      results: [],
    };
  },
  created() {
    this.fetch();
  },
  methods: {
    fetch(factor) {
      if (!factor) {
        factor = 1;
      }

      axios.get(`http://localhost:9000/patterns?factor=${factor}`).then((response) => {
        this.results = response.data;
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
