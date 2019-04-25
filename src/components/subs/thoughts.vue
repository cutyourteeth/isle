<template>
  <div>
    <div
      class="thought-item"
      v-for="(item,index) in thoughtsList"
      :key="index"
    >{{index + 1}}. {{item.text}}</div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      thoughtsList: [{
        text: 'keep me as an independency'
      }, {
        text: 'to buy a chear fit for coder'
      }, {
        text: 'coding is an art'
      }, {
        text: 'service me and everyone'
      }]
    }
  },
  components: {

  }
}
</script>

<style lang="stylus">
.thought-item {
  padding 1rem 2rem
}
</style>
