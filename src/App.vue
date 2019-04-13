<template>
  <div id="app">
    <isle class="root"></isle>
  </div>
</template>

<script>
import isle from './components/isle'
export default {
  name: 'App',
  components: {
    isle
  }
}
</script>

<style>
#app {
  width: 100%;
  height: 100%;
}
</style>
