<template>
    <section>
        <div class="container">
            <div class="title">按字母排序</div>
            <ul class="alphabet">
          <li v-for="(item) in alphabetList" :key="item">{{item}}</li>
            </ul>
        </div>
    </section>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name: 'alphabet',
    computed: {
        ...mapState(['alphabetList'])
    }
}
</script>

<style lang="scss" scoped>
    .title{
        padding:.4rem;
        font-size:.45rem;
        background: #eeeeee;
    }
    .alphabet{
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
