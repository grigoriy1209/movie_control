import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IPaginator} from "../../iinterFaces/paginatorInterFace";
import {IMovie} from "../../iinterFaces/movieInterFace";
import {moviesApi} from "../../services/moviesApi";

interface IState {
    movies: IMovie[]
    // genres: string[]
    total_pages: number
    total_results: number
    page: number
    year: number | undefined
    searchMethod: string
    results:string[]
}

const initialState: IState = {
    movies: [],
    // genres: [],
    page: 5,
    total_pages: 0,
    total_results: 0,
    year: undefined,
    searchMethod: '',
    results:[]
};
export const getAllMovies = createAsyncThunk<IPaginator<IMovie>, void>(
    'movies/getAllMovies',
    async (page, {rejectWithValue}) => {
        try {
            // @ts-ignore
            const {data} = await moviesApi.endpoints.getMovies({page})
            return {
                ...data,
                page:page
            }
        } catch (e) {
            return rejectWithValue(e)
        }
    }
)


const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllMovies.fulfilled, (state, action) => {
                const {total_pages,total_results,results,page}=action.payload
                state.total_pages = total_pages
                state.total_results = total_results
                state.movies = results
                state.page = page
                state.searchMethod = 'getAllMovies'

            })

    }
})
const {reducer: movieReducer, actions} = movieSlice

const movieActions = {
    ...actions,
    getAllMovies,

}
export {
    movieActions,
    movieReducer
}
