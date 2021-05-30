import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () =>
        import('./views/home.vue')
    },
    {
      path: '/login',
      component: () =>
        import('./views/login.vue'),
    },
    {
      path: '/personalInfo',
      component: () =>
        import('./views/PersonalInfo.vue')
    },
    {
      path: '/shoppingCart',
      component: () =>
        import('./views/ShoppingCart.vue')
    }
  ]
})