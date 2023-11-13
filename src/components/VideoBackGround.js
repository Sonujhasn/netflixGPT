import React from 'react'
import { useSelector } from 'react-redux'
import useMovieTrailer from '../hooks/useMovieTrailer'

const VideoBackGround = ({id}) => {
     
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo)
   
  useMovieTrailer(id)
  return (
    <div className='w-screen pt-5 md:pt-0'>
      <iframe
        className='w-screen aspect-video'
        src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?autoplay=1&mute=1&enablejsapi=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  )
}

export default VideoBackGround