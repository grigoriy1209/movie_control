import {useSelector} from "react-redux";
import {useAppSelector} from "../../hooks/useAppSelector";
import {useSearchParams} from "react-router-dom";
import {useAppDispatch} from "../../hooks/useAppdispatch";

const MoviePaginator = () => {
   const page = useAppSelector<number>(state => state.movieReducer.page)
    const dispatch = useAppDispatch();
    // const [,setQuery] = useSearchParams({page});

   // const prevPage = ()=>{
   //     setQuery(prev => {
   //             prev.set('page',`${+prev.get("page")-1}`)
   //         return prev
   //     })
   // }
   // const nextPage = () => {
   //     setQuery(next =>{
   //             next.set('page', `${+next.get('page')+1}`)
   //         return next
   //     })
   // }

    return (
        <div>
            {/*<button disabled={!page} onClick={prevPage}>prev</button>*/}
            {/*<span>{page}</span>*/}
            {/*<button disabled={!page} onClick={nextPage}>next</button>*/}
        </div>
    );
};

export {MoviePaginator};