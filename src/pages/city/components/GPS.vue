<template>
    <section>
        <div class="container">
        <div class="title">GPS定位你所在的城市</div>
        <div class="city">上海</div>
        </div>
    </section>
</template>

<script>
  export default {
    name: 'GPS'
  }
</script>

<style lang="scss" scoped>
.container{
    .title{
        padding:.4rem;
        font-size:.45rem;
        background: #eeeeee;
    }
    .city{
     padding:.55rem;
        font-size:.5rem;
        background: white;
        color: orange;
}
}
</style>