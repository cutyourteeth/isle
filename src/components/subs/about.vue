<template>
  <div class="about">
    I am
    <a href="https://cutyourteeth.github.io/dist">here</a>
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

<style lang="stylus">
.about {
  font-size: 1.5rem;
  color: rgb(78, 78, 78, 0.6);
  padding: 2rem;

  &:hover {
    color: rgb(178, 178, 178, 0.6);

    &>a {
      color: white;
    }
  }
}
</style>
