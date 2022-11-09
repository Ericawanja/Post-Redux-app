import { configureStore } from "@reduxjs/toolkit";
import PostReducer from './features/PostSlice'

const store= configureStore({
    reducer:{
        post_data:PostReducer
    },
})

export default store;