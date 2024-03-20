import {moviesApi} from "../../services/moviesApi";
import {MovieListCard} from "./MovieListCard";
import {IData, IMovie} from "../../iinterFaces/movieInterFace"
import {PropsWithChildren} from "react";

interface IProps extends PropsWithChildren{
    movies:IMovie[]
}
const MoviesList = () => {
    const {data:movies} = moviesApi.useGetMoviesQuery(2)
    console.log(movies)
    return (
        <div>
            {/*{*/}
            {/* movies &&  movies.results.map((movie:IMovie) => <MovieListCard movie={movie} key={movie.id}/>)*/}
            {/*}*/}
        </div>
    );
};

export {MoviesList};