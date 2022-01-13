import axios from "axios";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { getPosts } from "../redux/posts/actions/creators";

export default function Home(){
  const [posts, setPosts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await axios("http://localhost:4000/posts");
      const posts = data.data.posts
      setPosts(posts);
      dispatch(getPosts(posts));
    };

    fetchPosts();
  },[]);

  return(
    <div className="App">
      <nav className="home-nav">
        <NavLink className="create-post"
        to={"/create-post"}
        >
          Create New Post
        </NavLink>
      </nav>
      <div className="post-container">
        {posts.map((post) =>{
          return(
            <NavLink
              to={`/posts/${post.id}`}
              key = {post.id + post.createdAt}
            >
              <div className="post-item">
                <h3 className="post-title post-guard">{post.title}</h3>
                <div className="post-body-wrapper">
                  <p className="post-body-item">
                    {post.postText}
                  </p>
                </div>
                <div className="post-owner post-guard">posted by: <strong>{ post.username }</strong> </div>
              </div>
            </NavLink>
          )
        })}
      </div>
    </div>
  );
}