<template>
    <section>
        <transition appear appear-active-class="animated fadeIn">
        <img :src="detailList.img" >
        </transition>
        <div class="movieIntro">影片简介</div>
        <div>导&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp演: <span>{{this.detailList.director}}</span></div>
        <div>主&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp演: <span v-for="(item,index) in this.detailList.actors" :key="index" class="actors">{{item.name}}</span></div>
        <div>地区语言: <span>{{this.detailList.nation}}({{this.detailList.language}})</span></div>
        <div>类&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp型: <span>{{this.detailList.category}}</span></div>
        <div>上映日期: <span>{{this.detailList.premiereAt|getDay}}上映</span></div>
        <div class="intro">{{this.detailList.synopsis}}</div>
        <router-link :to="{path:'/cinema'}" class="buyTicket" tag="button">
        立即购票
        </router-link>
    </section>
</template>

<script>
import {mapMutations, mapState} from 'vuex'
export default {
    name: 'detail',
    props: ['id'],
    data () {
        return {
            // movieDate: ''
        }
    },
    filters: {
        getDay: function (time) {
            let date = new Date(time)

            let year = date.getFullYear()

            let month = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1)

            let day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate()

            return year + '-' + month + '-' + day
        }
    },
    computed: {
        ...mapState(['detailList'])
    },
    methods: {
        // getMovieTime () {
        //     const date = new Date(this.detailList.premiereAt)
        //
        //     this.movieDate = date.getMonth() + '月' + date.getDate() + '日'
        // },
        ...mapMutations([ 'changeTitleName', 'detailGetInfo'])
    },
    mounted () {
        this.detailGetInfo({id: this.id})
        // this.getMovieTime()
    },
    beforeDestroy () {
        this.changeTitleName()
    }

}
</script>

<style lang="scss" scoped>
img{
    width:100%;
}
>span{
    margin-left:.15rem;
}
div{
    margin:.5rem;
    .movieIntro{
        margin:.5rem .5rem .5rem 0;
        font-size:.5rem;
        padding-left:.1rem;
        border-left:.5rem solid orange;
    }
    .intro{
        letter-spacing:.015rem;
        line-height:.6rem;
    }
    span.actors{
        letter-spacing:.015rem;
        &:not(:last-child):after{
            content: '|';
        }
    }
}
.buyTicket{
    position: fixed;
    left:25%;
    bottom:.5rem;
    display:flex;
    font-size:.4rem;
    color:white;
    justify-content: center;
    align-items:center;
    width:4.875rem;
    height:1rem;
    border-radius:1rem;
    background: orange;
}

</style>
