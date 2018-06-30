<!--suppress ALL -->
<template>
    <div class="fix" ref="list">
        <div>
            <!--GPS定位-->
            <div class="GPS">
                <div class="title">GPS定位你所在的城市</div>
                <div class="city">上海</div>
            </div>
                   <!--热门城市-->
            <div class="hotCity">
                <div class="title">热门城市</div>
                <ul class="hotCityList">
                    <li  @click="changeHotCity">北京</li>
                    <li @click="changeHotCity">上海</li>
                    <li @click="changeHotCity">广州</li>
                    <li @click="changeHotCity">深圳</li>
                </ul>
            </div>
                <!--字母索引-->
            <div class="alphabet">
                <div class="title">按字母排序</div>
                <ul class="alphabetList">
                    <li v-for="(item) in alphabetList" :key="item" @click="handleScroll">{{item}}</li>
                </ul>
            </div>
               <!--城市列表-->
            <div class="list" v-for="(item,key) in AllCities" :key="key">
                <div class="title" :ref="key">{{key}}</div>
                <ul class="cityList" >
                    <li v-for="innerItem in item" :key="innerItem.id" @click="handleChange(innerItem.name)">{{innerItem.name}}</li>
                </ul>
            </div>

            <!--<alphabet @searchCity="changeCity"></alphabet>-->
            <!--<list :cityFirstName="cityFirstName"></list>-->
        </div>
    </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import axios from 'axios'
  import { mapState,mapActions, mapMutations } from 'vuex'

  export default {
    name: 'city',
    data(){
      return{
        cityFirstName:''
      }
    },
    computed:{
      ...mapState(['alphabetList', 'AllCities'])
    },
    methods: {
      changeHotCity(e){
        this.changeCityName({city: e.target.innerHTML})
        this.$router.push('/')
      },
      handleScroll(e){
        this.cityFirstName=e.target.innerHTML
      },
      handleChange (value) {
        this.changeCityName({city: value})
        this.$router.push('/')
      },
      changeCity(value){
        this.cityFirstName=value
      },
      ...mapActions(['getCityInfoAsync']),
      ...mapMutations(['updateLoadingStatus', 'changeTitleName','changeCityName'])
    },
    watch: {
      cityFirstName () {
        const element = this.$refs[this.cityFirstName][0]
        this.scroll.scrollToElement(element)
      }
    },
    mounted () {
      this.scroll = new BScroll(this.$refs.list, {
        // better-scroll 默认会阻止浏览器的原生 click 事件。当设置为 true，better-scroll 会派发一个 click 事件
        click: true
      })
      this.getCityInfoAsync()
      this.changeTitleName({title: '选择城市'})
    },
    beforeDestroy () {
      this.changeTitleName({title: '卖座电影'})
    }


    /**
     *有个BUG:一般的updated生命周期函数在这个组件无法使用，所以我换到了vuex中切换loading的状态
     */
    // updated(){
    //  this.updateLoadingStatus({loading:false})
    //
    // }

  }
</script>

<style lang="scss" scoped>
    * {
        background: white;
    }
    .fix {
    /*页面锁死 */
    overflow: hidden;
        position: absolute;
        top: 1.5rem;
        left: 0;
        right: 0;
        bottom: 0;
        .GPS{
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
        .hotCity{
            .title{
                padding:.4rem;
                font-size:.45rem;
                background: #eeeeee;
            }
            .hotCityList{
                display: flex;
                text-align: center;
                flex-wrap:wrap;
                >li{
                    box-sizing: border-box;
                    width:25%;
                    background: white;
                    padding:.4rem .3rem;
                    font-size:.5rem;
                }
            }
        }
        .alphabet{
            .title{
                padding:.4rem;
                font-size:.45rem;
                background: #eeeeee;
            }
            .alphabetList{
                display: flex;
                text-align: center;
                flex-wrap:wrap;
                >li{
                    box-sizing: border-box;
                    width:25%;
                    background: white;
                    padding:.4rem .3rem;
                    font-size:.5rem;
                    border-bottom:.001rem solid #d7d7d7;
                }
            }
        }
        .list{
            .title{
                padding:.4rem;
                font-size:.45rem;
                background: #eeeeee;
            }
            .cityList{
                display: flex;
                text-align: center;
                flex-wrap:wrap;
                >li{
                    box-sizing: border-box;
                    width:25%;
                    background: white;
                    padding:.4rem .3rem;
                    font-size:.5rem;
                    border-bottom:.001rem solid #d7d7d7;
                }
            }
        }



    }

</style>
