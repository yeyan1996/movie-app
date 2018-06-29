<template>
    <section>
    <movieHeader></movieHeader>
      <router-view></router-view>
    </section>
</template>

<script>
import movieHeader from 'pages/movie/components/movieHeader'
export default {
    name: 'movie',
    components: {
        movieHeader,
    }
}
</script>

<style scoped>
*{
    background: #f8f8f8;
    padding:.2rem;
}
</style>
