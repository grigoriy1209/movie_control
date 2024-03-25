import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IGenre} from "../../interFaces/genreInterFace";

interface IState {
    genres: IGenre[]
}
const initialState: IState = {
    genres: []
}
export const getAllGenres = createAsyncThunk<IGenre[]>(
    'movies/getAllGenres',
    async (_,{rejectWithValue})=>{
        try {
            // @ts-ignore
            const {data}=await moviesApi.endpoints.getGenres()
            return data.genres.map((genre:{id:number, name:string})=>genre.name)
        }catch (e) {
            return rejectWithValue(e)
        }
    }
)
const genreSlice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllGenres.fulfilled, (state, action) => {
                state.genres = action.payload
            })
    }
})
const {reducer:genreReducer,actions} = genreSlice
const genreActions ={
    ...actions,
    getAllGenres
}
export {
    genreActions,
    genreReducer
}