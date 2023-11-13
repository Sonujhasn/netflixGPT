import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryConatiner = () => {
   const movies = useSelector(store => store.movies)
  return (
    movies.nowPlayingMovies && (
      <div className=' bg-black'>
         <div className='mt-0 md:-mt-80 pl-4 md:pl-7 relative z-20'>
            <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
            <MovieList title={"Top Rated"} movies={movies. topRatedMovie}/>
            <MovieList title={"Popular"} movies={movies.popularMovies}/>
         </div>
      </div>
    )
  )
}

export default SecondaryConatiner