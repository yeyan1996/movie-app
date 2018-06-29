<template>
    <div class="container">
        <div class="imgContainer">  <img :src="movie.poster.origin" alt=""></div>
     <slot></slot>
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

}
</style>
