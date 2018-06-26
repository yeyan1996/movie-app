<!--suppress ALL -->
<template>
    <div>
<homeSwiper></homeSwiper>
<homeMovie></homeMovie>
<commingSoonMovie></commingSoonMovie>
    </div>
</template>

<script>
import homeMovie from 'pages/home/components/homeMovie'
import homeSwiper from 'pages/home/components/homeSwiper'
import commingSoonMovie from 'pages/home/components/commingSoonMovie'
export default {
    name: 'home',
  components:{
      homeSwiper,
      homeMovie,
    commingSoonMovie
  }
}
</script>

<style lang="scss" scoped>

</style>
