<template>
    <section>
        <div class="container" v-for="(item,key) in AllCities" :key="key">
            <div class="title">{{key}}</div>
            <ul class="list" >
                <li v-for="innerItem in item" :key="innerItem.id" @click="handleChange(innerItem.name)">{{innerItem.name}}</li>
            </ul>
        </div>
    </section>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
    name: 'list',
    computed: {
        ...mapState(['alphabetList', 'AllCities'])
    },
    methods: {
        handleChange (value) {
            this.changeCityName({city: value})
            this.$router.push('/')
        },
        ...mapMutations(['changeCityName'])
    }


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
