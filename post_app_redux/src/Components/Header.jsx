import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import './Styles.css'

function Header() {
    const posts = useSelector((state) => state.posts);
  return (
    <>
    <div className="header">
        <span className="title">Post App</span>
        <span className="stats">
            <span className="total">
                Total:{posts.length}
            </span>
            <span className="likes">
                Likes: 0
            </span>
        </span>
    </div>
    </>
  )
}

export default Header