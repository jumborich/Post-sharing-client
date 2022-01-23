import React, { useState, useEffect } from 'react';
import CreateComment from './CreateComment';
import axios  from "axios";

function Comments({ id:postId }){
  const [showCreate, setShowCreate] = useState(false);
  const [isPosted, setIsPosted] = useState(false);
  const [comments, setComments] = useState([]);

  useEffect(() =>{
    setShowCreate(isPosted && !showCreate); 
    getComments();

  },[isPosted]);

  const getComments = () =>{
    const auth_token = sessionStorage.getItem("auth_token");

    axios(`http://localhost:4000/comments/${postId}`, { withCredentials: true, params:{auth_token}})
    .then((res) => setComments(res.data.comments))
    .catch(error => console.log("err_comments: ", error));
  };

  const toggleCreate = () => setShowCreate((prevValue) => !prevValue);
  return (
    <div className="comment-item">
      <div className="comment-container-top">
        <h3>comments</h3>
        <button onClick={toggleCreate}>{ showCreate? "-" : "+"}</button>
      </div>
      {showCreate && <CreateComment setIsPosted ={setIsPosted} postId={postId}/>}
      <div className="comment-text">
        {comments.length > 0? 
            comments.map(({ username, comment, id, createdAt })=>(
              <div key={id + createdAt} className="comment-container-body">
                <i>
                  [{ username }] : <q>{ comment }</q>
                </i>
              </div>
            ))
            :(
              <p className="no-comments">No comments available</p>
            )
        }
      </div>
    </div>
  )
}

export default Comments;