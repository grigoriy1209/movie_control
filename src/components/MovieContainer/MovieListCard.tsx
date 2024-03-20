import {FC, PropsWithChildren} from "react";
import {IMovie} from "../../iinterFaces/movieInterFace";
interface IProps extends PropsWithChildren{
    movie:IMovie

}
const MovieListCard:FC<IProps> = ({movie}) => {

    return (
        <div>
              <div>{movie.title}</div>
            {/*/!*{Array.from({ length: Math.floor(movie.vote_average/2 ) }, (_, index) => (*!/*/}
            {/*/!*    <FaStar key={index} />*!/*/}
            {/*))}*/}
            <div>{movie.vote_average}</div>
            {/*<button onClick={save}>*/}
                {movie.poster_path && <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title}/>}
            {/*</button>*/}

            {/*<button>{prev}</button>*/}
            {/*<button>{next}</button>*/}
        </div>
    );
};

export {MovieListCard}