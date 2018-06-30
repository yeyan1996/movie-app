<template>
    <div>
    <img src="../assets/loading.gif" />
    </div>
</template>
<script>
  export default {
    name: 'loading'
  }
</script>

<style scoped>
    div{
        position: absolute;
        z-index:100;
        width:100%;
        background: #0f4580;
        height:16.25rem;
        display: flex;
        align-items: center;
    }
img{
    width:100%;
}
</style>