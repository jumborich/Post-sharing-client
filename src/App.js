import "./App.css";
import { Routes, Route  } from "react-router-dom";
import Home from "./pages/Home";
import Post from "./pages/Post";
import CreatePost from "./pages/CreatePost";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Protect from "./utils/auth/Protect";

function App(){
  return(
    <Routes>
      <Route path="/" element={<Protect><Home/></Protect>}/>
      <Route path="/posts/:id"  element={<Protect><Post/></Protect>}/>
      <Route path="/create-post" element={<Protect><CreatePost/></Protect>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
  );
}

export default App; 
