import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import './Styles.css'

function Header() {
    const {posts, total_likes, total_dislikes} = useSelector((state) => state);

  return (
    <>
    <div className="header">
        <span className="title">Post App</span>
        <span className="stats">
            <span className="total">
                Total:{posts.length}
            </span>
            <span className="likes">
                Likes: {total_likes}
            </span>
            <span className="dlikes">
                Dislikes: {total_dislikes}
            </span>
        </span>
    </div>
    </>
  )
}

export default Header