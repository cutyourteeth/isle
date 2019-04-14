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
        imageUrl: 'https://cdn.pixabay.com/photo/2016/11/22/19/10/adventure-1850094__340.jpg',
        text: ''
      }, {
        title: 'conoon',
        imageUrl: 'https://cdn.pixabay.com/photo/2018/03/02/18/56/digital-art-3193935__340.jpg',
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
  width: 20rem;

  @media screen and (max-width: 768px) {
    width: 80%;
  }
}
</style>
