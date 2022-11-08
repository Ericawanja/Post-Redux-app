import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {handele_edit, handle_create, handle_like, handle_delete} from './redux/Actions/PostActions'

function Post() {
  const posts = useSelector((state) => state.posts);
  
  let dispatch = useDispatch()
  return (
    <>
      <div className="main_post">
        {posts.length > 0 &&
          posts.map((p) => {
            let { title, desc, id, likes } = p;
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
                      like
                    </span>
                  </span>
                  <span
                    className="edit"
                    onClick={() => dispatch(handele_edit(id))}
                  >
                    edit
                  </span>
                  <span
                    className="delete"
                    onClick={() => dispatch(handle_delete(id))}
                  >
                    delete
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
