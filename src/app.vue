<template>
    <div>
 <Header></Header>
        <div style="margin-bottom: 1.5rem"></div>
   <router-view/>
    </div>
</template>

<script>
import Header from 'common/Header'
export default {
    name: 'app',
    components: {
        Header
    }
}
</script>

<style scoped>

</style>
