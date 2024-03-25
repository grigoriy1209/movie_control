import {FC, PropsWithChildren} from "react";
import {IMovie} from "../../interFaces/movieInterFace";
import {useNavigate} from "react-router-dom";
import {IGenre} from "../../interFaces/genreInterFace";
import {genreName} from "../GenreContainer/GenreName";
interface IProps extends PropsWithChildren{
    movie:IMovie,
    genre:IGenre [] | []
}
const MovieListCard:FC<IProps> = ({movie}) => {
const navigate = useNavigate();
    const genreNames =
        movie.genre_ids && movie.genre_ids.map((genreId:number) => genreName[genreId] || '')

    const save =()=>{
        navigate(`/movies/${movie.id}`,{state:{movie}})
    }
    return (
        <div>
            <div>{movie.title}</div>
            <div>{movie.vote_average}</div>
            <div>{genreNames.join(' , ')}</div>
            <button onClick={save}>
                {movie.poster_path &&
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title}/>}
            </button>
        </div>
    );
};

export {MovieListCard}