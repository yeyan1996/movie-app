<template>
    <div class="container">
        <img src="https://pic.maizuo.com/usr/movie/0dc8b7161fd3b07b0561bdef70e2c398.jpg?x-oss-process=image/resize,m_fixed,h_0,w_300" alt="">
        <div class=info>
         <p class="title">生孩越狱</p>
        <p class="orange">8.3 <i class="iconfont icon-right icon"></i></p>
        <p class="intro"></p>
        <p>1家影院上映</p>
        <p>123123人购票</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'moviePanel'
}
</script>

<style lang="scss" scoped>
.container{
    height:3.875rem;
    display: flex;
    align-items: center;
    img{
        height:2.58rem;
        width:1.875rem;
    }
    .info {
        flex:1;
        .title {
            color: black;
            font-size: .5rem;
            font-weight: bold
        }
        > p.orange {
            color: orange;
            .icon {
                color: #e5e5e5
            }
        }
        > p {
            font-size: .375rem;
            color: #8aa2bf
        }
    }
}
</style>
