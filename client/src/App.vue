<template>
  <div id="app">
    <header class="bg-purple-dark">
      <ul class="list-reset flex items-baseline">
        <li class="text-white p-4 text-2xl">
          Megalot Stats
        </li>
        <li class="p-4">
          <router-link class="text-grey hover:text-white no-underline"
            to="/results">Результаты
          </router-link>
        </li>
        <li class="p-4">
          <router-link class="text-grey hover:text-white no-underline"
            to="/stats">Статистика
          </router-link>
        </li>
        <li class="p-4">
          <router-link class="text-grey hover:text-white no-underline"
            to="/patterns">Шаблоны
          </router-link>
        </li>
      </ul>
    </header>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
.router-link-active {
  color: white;
}
</style>
