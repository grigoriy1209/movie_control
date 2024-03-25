import {IMovie} from "../../interFaces/movieInterFace";
import {useAppLocation} from "../../hooks/useAppLocation";


import './Movie.modulle.css'
import {IGenre} from "../../interFaces/genreInterFace";
import {genreName} from "../GenreContainer/GenreName";
import {useParams} from "react-router-dom";

const MovieInfo = () => {
    const {state} = useAppLocation<{ movie: IMovie, genre: IGenre[]}>();
    const {movie} = state
    const {id} = useParams<{ id: string }>();
    const genreNames =
        movie.genre_ids && movie.genre_ids.map((genreId) => genreName[genreId] || '')
    console.log(movie)
    return (
        <div className="movieInfoStyle">
            <div className="backGround"
                 style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`}}>
                <div className="movieDetails">
                    <div className="box">
                        <div className="imageMovie">
                            {movie.poster_path &&
                                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                     alt={movie.title}/>}
                        </div>
                        <div>{genreNames.join(' , ')}</div>
                        <div>{movie.title}</div>
                        <p>{movie.vote_average}</p>
                        <div>{movie.overview}</div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export {MovieInfo};