import axios from 'axios'
export default {
    updateLoadingStatus (state, payload) {
        state.loading = payload.isLoading
      console.log( state.loading )
    },
    showLeftNavbar (state) {
        state.leftNavbarShow = !state.leftNavbarShow
    },
    changeTitleName (state) {
        state.title = '卖座电影'
    },
    homeCommingSoonGetInfo (state) {
        axios.get('api/v4/api/film/coming-soon?__t=1529935023912&page=1&count=3')
            .then(res => {
                if (res.status === 200 && res.data.msg === 'ok') {
                    state.homeCommingSoonList = res.data.data.films
                    // console.log(this.commingSoonMovieList)
                }
            })
            .catch(err => { console.log(err) })
    },
    homeNowPlayingGetInfo (state) {
        axios.get('api/v4/api/film/now-playing?__t=1529935023908&page=1&count=5')
            .then(res => {
                if (res.status === 200 && res.data.msg) {
                    state.homeNowPlayingList = res.data.data.films
                    // console.log(this.homeMovieList)
                }
            })
            .catch(err => { console.log(err) })
    },
    detailGetInfo (state, payload) {
        axios.get('/api/v4/api/film/' + payload.id + '?__t=1530258651518')
            .then(res => {
                if (res.status === 200 && res.data.msg === 'ok') {
                    state.detailList = res.data.data.film
                    // 对象中origin老是报错就把他替换成新的对象了
                    state.detailList.img = state.detailList.cover.origin
                    // 修改标题的名字
                    state.title = res.data.data.film.name
                }
            }).catch(err => { console.log(err) })
    },
    movieCommingSoonGetInfo (state) {
        axios.get('api/v4/api/film/coming-soon?page=1&count=7')
            .then(res => {
                if (res.status === 200 && res.data.msg === 'ok') {
                    state.movieCommingSoonList = res.data.data.films
                }
            })
            .catch(err => { console.log(err) })
    },
    nowPlayingGetInfo (state) {
        axios.get('api/v4/api/film/now-playing?page=1&count=7')
            .then(res => {
                if (res.status === 200 && res.data.msg === 'ok') {
                    state.nowPlayingList = res.data.data.films
                }
            })
            .catch(err => { console.log(err) })
    }

}
