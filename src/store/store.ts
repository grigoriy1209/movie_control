import {configureStore, Tuple} from "@reduxjs/toolkit";

import {setupListeners} from "@reduxjs/toolkit/query";
import {apiService} from "../services/ApiService";
import {movieReducer} from "./slice/movieSlice";

export const store = configureStore({
    reducer: {
        movies:movieReducer,
        // genres:genreReducer
        // Додати згенерований редуктор як певний зріз верхнього рівня
        middleware: (getDefaultMiddleware) => new Tuple(apiService.middleware)
    },

    // middleware:()=> getDefaultMiddleware().concat(apiService.middleware), додати значення з services
    // Додавання проміжного програмного забезпечення api уможливлює кешування, валідацію, опитування,
    // та інші корисні можливості `rtk-query`.
})


// необов'язковий, але необхідний для поведінки refetchOnFocus/refetchOnReconnect
// див. документацію `setupListeners` - приймає необов'язковий зворотний виклик як 2-й аргумент для кастомізації
setupListeners(store.dispatch)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch