<template>
    <section>
        <div class="container" v-for="(alphabet,index) in alphabetList" :key="index">
            <div class="title">{{alphabet}}</div>
            <ul class="list">
                <li v-for="item in filterList" :key="item.id">{{item.name}}</li>
            </ul>
        </div>
    </section>
</template>

<script>
export default {
    name: 'list',
    props: {
        cityList: {type: Array},
        alphabetList: {type: Array},
        q: {type: Array}
    },
    data () {
        return {
            filterList: []

        }
    }
    // watch: {
    //     cityList () {
    //         this.filterList = this.cityList.filter(
    //             (item) => {
    //                 return item.pinyin.slice(0, 1) === 'A'
    //             }
    //         )
    //         // console.log(this.filterList)
    //     }
    //
    // }
}
</script>

<style  lang="scss" scoped>
    .title{
        padding:.4rem;
        font-size:.45rem;
        background: #eeeeee;
    }
    .list{
        display: flex;
        text-align: center;
        flex-wrap:wrap;
        >li{
            box-sizing: border-box;
            width:25%;
            background: white;
            padding:.4rem .3rem;
            font-size:.5rem;
            border-bottom:.001rem solid #d7d7d7;
        }
    }
</style>
