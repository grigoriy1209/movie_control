import {moviesApi} from "../../services/moviesApi";
import {IGenre} from "../../interFaces/genreInterFace";
import {Genre} from "./Genre";

const Genres = () => {
    const {data:genres} = moviesApi.useGetGenresQuery()
    console.log(genres)
    return (
        <div>
            {
                genres && genres.map((genre) => <Genre genre={genre} key={genre.id}/>)
            }
        </div>
    );
};

export {Genres};