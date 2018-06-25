import Vue from 'vue'
import app from './app.vue'
import '@/assets/iconfont/iconfont.css'
import '@/assets/reset.css'
Vue.config.productionTip = false
new Vue({
    el: '#app',
    components: {app},
    template: '<app></app>'
})
