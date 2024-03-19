import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

import {IMovie} from "../iinterFaces/movieInterFace";
import {IGenre} from "../iinterFaces/genreInterFace";


const BearerToken =
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MGExYjMzNDM1ZWY3NTA4MjRlOGNlMjM3YTdlODY4NCIsInN1YiI6IjY1ZDhmMmZjMjIzZTIwMDE2MzRlMDQ4NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Rhlzc35t9XbFwrJdsX0XcgSxQR2vItSVNtDWJcsp208'
export const moviesApi = createApi({
    reducerPath: 'moviesApi',
    baseQuery: fetchBaseQuery({
        baseUrl:'https://api.themoviedb.org/3',
        prepareHeaders: (headers, {getState}) => {
            headers.set('Authorization', BearerToken);
            return headers
        }
    }),
    endpoints: (builder) => ({
        getMovies: builder.query<IMovie[],number>({
            query: (page=1) => ({
                url:`/discover/movie?page = ${page }`
            }),
        }),
        getGenres: builder.query<IGenre[], void>({
            query: () => ({
                url:`/genres/movie/list`
        }),
        }),
    }),
});
