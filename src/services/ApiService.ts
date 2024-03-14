import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query";
import {baseURL} from "../constants/urls";
import {IMovie} from "../iinterFaces/movieInterFace";
import {IGenre} from "../iinterFaces/genreInterFace";

const BearerToken =
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MGExYjMzNDM1ZWY3NTA4MjRlOGNlMjM3YTdlODY4NCIsInN1YiI6IjY1ZDhmMmZjMjIzZTIwMDE2MzRlMDQ4NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Rhlzc35t9XbFwrJdsX0XcgSxQR2vItSVNtDWJcsp208'
export const apiService = createApi({
    reducerPath: 'apiService',
    baseQuery: fetchBaseQuery({
        baseUrl: baseURL,
        prepareHeaders: (headers, {getState}) => {
            headers.set('Authorization', BearerToken);
            return headers
        }
    }),
    endpoints: (builder) => ({
        getMovies: builder.query<IMovie[], number| void>({
            query: (page =1) => `discover/movie?page=${page}`,
        }),
        getGenres: builder.query<IGenre[], void>({
            query: () => 'genres'
        }),
    }),
});

// export const {useGetMoviesQuery, useGetGenresQuery}= apiService;