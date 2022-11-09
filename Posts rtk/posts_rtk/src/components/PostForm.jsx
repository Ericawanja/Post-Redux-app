import React, { useState } from "react";
import { add_Post } from "./redux/features/PostSlice";
import { useDispatch } from "react-redux";

function PostForm() {
  let [title, setTitle] = useState("");
  let [desc, setDesc] = useState("");

  let dispatch = useDispatch();

  const handle_click = () => {
    let data = { title, desc };
   
    dispatch(add_Post( title, desc ));
  };

  return (
    <div className="form_wrapper">
      <div className="form">
        <label htmlFor="title">Enter title</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="desc">Enter description</label>
        <textarea
          name="desc"
          value={desc}
          cols=""
          rows="3"
          onChange={(e) => setDesc(e.target.value)}
        ></textarea>

        <button className="save" onClick={handle_click}>
          Save
        </button>
      </div>
    </div>
  );
}

export default PostForm;
