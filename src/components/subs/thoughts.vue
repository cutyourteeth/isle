<template>
  <div>
    here is about page
    <div v-for="(item,index) in thoughtsList" :key="index">{{index + 1}} - {{item.text}}</div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      thoughtsList: [{
        text: 'thought-1'
      }, {
        text: 'thought-2'
      }, {
        text: 'thought-3'
      }, {
        text: 'thought-4'
      }]
    }
  },
  components: {

  }
}
</script>

<style module lang="stylus"></style>
