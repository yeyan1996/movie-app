<!--suppress ALL -->
<template>
    <div>
    <GPS></GPS>
    <hotCity></hotCity>
    <alphabet ></alphabet>
        <list ></list>
    </div>
</template>

<script>
import GPS from 'pages/city/components/GPS'
import hotCity from 'pages/city/components/hotCity'
import alphabet from 'pages/city/components/alphabet'
import list from 'pages/city/components/list'
import axios from 'axios'
import {mapActions,mapMutations} from 'vuex'
export default {
    name: 'city',
    components: {
        GPS,
        hotCity,
        alphabet,
        list
    },
  methods:{
    ...mapActions(['getCityInfoAsync']),
    ...mapMutations(['updateLoadingStatus'])

  },
   mounted () {
        this.getCityInfoAsync()
      },


  /**
   *有个BUG:一般的updated生命周期函数在这个组件无法使用，所以我换到了vuex中切换loading的状态
   */
  // updated(){
  //  this.updateLoadingStatus({loading:false})
  //
  // }



}
</script>

<style scoped>
*{
    background: white;
}
</style>
