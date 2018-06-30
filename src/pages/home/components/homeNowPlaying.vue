<template>
    <section>
            <router-link :to="{path:'/detail/'+item.id}" tag="div" v-for="item in homeNowPlayingList" :key="item.id" >
                <homePanel :item="item">
        <div>
            <p class="bold">{{item.name}}</p>
            <p class="grey">{{item.cinemaCount}}家电影院上映  {{item.watchCount}}人购票</p>
        </div>
        <div class="orange">{{item.grade}}</div>
                </homePanel>
            </router-link>
        <div class="moreHotMovieIcon">更多热映电影</div>
    </section>
</template>

<script>
import {mapActions,mapMutations, mapState} from 'vuex'
import homePanel from 'common/homePanel'
export default {
    name: 'homeMovie',
    components: {
        homePanel
    },
    data () {
        return {
        }
    },
    methods: {
        ...mapActions(['homeNowPlayingGetInfoAsync']),
      ...mapMutations(['updateLoadingStatus'])
    },
    computed: {
        ...mapState(['homeNowPlayingList'])
    },
    mounted () {
        this.homeNowPlayingGetInfoAsync()
    },
  updated () {
    this.updateLoadingStatus({isLoading: false})
  }
}
</script>

<style lang="scss" scoped>
                .bold {
                    font-weight: bold;
                    font-size: .1rem;
                }
                .grey {
                    font-size: .2rem;
                    color: gray;
                }
                .orange {
                    margin-right:.2rem;
                    color: orange;
                    font-size:.6rem;
                }
    .moreHotMovieIcon{
        border:.05rem solid #a1a1a1;
        padding:.1rem .5rem;
        margin:1rem auto;
        background:#dddddd;
        text-align: center;
        width:30%;
        border-radius:1rem;
    }
</style>
