<template>
   <ul>
       <li v-for="movie in movieList" :key="movie.id">
           <moviePanel :movie="movie"></moviePanel>
       </li>
   </ul>
</template>

<script>
import axios from 'axios'
import moviePanel from 'common/moviePanel'
export default {
    name: 'nowPlaying',
    components: {
        moviePanel
    },
    data () {
        return {
            movieList: []
        }
    },

    mounted () {
        axios.get('api/v4/api/film/now-playing?page=1&count=7')
            .then(res => {
                if (res.status === 200 && res.data.msg === 'ok') {
                    this.movieList = res.data.data.films
                }
            })
            .catch(err => { console.log(err) })
    }

}
</script>

<style scoped>

</style>
