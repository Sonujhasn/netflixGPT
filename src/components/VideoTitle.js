import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] md:pt-[10%] px-6 md:px-20 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-2xl md:text-6xl font-bold'>{title}</h1>
        <p className='hidden md:inline-block md:py-6 md:text-lg md:w-1/4'>{overview}</p>
        <div className=''>
            <button className='bg-white text-black my-3 md:my-0  p-1 md:p-2 px-3 md:px-8 text-lg rounded-lg hover:bg-opacity-80'>▶️Play</button>
            <button className='hidden md:inline-block mx-2 bg-gray-500 text-white p-2 px-8 text-lg opacity-50 rounded-lg'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle