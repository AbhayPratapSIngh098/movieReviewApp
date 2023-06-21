import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieAPI.js";
import {APIKey} from "../../common/apis/movieAPIKey";


export const fetchAsyncMovies = createAsyncThunk("movies/fetchAsyncMovies", async(term)=>{
    
    const response = await movieApi.get(`?apikey=${[APIKey]}&s=${term}&type=movie`);

return response.data;
})
export const fetchAsyncShows = createAsyncThunk("movies/fetchAsyncShows", async(term)=>{
    
    const response = await movieApi.get(`?apikey=${[APIKey]}&s=${term}&type=series`);

return response.data;
})
export const fetchAsyncmoviesorshowsDetail = createAsyncThunk("movies/etchAsyncmoviesorshowsDetail", async (id)=>{
    const response = await movieApi.get(`?apikey=${[APIKey]}&i=${id}&Plot=full`);
    
return response.data;
})
const initialState={
    movies:{},
    shows:{},
    selectedmovieorshow:{},
};

const movieSlice= createSlice({
    name: "movie",
    initialState,
    reducers:{
        removeSlecetedMovieOrShow:(state)=>{
            state.selectedmovieorshow={};
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchAsyncMovies.pending, ()=>{
            console.log("pending");
        })
        builder.addCase(fetchAsyncMovies.fulfilled,(state,action)=>{
            state.movies= action.payload;
        })
        builder.addCase(fetchAsyncMovies.rejected, ()=>{
            console.log("rejected")
        })
        builder.addCase(fetchAsyncShows.fulfilled,(state,action)=>{
            state.shows= action.payload;
        })
        builder.addCase(fetchAsyncmoviesorshowsDetail.fulfilled,(state,action)=>{
            state.selectedmovieorshow = action.payload;
        })
    }
    
});


export const {removeSlecetedMovieOrShow} = movieSlice.actions;
export default movieSlice.reducer;