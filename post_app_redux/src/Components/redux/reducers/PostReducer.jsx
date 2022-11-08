import {
  CREATE_POST,
  DELETE_POST,
  EDIT_POST,
  LIKE_POST,
} from "../action_types";

const initialState = {
  posts: [
    {
      title: "post 1",
      desc: "post 1 desc",
      id: 1,
      likes: 0,
    },
  ],
  total_likes: 1,
  total_posts: 1,
};
export default function PostReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_POST:
      console.log(state);
      return {...state, posts:[...state.posts, action.data]};
  }
  return state;
}
