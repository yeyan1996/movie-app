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
export default store
