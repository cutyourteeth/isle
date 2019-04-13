<template>
  <div class="wrapper">
    <div class="header">
      <div class="header-left">pillowtree</div>
      <div class="header-right" v-for="(item,index) in entries" :key="index">
        <!-- <router-link tag="li" :to="item.url">{{item.name}}</router-link> -->
        <a href="https://cutyourteeth.github.io/dist">{{item.name}}</a>
      </div>
    </div>

    <div class="title">
      <h1>lean on the tree</h1>
      <h1>Yeah, full of pillows</h1>
      <p>Minds shall reset, then dream wild</p>
    </div>

    <router-view/>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      entries: [{
        name: 'about',
        url: '/works'
      }, {
        name: 'thoughts',
        url: '/works'
      }, {
        name: 'works',
        url: '/works'
      }]
    }
  },
  components: {

  }
}
</script>

<style scoped lang="stylus">
.wrapper {
  position: relative;
  height: 100vh;
  color: white;
  background-color: rgb(17, 17, 17);

  .title {
    padding: 10rem 2rem 4rem;

    &>h1 {
      font-weight 600
      line-height: 1.25;
      text-transform: uppercase;
      letter-spacing: 0.1rem;
      font-size: 1.375rem;
    }

    &>p {
      line-height: 2;
      padding-top: 0.5rem;
      font-size: 0.85rem;
    }
  }

  .header {
    width: 100%;
    height: 4rem;
    line-height: 4rem;
    padding: 0 2rem;
    text-transform: uppercase;
    box-sizing: border-box;
    color: rgb(102, 102, 102);

    &>*:hover {
      color: white;
    }

    .header-left {
      float: left;
      letter-spacing: 0.2rem;
    }

    .header-right {
      float: right;
      letter-spacing: 0.1rem;
      padding-left: 1rem;

      @media screen and (max-width: 768px) {
      }
    }
  }
}
</style>
