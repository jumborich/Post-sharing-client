import "./App.css";
import { Routes, Route  } from "react-router-dom";
import Home from "./pages/Home";
import Post from "./pages/Post";
import CreatePost from "./pages/CreatePost";

function App() {
  return(
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/posts/:postId"  element={<Post/>}/>
      <Route path="/create-post" element={<CreatePost/>}/>
    </Routes>
  );
}

export default App; 
