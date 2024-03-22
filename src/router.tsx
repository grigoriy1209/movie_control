import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts";
import {GenresPage,  MoviesPage} from "./pages";
import {MovieInfo} from "./components/MovieContainer/MovieInfo";

const router = createBrowserRouter([{
    path: '', element: <MainLayout/>, children: [
        {
            index: true, element: <Navigate to={`movies`}/>
        },
        {
            path:'movies',element:<MoviesPage/>
        },
        {
            path:'/movies/:id', element:<MovieInfo/>
        },
        {
            path:'genres', element:<GenresPage/>
        }
    ]
}])
export {
    router
}