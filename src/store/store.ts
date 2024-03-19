import {combineReducers, configureStore, Tuple} from "@reduxjs/toolkit";

import {movieReducer} from "./slice/movieSlice";
import {moviesApi} from "../services/moviesApi";

const rootReducer = combineReducers({
    movieReducer,
    [moviesApi.reducerPath]:moviesApi.reducer
}
)
export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(moviesApi.middleware)
});

