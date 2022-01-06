const display = (arr)=>{
    show.textContent = null
    arr.map(el=>{
        const {id:{videoId},snippet:{channelTitle,thumbnails:{medium:{url}},title}} = el

        const div = document.createElement('div')
        div.setAttribute('class','ytVideo')
        const img = document.createElement('img')
        const video_title = document.createElement('p')
        const userIcon = document.createElement('span')
        const i = document.createElement('i')


        i.setAttribute('class',"fas fa-user-circle fs-5 me-2")
        userIcon.append(i)
        const channel_name = document.createElement('span')
        channel_name.setAttribute("class","channel_name")
        img.src = url
        video_title.textContent = title
        channel_name.textContent = channelTitle

        div.onclick = ()=>{
            obj = {
                v_title : title,
                v_id : videoId,
                v_channel : channelTitle
            }
            localStorage.setItem("youtubeDs",JSON.stringify(obj))
            window.location.href = "videopage.html"
        }
        div.append(img,video_title,userIcon,channel_name)
        show.append(div)
    })
}
const youtubeData = async (API)=>{
    try {
        const response = await fetch(API)
        const data = await response.json()
        const {items} = data
        
        console.log(items)
        display(items)
    } catch (error) {
        console.log(error.massage + "hi")
    }
}
const fun = ()=>{
    const search = document.querySelector('#seachBox').value
    const api = `https://youtube.googleapis.com/youtube/v3/search?maxResults=${limit}&q=${search}&type=video&key=${key}&part=snippet`
    youtubeData(api)
}
// const youtubeTrendingData = async (API2) =>
async function youtubeTrendingData(API2)
{
    const response = await fetch(API2)
    const data = await response.json()
    const {items} = data
    displayTrendingData(items)
}
// const displayTrendingData = (arr)=>
function displayTrendingData(arr)
{
    show.innerHTML = null
    arr.map((el)=>{
        const {id} = el
        const div = document.createElement('div')
        div.setAttribute('class','ytVideo')
        const iframe = document.createElement('iframe')
        iframe.src = `https://www.youtube.com/embed/${id}`
        div.append(iframe)
        show.append(div)
    })
}


const show = document.querySelector('#show')
// key is remove
// const key = 
const key = "Upload your key here"
const limit = 20
const cc = "IN"
const trending_api =  `https://www.googleapis.com/youtube/v3/videos?part=contentDetails&chart=mostPopular&regionCode=${cc}&maxResults=25&key=${key}`
const api2 = `https://www.googleapis.com/youtube/v3/videos?part=contentDetails&chart=mostPopular&regionCode=91&maxResults=20&key=${key}`
youtubeTrendingData(trending_api)
