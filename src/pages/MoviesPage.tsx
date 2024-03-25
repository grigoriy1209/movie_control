import {Header} from "../components/Header/Header";
import {MoviesList} from "../components/MovieContainer/MoviesList";
import {MoviePagination} from "../components/MovieContainer/MoviePagination";

const MoviesPage = () => {
    return (
        <div>
            <Header/>
              <MoviePagination/>
            <MoviesList/>

        </div>
    );
};

export {MoviesPage};