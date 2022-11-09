import React from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import "./components/Styles.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <PostForm/>
        <PostList />
      </div>
    </div>
  );
}

export default App;
