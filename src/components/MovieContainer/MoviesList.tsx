import {moviesApi} from "../../services/moviesApi";
import {MovieListCard} from "./MovieListCard";
import {IMovie} from "../../interFaces/movieInterFace";
import {usePageQuery} from "../../hooks/usePageQuery";

const MoviesList = () => {
    const {data:movie} = moviesApi.useGetMoviesQuery()
    const {data:genre} = moviesApi.useGetGenresQuery()

    // const {page,prevPage, nextPage} = usePageQuery();

    const movieRes =movie && movie.results;
    return (
        <div>
            {/*<button onClick={prevPage}>prev</button>*/}
            {/*<span>{page}</span>*/}
            {/*<button onClick={nextPage}>next</button>*/}
            {
                movieRes  && movieRes.map((movie: IMovie) => <MovieListCard movie={movie} key={movie.id} genre={genre || []} />)
            }
        </div>
    );
};

export {MoviesList};