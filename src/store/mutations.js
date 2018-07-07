
export default {
    updateLoadingStatus (state, payload) {
        state.loading = payload.isLoading
        console.log(state.loading)
    },
    showLeftNavbar (state) {
        state.leftNavbarShow = !state.leftNavbarShow
    },
    changeTitleName (state, payload) {
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
        state.loading = false
    },

    changeCityName (state, payload) {
        state.city = payload.city
        localStorage.city = payload.city
    },

    homeCommingSoonGetInfo (state, payload) {
        state.homeCommingSoonList = payload.data.films
        state.loading = false
    },

    homeNowPlayingGetInfo (state, payload) {
        state.homeNowPlayingList = payload.data.films
      state.loading = false

    },

    detailGetInfo (state, payload) {
        state.detailList = payload.data.film
        // 对象中origin老是报错就把他替换成新的对象了
        state.detailList.img = state.detailList.cover.origin
        // 修改标题的名字
        state.title = payload.data.film.name
      state.loading = false

    },

    movieCommingSoonGetInfo (state, payload) {
        state.movieCommingSoonList = payload.data.films
      state.loading = false

    },

    nowPlayingGetInfo (state, payload) {
        state.nowPlayingList = payload.data.films
      state.loading = false
    }
}
