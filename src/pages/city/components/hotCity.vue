<template>
    <section>
        <div class="container">
            <div class="title">热门城市</div>
            <ul class="hotcity">
                <li>北京</li>
                <li>上海</li>
                <li>广州</li>
                <li>深圳</li>
            </ul>
        </div>
    </section>
</template>

<script>
export default {
    name: 'hotCity'

}

</script>

<style lang="scss" scoped>
    .title{
        padding:.4rem;
        font-size:.45rem;
        background: #eeeeee;
    }
    .hotcity{
        display: flex;
        text-align: center;
        flex-wrap:wrap;
        >li{
            box-sizing: border-box;
            width:25%;
            background: white;
            padding:.4rem .3rem;
            font-size:.5rem;
        }
    }
</style>
