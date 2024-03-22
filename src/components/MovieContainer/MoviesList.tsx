import {moviesApi} from "../../services/moviesApi";
import {MovieListCard} from "./MovieListCard";
import {IMovie} from "../../iinterFaces/movieInterFace";
import {usePageQuery} from "../../hooks/usePageQuery";

const MoviesList = () => {
    const {data:movies} = moviesApi.useGetMoviesQuery(1)
    console.log(movies)
    const {page,prevPage, nextPage} = usePageQuery();
    console.log(page)
    return (
        <div>
            <button onClick={prevPage}>prev</button>
            <span>{page}</span>
            <button onClick={nextPage}>next</button>
            {
                movies && movies.results.map((movie: IMovie) => <MovieListCard movie={movie} key={movie.id}/>)
            }
        </div>
    );
};

export {MoviesList};