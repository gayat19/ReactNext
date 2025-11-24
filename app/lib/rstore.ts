// import { configureStore } from "@reduxjs/toolkit";
// import userReducer from './userSlice';

// export const rstore = configureStore({
//     reducer:{
//         user:userReducer
//     }
// })

// export type RootState = ReturnType<typeof rstore.getState>;
// export type AppDispatch = typeof rstore.dispatch;


import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice';
import { api } from "./api";

export const rstore = configureStore({
    reducer:{
        user:userReducer,
        [api.reducerPath]:api.reducer
    },
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware().concat(api.middleware)
})

export type RootState = ReturnType<typeof rstore.getState>;
export type AppDispatch = typeof rstore.dispatch;