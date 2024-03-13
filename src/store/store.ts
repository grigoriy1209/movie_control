import {configureStore} from "@reduxjs/toolkit";
import {getDefaultNormalizer} from "@testing-library/react";
import {buildGetDefaultMiddleware} from "@reduxjs/toolkit/dist/getDefaultMiddleware";
import {setupListeners} from "@reduxjs/toolkit/query";

export const store = configureStore({
    reducer:{
        // Додати згенерований редуктор як певний зріз верхнього рівня
    },
    // middleware:()=> getDefaultMiddleware().concat(.middleware), додати значення з services
    // Додавання проміжного програмного забезпечення api уможливлює кешування, валідацію, опитування,
    // та інші корисні можливості `rtk-query`.
})
// необов'язковий, але необхідний для поведінки refetchOnFocus/refetchOnReconnect
// див. документацію `setupListeners` - приймає необов'язковий зворотний виклик як 2-й аргумент для кастомізації
setupListeners(store.dispatch)