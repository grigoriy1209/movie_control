import {FC, PropsWithChildren} from "react";
import {IGenre} from "../../iinterFaces/genreInterFace";

interface IProps extends PropsWithChildren{
    genre:IGenre
}
const Genre:FC<IProps> = ({genre}) => {

    return (
        <div>
            <p>{genre.name}</p>
        </div>
    );
};

export {Genre};