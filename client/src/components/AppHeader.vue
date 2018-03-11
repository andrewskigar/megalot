<template>
  <header class="bg-purple-dark">
    <ul class="list-reset flex items-baseline">
      <li class="text-white p-4 text-2xl">
        Megalot Stats
      </li>
      <li class="p-4">
        <router-link class="text-grey hover:text-white no-underline" to="/history">История
        </router-link>
      </li>
      <li class="p-4">
        <router-link class="text-grey hover:text-white no-underline" to="/charts">Графики
        </router-link>
      </li>
      <li class="p-4">
        <router-link class="text-grey hover:text-white no-underline" to="/patterns">Шаблоны
        </router-link>
      </li>
    </ul>
  </header>
</template>

<script>
export default {

}
</script>

<style scoped>
.router-link-active {
  color: white;
}
</style>
