import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IMovie} from "../../iinterFaces/movieInterFace";

import {apiService} from "../../services/ApiService";
import {IRes} from "../../types/responseType";
import {IPaginator} from "../../iinterFaces/paginatorInterFace";


interface IState {
    movies: IMovie[]
}

const initialState: IState = {
    movies: []
}
const fetchMovies = createAsyncThunk<IPaginator<IMovie>, void>(
    'movieSlice/fetchMovies',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await apiService.endpoints.getMovies()
            return data
        } catch (e) {
            return rejectWithValue(e)
        }
    }
)

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchMovies.fulfilled, (state, action) => {
                state.movies = action.payload.results
            });
    }
})
const {reducer: movieReducer, actions} = movieSlice;
const movieActions = {
    ...actions,
    fetchMovies,

}
export {
    movieActions,
    movieReducer
}