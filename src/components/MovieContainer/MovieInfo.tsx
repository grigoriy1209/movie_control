import {IMovie} from "../../iinterFaces/movieInterFace";
import {useAppLocation} from "../../hooks/useAppLocation";
import {useParams} from "react-router-dom";
import {useState} from "react";
import './Movie.modulle.css'

const MovieInfo = () => {
    const {state} = useAppLocation<{ movie: IMovie }>();
    const {id} = useParams<{ id: string }>();
    const {movie} = state
    console.log(id)
    console.log(state)
    return (
        <div className="movieInfoStyle">
            <div className="backGround"
                 style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`}}>
                <div className="movieDetails">
                    <div className="imageMovie">
                        {movie.poster_path &&
                            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title}/>}
                    </div>
                    <div>{movie.title}</div>
                    <p>{movie.vote_average}</p>
                    {/*<div>Genres{movie.genres && movie.genres.map((genre) => (*/}
                    {/*    <span key={genre.id}>{genre.name}</span>))}</div>*/}
                    <div>{movie.overview}</div>
                </div>
            </div>


        </div>
    );
};

export {MovieInfo};