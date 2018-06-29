<template>
   <ul>
       <router-link :to="{path:'/detail/'+movie.id}" tag="li" v-for="movie in movieList" :key="movie.id">
           <moviePanel :movie="movie">
               <div class=info>
                   <p class="title">{{movie.name}}</p>
                   <p class="orange">{{movie.grade}} <i class="iconfont icon-right icon"></i></p>
                   <p class="intro">{{movie.intro}}</p>
                   <p><span>{{movie.cinemaCount}}家影院上映</span><span style="margin-left: .8rem;">{{movie.watchCount}}人购票</span></p>
               </div>
           </moviePanel>
       </router-link>
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

<style lang="scss" scoped>
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
            i{
                color: #e5e5e5
            }
        }
        > p {
            line-height: .75rem;
            font-size: .375rem;
            color: #8e8e8e;
            height:.75rem;
        }
    }
</style>
