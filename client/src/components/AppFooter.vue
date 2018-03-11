<template>
  <footer class="bg-purple-dark p-4 flex text-white">
    <div class="flex-1">&copy; by Andrew Skigar. {{ currentYear }}</div>
    <div class="flex-1 text-right">
      Build with <a class="text-white" href="https://vuejs.org">Vue.js</a>,
      <a class="text-white" href="https://vue-chartjs.com">Vue-chartjs</a>
    </div>
  </footer>
</template>

<script>
export default {
  computed: {
    currentYear() {
      return new Date().getFullYear()
    },
  },
}
</script>

<style scoped>

</style>
