import {Header} from "../components/Header/Header";
import {MoviesList} from "../components/MovieContainer/MoviesList";
import {MoviePaginator} from "../components/MovieContainer/MoviePaginator";

const MoviesPage = () => {
    return (
        <div>
            <Header/>
            <MoviePaginator/>
            <MoviesList/>

        </div>
    );
};

export {MoviesPage};