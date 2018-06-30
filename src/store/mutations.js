
export default {
    updateLoadingStatus (state, payload) {
        state.loading = payload.isLoading
        console.log(state.loading)
    },
    showLeftNavbar (state) {
        state.leftNavbarShow = !state.leftNavbarShow
    },
    changeTitleName (state,payload) {
        state.title = payload.title
    },

    getCityInfo (state, payload) {
        /**
       * 修改Api接口，提取城市首字母
       */
        payload.data.cities.forEach(
            (item) => {
                let x = item.pinyin.slice(0, 1)
                if (state.alphabetList.indexOf(x) < 0) {
                    state.alphabetList.push(x)
                }
            }
        )
        state.alphabetList.sort()
        /**
       * 修改Api接口，把城市首字母和城市信息组合成对象，存在刷新后无法完整显示的BUG
       */
        const cityWithoutAlphabet = []
        for (let i of state.alphabetList) {
            let x = payload.data.cities.filter(
                (item) => {
                    return item.pinyin.slice(0, 1) === i
                }
            )
            cityWithoutAlphabet.push(x)
        }
        for (let i in state.alphabetList) {
            let key = state.alphabetList[i]
            state.AllCities[key] = cityWithoutAlphabet[i]
        }

      /**
       *有个BUG:一般的updated生命周期函数在这个组件无法使用，所以我换到了vuex中切换loading的状态
       */
     state.loading = false
    },

    changeCityName (state, payload) {
        state.city = payload.city
        localStorage.city = payload.city
    },

    homeCommingSoonGetInfo (state, payload) {
        state.homeCommingSoonList = payload.data.films
    },

    homeNowPlayingGetInfo (state, payload) {
        state.homeNowPlayingList = payload.data.films
    },

    detailGetInfo (state, payload) {
        state.detailList = payload.data.film
        // 对象中origin老是报错就把他替换成新的对象了
        state.detailList.img = state.detailList.cover.origin
        // 修改标题的名字
        state.title = payload.data.film.name
    },

    movieCommingSoonGetInfo (state, payload) {
        state.movieCommingSoonList = payload.data.films
    },

    nowPlayingGetInfo (state, payload) {
        state.nowPlayingList = payload.data.films
    }
}
