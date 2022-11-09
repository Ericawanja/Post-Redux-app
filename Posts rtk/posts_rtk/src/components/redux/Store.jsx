import { configureStore } from "@reduxjs/toolkit";
import PostReducer from './features/PostSlice'

const store= configureStore({
    reducer:{
        Post:PostReducer
    },
})

export default store;