import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMoviesuggestion from './GptMoviesuggestion'
import { BG_IMG } from '../utils/constant'

const GptSearch = () => {
  return (
     <>
       <div className='fixed -z-10'>
          <img 
            className='h-screen object-cover md:object-cover md:h-[100%]'
            src={BG_IMG}
            alt='nft'
          />
        </div>
        <div className=''>
            <GptSearchBar/>
            <GptMoviesuggestion/>
        </div>
     </>
  )
}

export default GptSearch