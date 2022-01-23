import React from 'react'
import axios from 'axios';
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchUser } from "./../redux/users/actions/creators";
import {Formik, Form, Field, ErrorMessage } from "formik";

export default function Register(){

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signupValidator = Yup.object().shape({
    username:Yup.string().required("Username is required").min(3).max(16),
    password:Yup.string().required("Password is required").min(3)
  });

  const createUser = (user) =>{
    axios({
      url: 'http://localhost:4000/auth/',
      method: 'POST',
      data:user
    })
    .then(res => {
      dispatch(fetchUser(res.data.user));
      localStorage.setItem("user", JSON.stringify(res.data.user)) //Temp soln until cookies
      navigate("/");
    })
    .catch(err => console.log(err));
  }

  return (
    <div className="signup-container">
      Welcome, Pls register below
      <Formik
        initialValues={{username:"", password:""}}
        validationSchema={signupValidator}
        onSubmit={createUser}
      >
      <Form className="create-comment-form">
        <div className="field-item form-item">
          <label htmlFor="usernamer">Username</label>
          <ErrorMessage component="span" name="username"/>
          <Field 
            id="create-post-input" 
            type="text"
            name="username"
            placeholder="(Ex. Jumbo)"
          />
        </div>

        <div className="field-item form-item">
        <label htmlFor="password">Password</label>
        <ErrorMessage component="span" name="password"/>
        <Field 
          id="create-post-input" 
          type="password"
          name="password"
          placeholder="Enter password"
        />
       </div>
        <button type="submit">signup</button>
      </Form>
    </Formik>
    </div>
  )
};
