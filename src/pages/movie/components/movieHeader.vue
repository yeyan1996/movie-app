<template>
    <section>
        <div class="container">
            <router-link :to="{path:'/movie/nowPlaying'}">正在热映</router-link>
            <router-link :to="{path:'/movie/movieCommingSoon'}">即将上映</router-link>
        </div>
    </section>
</template>

<script>
  export default {
    name: 'movieHeader'
  }
</script>

<style lang="scss" scoped>
.container{
    display: flex;
    text-align: center;
    height:1.2rem;

    >a{
        color:black;
        font-size:.5rem;
        line-height:1rem;
        height:100%;
        width:50%;
        border-bottom:.05rem solid orange;
    }
}
.router-link-active{
    color:orange !important;
    border-bottom: .12rem solid orange !important;
}
</style>