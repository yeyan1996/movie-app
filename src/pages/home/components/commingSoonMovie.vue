<template>
    <section>
        <div class="container">
            <div class="commingIcon">即将上映</div>
            <div class="border"></div>
        </div>
        <homePanel v-for="item in commingSoonMovieList" :key="item.id" :item="item">
            <div >{{item.name}}</div>
            <div></div>
        </homePanel>
        <div class="moreCommingSoonMovieIcon">更多即将上映电影</div>
    </section>
</template>

<script>
import axios from 'axios'
import homePanel from 'common/homePanel'
export default {
    name: 'commingSoonMovie',
    data () {
        return {
            commingSoonMovieList: []
        }
    },
    components: {
        homePanel
    },
    mounted () {
        axios.get('api/v4/api/film/coming-soon?__t=1529935023912&page=1&count=3')
            .then(res => {
                if (res.status === 200 && res.data.msg === 'ok') {
                    this.commingSoonMovieList = res.data.data.films
                    console.log(this.commingSoonMovieList)
                }
            })
            .catch(err => { console.log(err) })
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
</style>
