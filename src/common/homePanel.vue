<template>
    <section :class="custom">
        <div class="container" >
            <img :src="item.cover.origin" alt="">
            <div class="textContainer">
                <slot></slot>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'homePanel',
    props: {
        custom: {
            type: String,
            default: ''
        },
        item: {
            type: [Array, Object]
        }
    }
}
</script>

<style lang="scss" scoped>
    .container {
        display: flex;
        height: 6.375rem;
        background: white;
        box-shadow: 5px 5px 30px #4c4c4c;
        box-sizing: border-box;
        margin: .5rem .25rem;
        flex-direction: column;
        > img {
            width: 100%;
            height: 80%
        }
        .textContainer {
            height: 100%;
            position: relative;
            margin: .15rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }
</style>
