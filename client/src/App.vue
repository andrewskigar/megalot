<template>
  <div id="app" class="flex flex-col min-h-full">
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader'
import AppFooter from '@/components/AppFooter'

export default {
  components: { AppHeader, AppFooter },
  name: 'App',
}
</script>

<style scoped>

</style>
