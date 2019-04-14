<template>
  <div class="wrapper">
    <div class="header">
      <div class="header-left">pillowtree</div>
      <div class="header-right">
        <a class="header-ham-button" @click="showMenu"></a>
        <div class="header-links">
          <router-link
            v-for="(item,index) in entries"
            :key="index"
            class="header-link"
            :to="item.url"
          >{{item.name}}</router-link>
          <!-- <a href="https://cutyourteeth.github.io/dist">{{item.name}}</a> -->
        </div>
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
        name: 'works',
        url: '/works'
      }, {
        name: 'thoughts',
        url: '/thoughts'
      }, {
        name: 'about',
        url: '/about'
      }]
    }
  },
  methods: {
    showMenu () {
    }
  },
  components: {

  }
}
</script>

<style scoped lang="stylus">
@import '../common/css/animations.css';

.wrapper {
  position: relative;
  color: white;

  .title {
    padding: 10rem 2rem 4rem;

    &>h1 {
      font-weight: 600;
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
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    height: 4rem;
    line-height: 4rem;
    padding: 0 2rem;
    text-transform: uppercase;
    box-sizing: border-box;
    color: rgb(102, 102, 102);

    .header-left {
      letter-spacing: 0.2rem;

      &:hover {
        color: white;
      }
    }

    .header-right {
      display: flex;
      flex-flow: row;
      position: relative;
      justify-content: center;

      .header-links>* {
        margin-left: 1rem;
        letter-spacing: 0.1rem;
      }

      .header-links>*:hover {
        color: white;
      }

      .header-ham-button {
        opacity: 0;
        visibility: hidden;
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        display: block;
        width: 1.5625rem;
        height: 1.5625rem;
        border: 0.08rem solid rgb(102, 102, 102);
        border-radius: 0.175rem;
        background-color: transparent;
        cursor: pointer;

        &:after {
          content: '';
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 60%;
          height: 100%;
          background: repeating-linear-gradient(
            transparent 0,
            transparent 20%,
            rgb(142, 142, 142) 22%,
            rgb(142, 142, 142) 28%,
            transparent 30%,
            transparent 45%,
            rgb(142, 142, 142) 47%,
            rgb(142, 142, 142) 53%,
            transparent 55%,
            transparent 70%,
            rgb(142, 142, 142) 72%,
            rgb(142, 142, 142) 78%,
            transparent 80%,
            transparent 100%
          );
        }
      }

      @media screen and (max-width: 768px) {
        .header-links {
          display: flex;
          position: absolute;
          top: calc(2rem + 1.5625rem / 2);
          right: 0%;
          line-height 3.15;
          text-align: right;
          flex-flow: column;
          justify-content: flex-start;
        }

        .header-links {
          opacity: 0;
          visibility: hidden;
        }

        .header-ham-button {
          opacity: 1;
          visibility: visible;
        }

        .header-ham-button:hover ~ .header-links, .header-links:hover {
          opacity: 1;
          visibility: visible;
          // border: solid 1px rgb(72, 72, 72);
          border-top: none;
          border-right: none;
          border-radius: 2px;
        }
      }
    }
  }
}
</style>
