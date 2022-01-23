import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import PostItem from "./postItem";
import Comments from "./comments";
import { POST } from "../utils/endpoints";

function Post() {
  const params = useParams();
  const [post, setPost] = useState({});
 
  useEffect(() =>{
    ( () => {
      const auth_token = sessionStorage.getItem("auth_token");
      axios(`${POST.GET_ALL}${params.id}`, { withCredentials: true, params:{auth_token}})
      .then((post) => setPost(post.data))
      .catch((error) => console.log(error));
    })()
  },[]);

  return(
    <div className="post-comment-container">
      {
        !post.id ?
          (
          <div> Post doesn't exist! </div>
          )
          :
          (
            <div className="post-comment-view">
                <PostItem { ...post } />
                <Comments {...post} />
            </div>
          )
      }
    </div>
  )
}

export default Post