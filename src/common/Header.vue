<template>
  <header>
      <div class="container">
          <div class="iconContainer">
              <a  class="iconfont icon-unorderedlist" @click="handleChange"></a>
          </div>

          <p>卖座电影</p>

          <p style="margin-left: 4.5rem">{{this.city}}</p>
          <router-link :to="{name:'city'}">
          <a class="iconfont icon-down " ></a>
          </router-link>
          <div class="iconContainer" >
          <a class="iconfont icon-user right"></a>
          </div>

      </div>
  </header>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
    name: 'Header',
    computed: {
        ...mapState(['city'])
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

    p{
        margin-left:.2rem;
        color:white;
    }
    a{
        color:white;
    }
    .iconContainer{
       width:12%;
      height:100%;
        display: flex;
        align-items: center;
        justify-content: center;
        &:nth-child(1){
           &:after{
               content:'';
               height:100%;
                margin-left:.15rem;
               border-left:1px solid #404040;

           }
        }
    }
    .right{
       float:right;
    }
}
</style>
