import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IPaginator} from "../../iinterFaces/paginatorInterFace";
import {IMovie} from "../../iinterFaces/movieInterFace";
import {moviesApi} from "../../services/moviesApi";

interface IState {
    movies: IMovie[]
    genres: string[]
}

const initialState: IState = {
    movies: [],
    genres: []
};
export const getAllMovies = createAsyncThunk<IPaginator<IMovie>, void>(
    'movies/getAllMovies',
    async (_, {rejectWithValue}) => {
        try {
            // @ts-ignore
            const {data} = await moviesApi.endpoints.getMovies()
            return {
                ...data,
                page: 1
            }
        } catch (e) {
            return rejectWithValue(e)
        }
    }
)
// export const getAllGenres = createAsyncThunk<string[]>(
//     'movies/getAllGenres',
//     async (_,{rejectWithValue})=>{
//         try {
//             // @ts-ignore
//             const {data}=await moviesApi.endpoints.getGenres()
//             return data.genres.map((genre:{id:number, name:string})=>genre.name)
//         }catch (e) {
//             return rejectWithValue(e)
//         }
//     }
// )

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllMovies.fulfilled,(state, action)=>{
                state.movies = action.payload.results
            })
            // .addCase(getAllGenres.fulfilled,(state, action)=>{
            //     state.genres = action.payload
            // })
    }
})
const {reducer:movieReducer, actions} = movieSlice

const movieActions = {
    ...actions,
    getAllMovies,
    // getAllGenres
}
export {
    movieActions,
    movieReducer
}
