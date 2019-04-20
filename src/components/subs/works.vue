<template>
  <div class="works-wrapper">
    <div class="works-list-item" v-for="(work,index) in works" :key="index">
      <img :src="work.imageUrl" class="work-list-image">
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      works: [{
        title: 'conoon',
        imageUrl: 'https://cdn.pixabay.com/photo/2017/01/15/19/04/red-panda-1982445__340.jpg',
        text: ''
      }, {
        title: 'conoon',
        imageUrl: 'https://cdn.pixabay.com/photo/2018/08/21/23/29/fog-3622519__340.jpg',
        text: ''
      }, {
        title: 'conoon',
        imageUrl: 'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg',
        text: ''
      }]
    }
  },
  components: {

  }
}
</script>

<style lang="stylus">
.work-list-image {
  padding: 4rem 2rem;
  width: 32rem;

  @media screen and (max-width: 768px) {
    width: 80%;
  }
}
</style>
