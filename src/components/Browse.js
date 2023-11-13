import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryConatiner from './SecondaryConatiner';
import usePopularMovies from '../hooks/usePopularMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';
import useTopRatedMovie from '../hooks/useTopRatedMovie';
const Browse = () => {
 
  const showGptSreach = useSelector(store => store.gpt.showGptSearch);
  
  useNowPlayingMovies();
  usePopularMovies()
  useTopRatedMovie()
  return (
    <div>
      <Header/>
      {
        showGptSreach ? (
          <GptSearch/>
        ) : (
          <>
              <MainContainer/>
              <SecondaryConatiner/>
         </>
        )}
     
    </div>
  )
}

export default Browse