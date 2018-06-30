<template>
  <header>
      <div class="container">
          <div class="iconContainer ">
              <a  class="iconfont icon-unorderedlist" @click="handleChange"></a>
          </div>

           <div class="hotMovie">
          <p >{{this.title}}</p>
           </div>
          <div class="right">
          <router-link :to="{name:'city'}" tag="div" class="city">
          <p >{{this.city}}</p>
          <a class="iconfont icon-down " ></a>
          </router-link>

          <div class="iconContainer" >
          <a class="iconfont icon-user "></a>
          </div>

          </div>
      </div>
  </header>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
    name: 'Header',
    computed: {
        ...mapState(['city', 'title'])
    },
    methods: {
        handleChange () {
            this.showLeftNavbar()
        },
        ...mapMutations(['showLeftNavbar'])
    }
}
</script>

<style lang="scss" scoped>
.container{
    top:0;
    position: fixed;
    z-index:100;
    width:100%;
    height:1.5rem;
    background: black;
    display: flex;
    align-items: center;
    .city{
        height:100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .hotMovie{
        height:100%;
        display: flex;
        align-items: center;
    }
    p{
        margin-left:.2rem;
        color:white;
    }
    a{
        font-size:.5rem;
        color:white;
    }

    .iconContainer{
       width:1.5rem;
      height:100%;
        display: flex;
        align-items: center;
        justify-content: center;
        &:first-child {
            border-right: 1px solid #353535;
        }
        }

    .right{
      display: flex;
     height:100%;
     position: absolute;
        right:0;
    }

}
</style>
