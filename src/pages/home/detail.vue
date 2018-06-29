<template>
    <section>
        <img :src="this.list.cover.origin" alt="">
        <div class="intro">影片简介</div>
        <div>导演:{{list.director}}</div>
        <div>主演: <span v-for="(item,index) in list.actors" :key="index">{{item.name}}</span></div>
        <div>地区语言:{{list.nation}}({{list.language}})</div>
        <div>类型:{{list.category}}</div>
        <div>上映日期:{{list.premiereAt|getDay}}上映</div>
        <div>{{list.synopsis}}</div>
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
            axios.get('/api/v4/api/film/4242?__t=1530258651518')
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
div{
    margin:.5rem;
    .intro{
        margin:.5rem .5rem .5rem 0;
        font-size:.5rem;
        padding-left:.1rem;
        border-left:.5rem solid orange;
    }
}

</style>
