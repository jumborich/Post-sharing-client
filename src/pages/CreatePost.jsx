import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";
import axios from "axios";

function CreatePost(){
  const navigate = useNavigate();

  const submit = async(data) => {
    try{
     await axios({
      url:"http://localhost:4000/posts",
      method:"POST",
      data
     });

      navigate("/");
    }catch(error){
      console.log(error)
    }
  };

  const vSchema = Yup.object().shape({
    title:Yup.string().required(),
    postText:Yup.string().required(),
    username:Yup.string().min(3).max(15).required()
  });

  return (
    <div className="create-post-container">
      <Formik
      initialValues={{ title:"", postText:"", username:"" }}
      onSubmit={submit}
      validationSchema={vSchema}
      >
        <Form className="post-form">

          <div className="form-item">
            <label htmlFor="title">Title</label>
            <ErrorMessage name="title" component="span"/>
            <Field id="create-post-input" 
              name="title" 
              placeholder="(Ex. Title...)"
            />
          </div>

          <div className="form-item">
            <label htmlFor="postText">Post</label>
            <ErrorMessage name="postText" component="span"/>
            <Field id="create-post-input" 
              name="postText" 
              type="text" 
              placeholder="what's up?"
            />
          </div>

          <div className="form-item">
            <label htmlFor="username">username</label>
            <ErrorMessage name="username" component="span"/>
            <Field id="create-post-input" 
              name="username" 
              type="text" 
              placeholder="(Ex. Emeka...)"
            />
          </div>
          <button type="submit">Create Post</button>
        </Form>
      </Formik>
    </div>
  )
};

export default CreatePost;