/* eslint-disable no-new */
import Vue from 'vue'
import app from './app.vue'
import '@/assets/iconfont/iconfont.css'
import '@/assets/reset.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import router from './router'
import 'lib-flexible'

Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
new Vue({
    el: '#app',
    router,
    components: {
        app
    },
    template: '<app></app>'
})
