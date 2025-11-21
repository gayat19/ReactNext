import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice';

export const rstore = configureStore({
    reducer:{
        user:userReducer
    }
})

export type RootState = ReturnType<typeof rstore.getState>;
export type AppDispatch = typeof rstore.dispatch;