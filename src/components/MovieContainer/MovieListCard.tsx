import {FC, PropsWithChildren} from "react";
import {IMovie} from "../../iinterFaces/movieInterFace";
import {useNavigate} from "react-router-dom";
interface IProps extends PropsWithChildren{
    movie:IMovie
}
const MovieListCard:FC<IProps> = ({movie}) => {
const navigate = useNavigate();
    const save =()=>{
        navigate(`/movies/${movie.id}`,{state:{movie}})
    }
    return (
        <div>
              <div>{movie.title}</div>
            <div>{movie.vote_average}</div>
            <button onClick={save}>
                {movie.poster_path && <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title}/>}
            </button>
        </div>
    );
};

export {MovieListCard}