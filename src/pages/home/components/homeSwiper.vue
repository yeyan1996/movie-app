<template>
    <commonSwiper :list="this.list" :swiperOption="swiperOption"></commonSwiper>
</template>

<script>
import commonSwiper from 'common/commonSwiper'
export default {
    name: 'homeSwiper',
    data () {
        return {
            list: [
                {
                    imgUrl: 'https://pic.maizuo.com/h5PicUpload/062a965ab71db31fe0b7ad6f8c529935.jpg',
                    id: '0001'
                }
            ],
            swiperOption: {
                loop: true,
                autoplay: true,
                pagination: {
                    el: '.swiper-pagination'
                }
            }

        }
    },
    components: {
        commonSwiper
    }
}
</script>

<style scoped>

</style>
