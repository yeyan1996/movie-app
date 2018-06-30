<template>
    <div>
 <Header></Header>
        <div style="margin-bottom: 1.5rem"></div>
        <leftNavbar></leftNavbar>
        <loading v-if="loading"></loading>
        <router-view v-else></router-view>
    </div>
</template>

<script>
import Header from 'common/Header'
import leftNavbar from 'common/leftNavbar'
import loading from 'common/loading'
export default {
    name: 'app',
    data(){
      return{
        loading:true
      }
    },
    components: {
        Header,
        leftNavbar,
      loading
    }
}
</script>

<style lang="scss" scoped>

</style>
