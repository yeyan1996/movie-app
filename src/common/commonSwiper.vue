<template>
    <section :class="[swiper,custom]">
    <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="item in list" :key="item.id">
            <div >
            <img :src="item.imgUrl" alt="">
            </div>
        </swiper-slide>
        <!--<div  class="swiper-pagination" slot="pagination" v-if="swiperOption.pagination"></div>-->
    </swiper>
    </section>
</template>

<script>
export default {

    props: {
        list: {
            type: Array,
            required: true
        },
        swiperOption: {
            type: Object,
            default () {
                return {
                    loop: true,
                    autoplay: true
                }
            }
        },
        custom: {
            type: String,
            default: ''
        }
    },

    name: 'commonSwiper',
    data () {
        return {
            swiper: 'swiper'
        }
    }
}

</script>

<style lang="scss" scoped>
.swiper{
    height:5.625rem;
    img{
        width:100%;

    }
}
</style>
