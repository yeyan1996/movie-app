<!--suppress ALL -->
<template>
    <div>
    <GPS></GPS>
    <hotCity></hotCity>
    <alphabet :alphabetList="alphabetList"></alphabet>
        <list :cityList="cityList" :alphabetList="alphabetList" q:="q"></list>
    </div>
</template>

<script>
import GPS from 'pages/city/components/GPS'
import hotCity from 'pages/city/components/hotCity'
import alphabet from 'pages/city/components/alphabet'
import list from 'pages/city/components/list'
import axios from 'axios'
export default {
    name: 'city',
    data () {
        return {
            cityList: [],
          alphabetList: [],
          q:[]
        }
    },
    components: {
        GPS,
        hotCity,
        alphabet,
        list
    },
  methods:{
      filterAlphabet(){
        this.cityList.forEach(
          (item) => {
            let x = item.pinyin.slice(0, 1)
            if (this.alphabetList.indexOf(x) < 0) {
              this.alphabetList.push(x)
            }
          }
        )
        this.alphabetList.sort()
      },
    aaa(){
        // console.log(this.alphabetList)
       for(let i of this.alphabetList){
         let x=this.cityList.filter(
           (item)=>{
             return item.pinyin.slice(0,1)===i
           }
         )
         // console.log(x)
         this.q.push(x)

          // console.log(i)
       }
      console.log(this.q)
    }
  },
    mounted () {
        const vm = this
    },
    beforeRouteEnter (to, from, next) {
        next(vm => {
            axios.get('/api/v4/api/city?__t=1530066943888')
                .then(res => {
                    if (res.status === 200 && res.data.msg === 'ok') {
                        vm.cityList = res.data.data.cities
                        // vm.cityList.filter(function(item){return item.pinyin.slice(0,1)='A'})
                      // console.log(vm.cityList)
                     vm.filterAlphabet()
                      vm.aaa()
                    }
                })
                .catch(err => { console.log(err) })
        })
    }
}
</script>

<style scoped>
/**{*/
    /*background: white;*/
/*}*/
</style>
