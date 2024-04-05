'use client'
import { configureStore } from "@reduxjs/toolkit";

import userReducer from './user';
import instructorReducer from './instructor'
export const store = configureStore({
    reducer:{
        user:userReducer,
        instructor: instructorReducer
    }
})