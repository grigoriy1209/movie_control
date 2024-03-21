import {moviesApi} from "../../services/moviesApi";
import {MovieListCard} from "./MovieListCard";
import {IMovie} from "../../iinterFaces/movieInterFace";

const MoviesList = () => {
    const {data:movies} = moviesApi.useGetMoviesQuery(2)
    console.log(movies)
    return (
        <div>
            {
                movies && movies.results.map((movie:IMovie)=> <MovieListCard movie={movie} key={movie.id}/>)
            }
        </div>
    );
};

export {MoviesList};