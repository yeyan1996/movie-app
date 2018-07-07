<template>
    <section>
        <div class="container">
            <div class="commingIcon">即将上映</div>
            <div class="border"></div>
        </div>
        <router-link  :to="{path:'/detail/'+item.id}" tag="div" v-for="item in homeCommingSoonList" :key="item.id" >
        <homePanel :item="item">
            <div >{{item.name}}</div>
            <div class="orange">{{item.premiereAt|getDay}}上映</div>
        </homePanel>
        </router-link>
        <div class="moreCommingSoonMovieIcon">更多即将上映电影</div>
    </section>
</template>

<script>
import {mapActions,mapMutations, mapState} from 'vuex'
import homePanel from 'common/homePanel'
export default {
    name: 'commingSoonMovie',
    data () {
        return {
        }
    },
    filters: {
        getDay: function (time) {
            let date = new Date(time)

            let month = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1)

            let day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate()

            return month + '月' + day + '日'
        }
    },
    components: {
        homePanel
    },
    methods: {
        ...mapActions(['homeCommingSoonGetInfoAsync']),
      ...mapMutations(['updateLoadingStatus', 'updateLoadingStatus'])
    },
    computed: {
        ...mapState(['homeCommingSoonList'])
    },
    mounted () {
      this.updateLoadingStatus({isLoading: true})
        this.homeCommingSoonGetInfoAsync()
    },
  updated () {
    // this.updateLoadingStatus({isLoading: false})
  }
}
</script>

<style lang="scss" scoped>
    .container {
        position: relative;
    .commingIcon {
        text-align: center;
        margin: .5rem auto;
        padding: .2rem 0;
        background: #585858;
        width: 30%;
        border-radius: .5rem;
        color: white;

    }
    .border {
        position: absolute;
        width: 100%;
        border: .02rem solid gray;
        height: 0;
        top:50%;
        z-index:-1;
    }
    }
    .moreCommingSoonMovieIcon{
        border:.05rem solid #a1a1a1;
        padding:.1rem .5rem;
        margin:1rem auto;
        background:#dddddd;
        text-align: center;
        width:30%;
        border-radius:1rem;
    }
    .orange{
   color:orange;
    }
</style>
