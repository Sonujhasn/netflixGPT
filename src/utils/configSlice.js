import { createSlice } from "@reduxjs/toolkit";

const congigSLice = createSlice({
    name :"config",
    initialState:{
        lang:"en"
    },
    reducers:{
        changeLanguage:(state,action) =>{
            state.lang = action.payload
        }
    }
})

export const {changeLanguage} =congigSLice.actions;

export default congigSLice.reducer
