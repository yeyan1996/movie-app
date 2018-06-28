<template>
    <section>
    <movieHeader></movieHeader>
        <movieList></movieList>
    </section>
</template>

<script>
import movieHeader from 'pages/movie/components/movieHeader'
import movieList from 'pages/movie/components/movieList'
export default {
    name: 'movie',
    components: {
        movieHeader,
        movieList
    }
}
</script>

<style scoped>
*{
    background: white;
    padding:.2rem;
}
</style>
