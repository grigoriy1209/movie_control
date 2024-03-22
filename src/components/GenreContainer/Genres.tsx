
import {moviesApi} from "../../services/moviesApi";
import {Genre} from "./Genre";

import {IGenre} from "../../iinterFaces/genreInterFace";

const Genres = () => {
    const {data:genresData} = moviesApi.useGetGenresQuery<IGenre>()
    console.log(genresData)
    const genres = genresData || []
    console.log(genres)
    return (
        <div>
            {/*{*/}
            {/*   genresData  genresData.map((genre :IGenre)=>< Genre key={genre.id} genre={genre}/>)*/}
            {/*}*/}
        </div>
    );
};

export {Genres};