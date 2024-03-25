import {IGenre} from "./genreInterFace";

export interface IMovie{
    data:[]
    id: number
    nextPage: number | null
    page: string
    poster_path: string
    prevPage: number | null
    results: string[];
    title: string;
    vote_average: number
    movieDetails:[]
    movie_id:number
    overview:string
    genres:IGenre[]
    backdrop_path:string
    genre_ids:number[]

}
export interface IData {
    page: number
    results: IMovie[]
    total_pages: number,
    total_results: number
}