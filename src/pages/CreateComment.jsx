import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as  Yup from "yup"; 
import axios from "axios";

function CreateComment({ setIsPosted, postId }) {  

  const postComment = (data) =>{
    data.postId = postId;
   axios({url: "http://localhost:4000/comments", method: "POST",data, withCredentials:true})
   .then(res =>setIsPosted(true))
   .catch(err =>console.log(err));
  }

  const commentValidation = Yup.object().shape({
    comment:Yup.string().required("Comment is required").min(3, "A comment must be at least 3 characters long."),
    username:Yup.string().required("Username is required")
  });

  return (
    <Formik
      initialValues ={{ comment:"", username:"" }}
      validationSchema={commentValidation}
      onSubmit={postComment}
    >
      <Form className="create-comment-form">
        <div className="field-item form-item">
          <label htmlFor="comment">Comment</label>
          <ErrorMessage component="span" name="comment"/>
          <Field 
            as = "textarea"
            id="create-post-input" 
            type="text"
            name="comment"
            placeholder="write a comment..."
          />
        </div>
        <div className="field-item form-item">
          <label htmlFor="comment">Username</label>
          <ErrorMessage component="span" name="username"/>
          <Field 
            id="create-post-input" 
            type="text"
            name="username"
            placeholder="(Ex. Jumbo)"
          />
        </div>
        <button type="submit">post comment</button>
      </Form>
    </Formik>
  )
}

export default CreateComment