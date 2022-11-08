import React from "react";
import { IconContext } from 'react-icons'
import {AiOutlineLike, AiOutlineDislike, AiOutlineDelete} from 'react-icons/ai'


import { useSelector, useDispatch } from "react-redux";
import {
  handle_dislike,
  handle_create,
  handle_like,
  handle_delete,
} from "./redux/Actions/PostActions";

function Post() {
  const posts = useSelector((state) => state.posts);

  let dispatch = useDispatch();
  return (
    <>
      <div className="main_post">
        {posts.length > 0 &&
          posts.map((p) => {
            let { title, desc, id, likes, dislikes } = p;
            return (
              <>
                <div className="post_body">
                  <div className="post_title">{title}</div>
                  <div className="post_desc">{desc}</div>
                </div>
                <div className="post_icons">
                  <span className="like">
                    <span className="likes">{likes}</span>
                    <span
                      className="like_icon"
                      onClick={() => dispatch(handle_like(id))}
                    >
                      <IconContext.Provider
                        value={{ size: "20px", color: "black" }}
                      >
                        <AiOutlineLike />
                      </IconContext.Provider>
                    </span>
                  </span>
                  <span
                    className="edit"
                    onClick={() => dispatch(handle_dislike(id))}
                  >
                    {dislikes} <IconContext.Provider
                        value={{ size: "20px", color: "black" }}
                      >
                        <AiOutlineDislike />
                      </IconContext.Provider>
                  </span>
                  <span
                    className="delete"
                    onClick={() => dispatch(handle_delete(id))}
                  >
                     <IconContext.Provider
                        value={{ size: "24px", color: "black" }}
                      >
                        <AiOutlineDelete />
                      </IconContext.Provider>
                  </span>
                </div>
              </>
            );
          })}
      </div>
    </>
  );
}

export default Post;
