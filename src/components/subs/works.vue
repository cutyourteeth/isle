<template>
  <div class="work-wrapper">
    <div class="work-list-item" v-for="(work,index) in works" :key="index">
      <img :src="work.imageUrl" class="work-list-image">
      <div class="work-list-text">{{work.text}}</div>
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
        text: 'the coon:\n\nOne of the coons run out of your mind'
      }, {
        title: 'the woods',
        imageUrl: 'https://cdn.pixabay.com/photo/2018/08/21/23/29/fog-3622519__340.jpg',
        text: 'the woods:\n\nQuite miss about it\'s peaceful sound'
      }, {
        title: 'the fall',
        imageUrl: 'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg',
        text: 'the fall:\n\nEverything falls in the end, right?'
      }]
    }
  },
  components: {}
}
</script>

<style lang="stylus">
.work-list-item {
  position: relative;
  overflow: hidden;
}

.work-list-image {
  padding: 4rem 2rem;
  width: 32rem;

  @media screen and (max-width: 768px) {
    width: 80%;
  }
}

.work-list-text {
  top: 0;
  opacity: 0;
  width: 32rem;
  height: 80%;
  position: absolute;
  padding: 6rem 4rem;
  white-space: pre-wrap;

  @media screen and (max-width: 768px) {
    width: 80%;
  }
}

.work-list-text:hover, .work-list-image:hover~.work-list-text {
  opacity: 1;
  background-color: rgba(17, 17, 17, 0.6);
}
</style>
