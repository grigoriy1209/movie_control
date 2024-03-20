import {moviesApi} from "../../services/moviesApi";
import {Movie} from "./Movie";



const Movies = () => {
    const {data}= moviesApi.useGetMoviesQuery(1)

    return (
        <div>
            {
            data && data.results.map((movie)=><Movie movie={movie} key={movie.id}/>)
            }
        </div>
    );
};

export {Movies};