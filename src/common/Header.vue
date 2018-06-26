<template>
  <header>
      <div class="container">
          <div class="iconContainer">
              <a  class="iconfont icon-unorderedlist"></a>
          </div>

          <p>卖座电影</p>


          <p style="margin-left: 4.5rem">广州</p>
          <a class="iconfont icon-down " ></a>
          <div class="iconContainer" >
          <a class="iconfont icon-user right"></a>
          </div>


      </div>
  </header>
</template>

<script>
export default {
    name: 'Header'
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
