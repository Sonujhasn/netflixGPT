import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import {  addTopRatedMovie } from "../utils/movieSlice";
import { useEffect } from "react";


const useTopRatedMovie= ()=>{

    const dispatch = useDispatch();
    const toprateMovie = useSelector(store =>store.movies. topRatedMovie)

  const getTopRatedMovies = async ()=>{
    const data =await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
     API_OPTIONS
    )
    const json = await data.json();
    dispatch(addTopRatedMovie(json.results))
   // console.log(json.results)
  }

  useEffect(()=>{
    if(!toprateMovie){
      getTopRatedMovies()
    }
  },[])
}
export default useTopRatedMovie