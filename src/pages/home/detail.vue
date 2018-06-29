<template>
    <section>
        <img :src="this.list.cover.origin" alt="">
        <div class="movieIntro">影片简介</div>
        <div>导&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp演: <span>{{list.director}}</span></div>
        <div>主&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp演: <span v-for="(item,index) in list.actors" :key="index">{{item.name}}</span></div>
        <div>地区语言: <span>{{list.nation}}({{list.language}})</span></div>
        <div>类&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp型: <span>{{list.category}}</span></div>
        <div>上映日期: <span>{{list.premiereAt|getDay}}上映</span></div>
        <div class="intro">{{list.synopsis}}</div>
        <router-link :to="{name:'home'}" class="buyTicket" tag="buttom">
        立即购票
        </router-link>
    </section>
</template>

<script>
import axios from 'axios'
export default {
    name: 'detail',
    props: ['id'],
    data () {
        return {
            list: {},
            movieDate: ''
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
    methods: {
        getInfo () {
            axios.get('/api/v4/api/film/' + this.id + '?__t=1530258651518')
                .then(res => {
                    if (res.status === 200 && res.data.msg === 'ok') {
                        this.list = res.data.data.film
                    }
                }).catch(err => { console.log(err) })
        },
        getMovieTime () {
            const date = new Date(this.list.premiereAt)
            console.log(date)
            console.log(this.list.premiereAt)
            this.movieDate = date.getMonth() + '月' + date.getDate() + '日'
        }
    },
    mounted () {
        this.getInfo()
        this.getMovieTime()
        console.log(this)
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
