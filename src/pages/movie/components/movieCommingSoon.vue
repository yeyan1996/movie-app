<template>
    <ul>
        <!--<loading v-if="x"></loading>-->
        <router-link :to="{path:'/detail/'+movie.id}" tag="li" v-for="movie in movieCommingSoonList" :key="movie.id">
            <moviePanel :movie="movie">
                <div class=info>
                    <p class="title">{{movie.name}}</p>
                <i class="iconfont icon-right icon"></i>
                    <p class="intro">{{movie.intro}}</p>
                    <p class="orange"> <span>{{movie.premiereAt|getDay}}上映</span> <span>{{movie.premiereAt|getTime}}</span></p>
                </div>
            </moviePanel>
        </router-link>
    </ul>
</template>

<script>
import {mapMutations, mapState} from 'vuex'
import loading from 'common/loading'
import moviePanel from 'common/moviePanel'
export default {
    name: 'movieCommingSoon',
    components: {
        moviePanel,
        loading
    },
    data () {
        return {
            x: true
        }
    },
    filters: {
        getDay: function (time) {
            let date = new Date(time)

            let month = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1)

            let day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate()

            return month + '月' + day + '日'
        },
        getTime (time) {
            let d = new Date(time)

            let day = d.getDay(time)

            const weekday = new Array(7)
            weekday[0] = '日'
            weekday[1] = '一'
            weekday[2] = '二'
            weekday[3] = '三'
            weekday[4] = '四'
            weekday[5] = '五'
            weekday[6] = '六'

            day = weekday[day]
            return '星期' + day
        }
    },
    methods: {
        ...mapMutations(['movieCommingSoonGetInfo', 'updateLoadingStatus'])
    },
    computed: {
        ...mapState(['movieCommingSoonList'])
    },
    mounted () {
        this.movieCommingSoonGetInfo()
    },
    updated () {
      this.updateLoadingStatus({isLoading: false})
    },
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
        i{
            float:right;
            color: #e5e5e5
        }

        > p {
            line-height: .75rem;
            font-size: .375rem;
            color: #8e8e8e;
            height:.75rem;
        }
        .orange{
            color:orange;
        }
    }
</style>
