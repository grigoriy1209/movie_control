import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {movieReducer} from "./slice/movieSlice";
import {moviesApi} from "../services/moviesApi";
import {genreReducer} from "./slice/genreSlice";

const rootReducer = combineReducers({
    movieReducer,
    [moviesApi.reducerPath]:moviesApi.reducer,
    genreReducer,
})
export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(moviesApi.middleware)
});

