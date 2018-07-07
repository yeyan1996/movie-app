<template>
    <div>
 <Header></Header>
        <div style="margin-bottom: 1.5rem"></div>
        <leftNavbar></leftNavbar>
        <loading v-if="this.loading"></loading>
<keep-alive>
        <router-view ></router-view>
</keep-alive>
    </div>
</template>

<script>
import Header from 'common/Header'
import leftNavbar from 'common/leftNavbar'
import loading from 'common/loading'
import {mapState} from 'vuex'
export default {
    name: 'app',
    data () {
        return {
        }
    },
    components: {
        Header,
        leftNavbar,
        loading
    },
    computed: {
        ...mapState(['loading'])
    }

}
</script>

<style lang="scss" scoped>

</style>
