import React, { useRef, useState } from 'react'
import "./video.css"

const videoPlayer = "../video/Download.mp4"

function video() {

    const videoRef = useRef(null)
    const [play, setplay] = useState(false)
    function handdlesStart(){
    
     
      if(play){
        videoRef.current.pause()
        setplay(false)

      }else{
        videoRef.current.play()
        setplay(true)
      }
    }

  return (
    <div className='video' >
       
       <video    
       className='video_player' 
       ref={videoRef}
       onClick={handdlesStart}
       loop
       src='https://youtu.be/pc9PE2B2rOE?t=2147'
       >

       </video>
    </div>
    
   
  )
}

export default video

