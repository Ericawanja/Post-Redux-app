import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import { handle_create } from "./redux/Actions/PostActions";

function PostInput() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const dispatch = useDispatch();
  let inputRef = useRef();
  let descRef = useRef();
  const handle_form_submit = (e) => {
    e.preventDefault();

    if (title === "") return inputRef.current.focus();
    if (desc === "") return descRef.current.focus();

    let id = Math.floor(Math.random() * 136736723);
    const form_data = { title, desc, id };
    console.log(form_data);
    dispatch(handle_create({ title, desc, id, likes:0, dislikes: 0 }));

    setDesc("");
    setTitle("");
  };
  return (
    <>
      <div className="input_wrapper">
        <form action="">
          <label htmlFor="title">Enter post title</label>
          <input
            ref={inputRef}
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label htmlFor="desc">Enter the description</label>
          <textarea
            ref={descRef}
            name="desc"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
          <div className="btn">
            <button className="save_btn" onClick={(e) => handle_form_submit(e)}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default PostInput;
