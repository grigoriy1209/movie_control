

import {useAppSelector} from "../../hooks/useAppSelector";
import {useAppDispatch} from "../../hooks/useAppdispatch";
import {getAllMovies} from "../../store/slice/movieSlice";

const MoviePagination = () => {
     const dispatch = useAppDispatch();
    const page = useAppSelector(state =>state.movieReducer.page)

    const prevPage =()=>{
          if (page > 1){
              dispatch(getAllMovies(page-1))
          }
    }
    const nextPage =()=> {
       dispatch(getAllMovies(page+1))
    }
    return (
        <div>
          <button disabled={page===null} onClick={prevPage}> prev</button>
            <span>{page}</span>
          <button disabled={page ===null} onClick={nextPage}> next</button>
        </div>
    );
};

export {MoviePagination};