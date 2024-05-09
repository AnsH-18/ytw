import React, { useState } from 'react'

function VideoGrid() {

  const [videos, setVideos] = useState([])
  console.log("video-grid")
  const fetchvideos = () => {
    try {
      const url = "http://localhost:8001/api/v1/video/get-all"
      fetch(url,  {
        method: 'GET',
        headers: {
          "Content-Type": "application/json"
          },
        credentials: "include"
        
      })
      .then(res => res.json())
      .then(data => console.log(data))
    } catch (error) {
      console.log(error)
    }
  }
 

  return ( 
    <div className=' text-white   mt-20 ml-56 h-full'>
      <button className='' onClick={fetchvideos}>Click me</button>
    </div>
  )
}

export default VideoGrid