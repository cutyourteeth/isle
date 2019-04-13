<template>
  <div class="style.">
    <div :v-for="(thought,index) in thoughtsList" :key="key">{{index + 1}} - {{thought}}</div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {

    }
  },
  components: {

  }
}
</script>

<style module lang="stylus"></style>
