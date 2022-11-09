import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [{ title: "title", desc: "description of the post", id: "1" }],
};
const PostSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    add_Post: () => {
      state = state;
    },
    delete_Post: () => {
      state = state;
    },
  },
});

export const { add_Post, delete_Post } = PostSlice.actions;

export default PostSlice.reducer;
