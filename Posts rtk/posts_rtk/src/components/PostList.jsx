import React from "react";
import { useDispatch, useSelector } from "react-redux";

function PostList() {
  const state = useSelector((state) => state.post_data.posts);
  console.log(state);
  return (
    <div>
      {state &&
        state.map((p) => {
          let { title, desc, id } = p;
          return (
            <div key ={id}>
              <div className="title">{title}</div>
              <div className="content">{desc}</div>
            </div>
          );
        })}
    </div>
  );
}

export default PostList;
