import nav from "./../components/nav.js"
import {youtubeData, display, youtubeTrendingData, displayTrendingData} from "./../Logics/getandshow.js"


const fun = ()=>{
    const search = document.querySelector('#seachBox').value
    const api = `https://youtube.googleapis.com/youtube/v3/search?maxResults=${limit}&q=${search}&type=video&key=${key}&part=snippet`
    youtubeData(api)
}


const header = document.querySelector('header')

header.innerHTML = nav()
let searchButton = document.querySelector('#searchButton')
searchButton.addEventListener('click',fun)
const show = document.querySelector('#show')
// key is remove
// const key = "Upload your key here"
const key = 'AIzaSyAZ6WOA0z7tlvrJ5Lq46lDo7tuxK0ruWCo'
const limit = 20
const cc = "IN"
const trending_api =  `https://www.googleapis.com/youtube/v3/videos?part=contentDetails&chart=mostPopular&regionCode=${cc}&maxResults=25&key=${key}`
const api2 = `https://www.googleapis.com/youtube/v3/videos?part=contentDetails&chart=mostPopular&regionCode=91&maxResults=20&key=${key}`
youtubeTrendingData(trending_api)
