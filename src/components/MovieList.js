import React from 'react'
import MovieCart from './MovieCart'

const MovieList = ({title,movies}) => {
    
  return (
    <div className='px-3 '>
       <h1 className='text-xl py-2 text-white'>{title}</h1>
      <div className='flex overflow-x-scroll no-scrollbar'>
       
        <div className='flex '>
          {
            movies?.map((movie)=>  (
              <MovieCart key={movie.id} posterPath={movie.poster_path}/>
            )
          )}
        </div>
      </div>
    </div>
  )
}

export default MovieList