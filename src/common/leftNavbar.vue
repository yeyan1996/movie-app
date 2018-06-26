<template>
    <nav class="opacity" v-show="this.leftNavbarShow">
        <div class="container">
         <a>
             <span>首页</span>
             <i class="iconfont icon-right"></i>
         </a>

            <a>
                <span>影片</span>
                <i class="iconfont icon-right"></i>
            </a>

        </div>
    </nav>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name: 'leftNavbar',
    computed: {
        ...mapState(['leftNavbarShow'])
    }
}
</script>

<style  lang="scss" scoped>
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
