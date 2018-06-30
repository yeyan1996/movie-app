<!--suppress ALL -->
<template>
    <div>
<homeSwiper></homeSwiper>
<homeNowPlaying></homeNowPlaying>
<homeCommingSoon></homeCommingSoon>
    </div>
</template>

<script>
import homeNowPlaying from 'pages/home/components/homeNowPlaying'
import homeSwiper from 'pages/home/components/homeSwiper'
import homeCommingSoon from 'pages/home/components/homeCommingSoon'
export default {
    name: 'home',
  components:{
      homeSwiper,
    homeNowPlaying,
      homeCommingSoon
  }
}
</script>

<style lang="scss" scoped>

</style>
