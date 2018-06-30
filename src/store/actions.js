import axios from 'axios'
export default {

    getCityInfoAsync (ctx) {
        axios.get('/api/v4/api/city?__t=1530066943888')
            .then(res => {
                if (res.status === 200 && res.data.msg === 'ok') {
                    ctx.commit('getCityInfo', res.data)
                }
            })
            .catch(err => { console.log(err) })
    },

    homeCommingSoonGetInfoAsync (ctx) {
        axios.get('api/v4/api/film/coming-soon?__t=1529935023912&page=1&count=3')
            .then(res => {
                if (res.status === 200 && res.data.msg === 'ok') {
                    ctx.commit('homeCommingSoonGetInfo', res.data)
                }
            })
            .catch(err => { console.log(err) })
    },
    homeNowPlayingGetInfoAsync (ctx) {
        axios.get('api/v4/api/film/now-playing?__t=1529935023908&page=1&count=5')
            .then(res => {
                if (res.status === 200 && res.data.msg) {
                    ctx.commit('homeNowPlayingGetInfo', res.data)
                }
            })
            .catch(err => { console.log(err) })
    },
    detailGetInfoAsync (ctx, payload) {
        axios.get('/api/v4/api/film/' + payload.id + '?__t=1530258651518')
            .then(res => {
                if (res.status === 200 && res.data.msg === 'ok') {
                    ctx.commit('detailGetInfo', res.data)
                }
            }).catch(err => { console.log(err) })
    },
    movieCommingSoonGetInfoAsync (ctx) {
        axios.get('api/v4/api/film/coming-soon?page=1&count=7')
            .then(res => {
                if (res.status === 200 && res.data.msg === 'ok') {
                    ctx.commit('movieCommingSoonGetInfo', res.data)
                }
            })
            .catch(err => { console.log(err) })
    },
    nowPlayingGetInfoAsync (ctx) {
        axios.get('api/v4/api/film/now-playing?page=1&count=7')
            .then(res => {
                if (res.status === 200 && res.data.msg === 'ok') {
                    ctx.commit('nowPlayingGetInfo', res.data)
                }
            })
            .catch(err => { console.log(err) })
    }

}
