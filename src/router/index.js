import Vue from 'vue'
import Router from 'vue-router'
import works from '@/components/subs/works'
import thoughts from '@/components/subs/thoughts'
import about from '@/components/subs/about'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '*',
    redirect: '/works',
    component: thoughts
  }, {
    path: '/thoughts',
    name: 'thoughts',
    component: thoughts
  }, {
    path: '/works',
    name: 'works',
    component: works
  }, {
    path: '/about',
    name: 'about',
    component: about
  }]
})
