import React from 'react'
import { IMG_CDN } from '../utils/constant'

const MovieCart = ({posterPath}) => {
  if(!posterPath) return null;
  return (
    <div className='w-28 h-32 md:w-32 md:h-36 pr-3'>
        <img
          className='rounded-lg md:rounded-lg '
         src={IMG_CDN + posterPath}
         alt='moviecard'
        />
    </div>
  )
}

export default MovieCart