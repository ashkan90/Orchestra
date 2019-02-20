import Vue from 'vue'
import Router from 'vue-router'
import paths from '@/routes/paths'

Vue.use(Router)


export default new Router({
  routes: paths,
  hashbang: false,
  mode: 'history'
})
