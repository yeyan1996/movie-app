let defaultCity = '北京'
try {
    if (localStorage.city) {
        defaultCity = localStorage.city
    }
} catch (e) { console.log('出错了') }
export default{
    title: '卖座电影',
    city: defaultCity,
    leftNavbarShow: false,
    detailList: {},
    homeCommingSoonList: [],
    homeNowPlayingList: [],
    movieCommingSoonList: [],
    nowPlayingList: [],
    loading: false,
    alphabetList: [],
    AllCities: {}
}
