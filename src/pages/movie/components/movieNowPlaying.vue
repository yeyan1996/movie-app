<template>
   <ul>
       <router-link :to="{path:'/detail/'+movie.id}" tag="li" v-for="movie in nowPlayingList" :key="movie.id">
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
import {mapActions,mapMutations, mapState} from 'vuex'
import moviePanel from 'common/moviePanel'
export default {
    name: 'movieNowPlaying',
    components: {
        moviePanel
    },
    data () {
        return {
        }
    },
    methods: {
        ...mapActions(['nowPlayingGetInfoAsync']),
      ...mapMutations(['updateLoadingStatus','updateLoadingStatus'])
    },
    computed: {
        ...mapState(['nowPlayingList'])
    },
    mounted () {
      this.updateLoadingStatus({isLoading: true})
        this.nowPlayingGetInfoAsync()
    },
    // updated () {
    //     this.updateLoadingStatus({isLoading: false})
    // }

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
