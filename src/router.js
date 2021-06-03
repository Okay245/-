import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
<<<<<<< HEAD
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
    }, {
        path: '/correctInfo',
        component: () =>
            import('./views/CorrectInfo.vue')
    }, {
        path: '/personalIndex',//个人信息主页
        component: () =>
            import('./views/PersonalIndex.vue')
    }, {
        path: '/good',//购物信息
        component: () =>
            import('./views/GoodInfo.vue')
    },
    {
        path: '/shoppingCart',
        component: () =>
            import('./views/ShoppingCart.vue')
    }
=======
            path: '/',
            component: () =>
                import ('./views/home.vue')
        },
        {
            path: '/login',
            component: () =>
                import ('./views/login.vue'),
        },
        {
            path: '/personalIndex',
            component: () =>
                import ('./views/PersonalIndex.vue')
        },
        {
            path: '/shoppingCart',
            component: () =>
                import ('./views/ShoppingCart.vue')
        },
        {
            path: '/goodInfo',
            component: () =>
                import ('./views/GoodInfo.vue')
        }
>>>>>>> 5583852478cc08d893e3a973a64bfa06d5c7e6db
    ]
})