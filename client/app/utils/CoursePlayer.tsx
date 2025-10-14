import React,{FC, useEffect, useState} from 'react'
import axios from 'axios';
type Props = {
    videoUrl:string;
    title:string
}

const CoursePlayer:FC<Props> = ({videoUrl}) => {

  const [videoData,setVideoData]=useState({
    otp:"",
    playbackInfo:"",
  })
  
//"http://localhost:8000/api/v1/getVdoCipherOTP"
  useEffect(()=>{
  axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}`,{
    videoId:videoUrl,

  }).then((res)=>{
    setVideoData(res.data)
  })
  },[videoUrl]);

  return (
    <div style={{paddingTop:"41%",position:"relative"}}>

      {
        
      <iframe
  src={`https://player.vdocipher.com/v2/?otp=20160313versASE32321Hfn6W8xUBxAaLO27tmKW5VhKmYq85SF4GrXqYB3LWHY5&playbackInfo=eyJ2aWRlb0lkIjoiZmQyYjZmZDQ3MGExNDcwZThjMTMyZTBlNDE5NDk2YzQifQ==&player=6JOZSSAWBKOdmIQ0`}
  style={{
    border: 0,
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "90%",
  }}
  allowFullScreen
  allow="encrypted-media"
></iframe>


      }
    </div>
  )
}

export default CoursePlayer

