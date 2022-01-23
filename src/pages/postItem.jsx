import React from 'react'

function PostItem({ title, postText, username }){
  return (
    <div className="post-item">
    <h3 className="post-title post-guard">{ title }</h3>
    <div className="post-body-wrapper">
      <p className="post-body-item">
        { postText }
      </p>
    </div>
    <div className="post-owner post-guard">posted by: <strong>{ username }</strong> </div>
  </div>
  )
}

export default PostItem
