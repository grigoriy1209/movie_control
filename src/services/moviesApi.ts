import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

import {IMovie} from "../iinterFaces/movieInterFace";
import {IGenre} from "../iinterFaces/genreInterFace";
import {baseURL} from "../constants/urls";


const BearerToken =
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MGExYjMzNDM1ZWY3NTA4MjRlOGNlMjM3YTdlODY4NCIsInN1YiI6IjY1ZDhmMmZjMjIzZTIwMDE2MzRlMDQ4NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Rhlzc35t9XbFwrJdsX0XcgSxQR2vItSVNtDWJcsp208'
export const moviesApi = createApi({
    reducerPath: 'moviesApi',
    baseQuery: fetchBaseQuery({
        baseUrl:baseURL,
        prepareHeaders: (headers, {getState}) => {
            headers.set('Authorization', BearerToken);
            return headers
        }
    }),
    endpoints: (builder) => ({
        getMovies: builder.query<IMovie[],number>({
            query: (page=1) => ({
                url:`/discover/movie?page=${page}`
            }),
        }),
        getById:builder.query<IMovie[],number>({
            query:(id)=>({
                url:`/search/collection?query={search_query}=${id}`
            }) ,
        }),
        getGenres: builder.query<IGenre[], void>({
            query: () => ({
                url:`/genre/movie/list`
        }),
        }),
    }),
});
