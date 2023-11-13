import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addNowPlayingMovie } from "../utils/movieSlice";
import { useEffect } from "react";


const useNowPlayingMovies = ()=>{

    const dispatch = useDispatch();

    const nowPlayingMovie = useSelector(store =>store.movies.nowPlayingMovies)
  const getPlayingMovies = async ()=>{
    const data =await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',
     API_OPTIONS
    )
    const json = await data.json();
    dispatch(addNowPlayingMovie(json.results))
   // console.log(json.results)
  }

  useEffect(()=>{
    if(!nowPlayingMovie){
      getPlayingMovies()
    }
      
  },[])
}
export default useNowPlayingMovies