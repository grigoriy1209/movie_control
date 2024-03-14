import {store} from "../store";

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch
export type {
    RootState,
    AppDispatch
}
// Використовуйте у всьому вашому додатку замість звичайних `useDispatch` та `useSelector