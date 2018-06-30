import vue from 'vue'
import vuex from 'vuex'
import state from './state'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
vue.use(vuex)
const store = new vuex.Store({
    state,
    actions,
    getters,
    mutations
})
// 使用vuex插件显示每次mutation操作
store.subscribe((mutation,state)=>{
    console.log(mutation.type)
    console.log(mutation.payload)
})
export default store
