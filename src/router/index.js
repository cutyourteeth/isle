import Vue from 'vue'
import Router from 'vue-router'
import thoughts from '@/components/subs/thoughts'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/thoughts',
    name: 'thoughts',
    component: thoughts
  }, {
    path: '/works',
    name: 'works',
    component: thoughts
  }]
})
