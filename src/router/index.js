import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home/home'
import city from '@/pages/city/city'
import movie from '@/pages/movie/movie'
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: home
        },
        {
            path: '/city',
            name: 'city',
            component: city
        },
        {
            path: '/movie',
            name: 'movie',
            component: movie
        }

    ],
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
})
