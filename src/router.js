import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home/home.vue'
/*eslint*/
import ESLint from './views/ESLint/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ESLint',
      component: ESLint
    },{
      path: '/home',
      name: 'home',
      component: Home
    },
  ]
})
