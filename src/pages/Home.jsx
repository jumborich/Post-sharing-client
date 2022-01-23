import axios from "axios";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import PostItem from "./postItem";
import { getPosts } from "../redux/posts/actions/creators";
import { POST } from "./../utils/endpoints";

export default function Home(){
  const [posts, setPosts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    ( async() =>{
      const auth_token = sessionStorage.getItem("auth_token");
      const data = await axios(`${POST.GET_ALL}`, {withCredentials: true, params:{auth_token}});
      const posts = data.data.posts
      setPosts(posts);
      dispatch(getPosts(posts));
    })()
  },[]);

  return(
    <div className="App">
      <div className="post-container">
        {posts.map((post) =>{
          return(
            <NavLink
              to={`/posts/${post.id}`}
              key = {post.id + post.createdAt}
              >
              <PostItem {...post}/>
            </NavLink>
          )
        })}
      </div>
    </div>
  );
}