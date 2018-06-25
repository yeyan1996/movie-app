<template>
  <header>
      <div class="container">
          <div class="iconContainer">
              <a  class="iconfont icon-unorderedlist"></a>
          </div>

          <p>卖座电影</p>


          <p style="margin-left: 2.8rem">广州</p>
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
    width:100%;
    height:.8rem;
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
       width:10%;
      height:100%;
        display: flex;
        align-items: center;
        justify-content: center;

    }
    .right{
       float:right;
    }
}
</style>
