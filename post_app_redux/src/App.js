import "./App.css";
import Header from "./Components/Header";
import Post from "./Components/Post";
import PostInput from "./Components/PostInput";
import "./Components/Styles.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <PostInput />
        <Post />
      </div>
    </div>
  );
}

export default App;
