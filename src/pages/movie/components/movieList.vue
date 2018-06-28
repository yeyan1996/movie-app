<template>
   <ul>
       <li>
           <moviePanel></moviePanel>
       </li>
   </ul>
</template>

<script>
import moviePanel from 'common/moviePanel'
export default {
    name: 'movieList',
    components: {
        moviePanel
    }
}
</script>

<style scoped>

</style>
