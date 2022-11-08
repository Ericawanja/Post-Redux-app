import PostReducer from "./reducers/PostReducer";
import { createStore } from "redux";

export const store = createStore(PostReducer)