import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState = {
  posts: [{ title: "title", desc: "description of the post", id: "1" }],
};
const PostSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    add_Post: {
      reducer: (state, { payload }) => {
        console.log(payload);
        //console.log(state.posts.pop());
        state = state.posts.unshift(payload);
      },
      prepare: (title, desc) => {
        
        return {
          payload: { id:nanoid(), title, desc },
        };
      },
    },
    delete_Post: (state) => {
      state = state;
    },
  },
});

export const { add_Post, delete_Post } = PostSlice.actions;

export default PostSlice.reducer;
