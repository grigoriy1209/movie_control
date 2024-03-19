import {FC, PropsWithChildren} from "react";
import {IMovie} from "../../iinterFaces/movieInterFace";
interface IProps extends PropsWithChildren{
    movie:IMovie
}
const Movie:FC<IProps> = ({movie}) => {

    return (
        <div>
              <div>{movie.title}</div>
              <div>{movie.id}</div>
        </div>
    );
};

export {Movie};