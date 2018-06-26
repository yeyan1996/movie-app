<template>
    <div>
 <Header></Header>
        <div style="margin-bottom: 1.5rem"></div>
        <leftNavbar></leftNavbar>
   <router-view/>
    </div>
</template>

<script>
import Header from 'common/Header'
import leftNavbar from 'common/leftNavbar'
export default {
    name: 'app',
    components: {
        Header,
      leftNavbar
    }
}
</script>

<style scoped>

</style>
