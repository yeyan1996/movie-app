<template>
    <ul>
        <li></li>
    </ul>
</template>

<script>
import axios from 'axios'
export default {
    name: 'cinema',
    data () {
        return {
            cinemas: [],
            district:[]
        }
    },
    methods: {
        getInfo () {
            axios.get('/api/v4/api/film/4243/cinema?__t=1530329722159')
                .then(res => {
                    if (res.status === 200 && res.data.msg === 'ok') {
                        this.cinemas = res.data.data.cinemas
                    }
                })
                .catch(err => { console.log(err) })
          console.log(this.cinemas)

        },


    },
    mounted () {
        this.getInfo()
    }
    // beforeRouteEnter (to, from, next) {
    //     next(vm => {
    //
    //     })
    // }
}
</script>

<style scoped>

</style>
