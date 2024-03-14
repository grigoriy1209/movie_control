import {Header} from "../components/Header/Header";
import {Outlet} from "react-router-dom";

const MoviesPage = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {MoviesPage};