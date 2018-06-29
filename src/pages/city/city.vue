<!--suppress ALL -->
<template>
    <div>
    <GPS></GPS>
    <hotCity></hotCity>
    <alphabet :obj="obj"></alphabet>
        <list  :obj="obj"></list>
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
          q:[],
          obj:{}
        }
    },
    components: {
        GPS,
        hotCity,
        alphabet,
        list
    },
  methods:{
      getInfo(){
        axios.get('/api/v4/api/city?__t=1530066943888')
          .then(res => {
            if (res.status === 200 && res.data.msg === 'ok') {
              this.cityList = res.data.data.cities
              // console.log(vm.cityList)
              this.changeApi()
            }
          })
          .catch(err => { console.log(err) })
      },
      changeApi(){
        this.cityList.forEach(
          (item) => {
            let x = item.pinyin.slice(0, 1)
            if (this.alphabetList.indexOf(x) < 0) {
              this.alphabetList.push(x)
            }
          }
        )
        this.alphabetList.sort()



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

        for(let i in this.alphabetList) {
          let key=this.alphabetList[i]
          this.obj[key] = this.q[i]
        }
      }

  },
    mounted () {
        // const vm = this
      this.getInfo()
    },
    // beforeRouteEnter (to, from, next) {
    //     next(vm => {
    //
    //     })
    // }
}
</script>

<style scoped>
*{
    background: white;
}
</style>
