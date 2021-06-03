import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
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
        path: '/personal',
        component: () =>
            import('./views/PersonalIndex.vue')
    },
    {
        path: '/shoppingcart',
        component: () =>
            import('./views/ShoppingCart.vue')
    },
    {
        path: '/goodinfo',
        component: () =>
            import('./views/GoodInfo.vue')
    }
    ]
})