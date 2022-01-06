import nav from "./../components/nav.js"
const header = document.querySelector('header')

header.innerHTML = nav()
console.log("hi")

const obj = JSON.parse(localStorage.getItem('youtubeDs'))
const { v_channel:channel_name, v_id:videoId, v_title:title } = obj
const iframe = document.querySelector('iframe')
iframe.src = "https://www.youtube.com/embed/"+videoId