import {
  CREATE_POST,
  DELETE_POST,
  DISLIKE_POST,
  LIKE_POST,
} from "../action_types";

const initialState = {
  posts: [],
  total_likes: 0,
  total_dislikes: 0,
  total_posts: 0,
};
export default function PostReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_POST:
      console.log(state);
      return { ...state, posts: [...state.posts, action.data] };
    case LIKE_POST:
      const new_p = state.posts.map((p) => {
        if (action.id === p.id) {
          p.likes = p.likes + 1;
        }
        return p;
      });
      console.log(new_p);
      return { ...state, posts: new_p, total_likes: state.total_likes + 1 };

    case DISLIKE_POST:
      const new_products = state.posts.map((p) => {
        if (action.id === p.id) {
          p.dislikes = p.dislikes + 1;
        }
        return p;
      });

      return {
        ...state,
        posts: new_products,
        total_dislikes: state.total_dislikes + 1,
      };

    case DELETE_POST:
      const rem_p = state.posts.filter((p) => p.id !== action.id);

      return {
        ...state,
        posts: rem_p,
        total_likes: state.total_likes - 1,
        total_dislikes: state.total_dislikes - 1,
      };
  }
  return state;
}
