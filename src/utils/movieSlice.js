import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name :"movies",
    initialState:{
        nowPlayingMovies :null,
        popularMovies:null,
        trailerVideo:null,
        topRatedMovie:null,
    },
    reducers:{
        addNowPlayingMovie : (state,action) =>{
            state.nowPlayingMovies = action.payload
        },
        addPopularMovie : (state,action) =>{
            state.popularMovies = action.payload
        },
        addTrailerVideo : (state,action) =>{
            state.trailerVideo = action.payload
        },
        addTopRatedMovie : (state,action) =>{
            state.topRatedMovie =action.payload
        }
    }

})

export const {addNowPlayingMovie,addTrailerVideo,addPopularMovie,addTopRatedMovie} = movieSlice.actions
export default movieSlice.reducer;