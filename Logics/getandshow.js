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
           const obj = {
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



async function youtubeTrendingData(API2)
{
    const response = await fetch(API2)
    const data = await response.json()
    const {items} = data
    displayTrendingData(items)
}



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


export {youtubeData, display, youtubeTrendingData, displayTrendingData}
