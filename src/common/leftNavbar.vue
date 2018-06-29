<template>
    <transition>
    <nav class="opacity" v-show="this.leftNavbarShow" @click="handleChange">
        <transition name="fade">
        <div class="container" v-show="this.leftNavbarShow" >
         <router-link :to="{path:'/'}" @click="handleChange">
             <span>首页</span>
             <i class="iconfont icon-right"></i>
         </router-link>

            <router-link :to="{path:'/movie/nowPlaying'}">
                <span>影片</span>
                <i class="iconfont icon-right"></i>
            </router-link>

        </div>
        </transition>
    </nav>
    </transition>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
    name: 'leftNavbar',
    computed: {
        ...mapState(['leftNavbarShow'])
    },
    methods: {
        handleChange () {
            this.showLeftNavbar()
        },
        ...mapMutations(['showLeftNavbar'])
    }
}
</script>

<style  lang="scss" scoped>
    .v-enter-to{
        background:rgba(0,0,0,.5);
    }
    .v-enter{
        background:rgba(0,0,0,0) !important;
    }
  .v-leave-to{
      background:rgba(0,0,0,0) !important;
  }
  .v-leave{
      background:rgba(0,0,0,.5);
  }
    .v-enter-active,.v-leave-active{
        transition:all 1s
    }
   .fade-enter{
       opacity: 0;
       transform-origin: left center;
       transform: translate3d(-100%, 0, 0);
   }
   .fade-enter-to{
       opacity: 1;
       transform-origin: left center;
       transform: translate3d(0, 0, 0);
   }
   .fade-enter-active,.fade-leave-active{
       transition:all .3s ease-out;
   }
   .fade-leave{
       opacity: 1;
       transform-origin: left center;
       transform: translate3d(0, 0, 0);
   }
   .fade-leave-to{
       opacity: 0;
       transform-origin: left center;
       transform: translate3d(-100%, 0, 0);
   }
  .opacity {
      width:100%;
      height:100%;
      position: fixed;
      z-index: 100;
      background:rgba(0,0,0,.5);
      .container {
          border-top:.01rem solid gray;
          background: black;
          width: 70%;
          height: 100%;
          position: fixed;
          z-index: 100;
          >a{
              padding:0 .5rem;
              color:white;
              height:1.5rem;
              display: flex;
              align-items: center;
              justify-content: space-between;
          span{
              font-size:.5rem;
          }
          }
      }
  }
</style>
