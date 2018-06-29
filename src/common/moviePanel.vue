<template>
    <div class="container">
        <div class="imgContainer">  <img :src="movie.poster.origin" alt=""></div>
        <div class=info>
         <p class="title">{{movie.name}}</p>
        <p class="orange">{{movie.grade}} <i class="iconfont icon-right icon"></i></p>
        <p class="intro">{{movie.intro}}</p>
        <p><span>{{movie.cinemaCount}}家影院上映</span><span style="margin-left: .8rem;">{{movie.watchCount}}人购票</span></p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'moviePanel',
    props: {
        movie: {type: Object}
    }
}
</script>

<style lang="scss" scoped>
.container{
    height:3.875rem;
    display: flex;
    align-items: center;
    border-bottom: 0.05rem dotted #c8c8c8;
    .imgContainer{
        height:2.58rem;
        width:1.875rem;
        img{
            width:100%;
            height:100%;
        }
    }
    .info {
        flex:1;
        height:2.58rem;
        margin-left:.4rem;
        .title {
            color: black;
            font-size: .5rem;
            line-height:.5rem;;
            font-weight: bold
        }
        > p.orange {
            color: orange;
            float:right;
            font-size:.5rem;
            .icon {
                color: #e5e5e5
            }
        }
        > p {
            line-height: .75rem;
            font-size: .375rem;
            color: #8aa2bf;
            height:.75rem;
        }
    }
}
</style>
