import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom";

function Post() {
  const params = useParams();
  const [post, setPost] = useState({});
  const { posts } = useSelector(state => state.post);
 
  useEffect(() => {
    posts.length && posts.find(post =>{
      if(parseInt(post.id) === parseInt(params.postId)){
        setPost(post);
      }
    });
  },[]);

  return (
    <div className="post-container">
      {
        !post.id ?
          (
          <div> Post doesn't exist! </div>
          )
          :
          (
              <div className="post-item">
              <h3 className="post-title post-guard">{post.title}</h3>
              <div className="post-body-wrapper">
                <p className="post-body-item">
                  {post.postText}
                </p>
              </div>
              <div className="post-owner post-guard">posted by: <strong>{ post.username }</strong> </div>
            </div>
          )
      }
    </div>
  )
}

export default Post
