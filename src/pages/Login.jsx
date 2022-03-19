import React, {useState} from 'react';
import axios from 'axios';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchUser } from "../redux/users/actions/creators";
import { AUTH } from "../utils/endpoints";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const login = (e) =>{

    setError("");
    e.preventDefault();
    axios({
      url: `${AUTH.LOGIN}`,
      method: "POST",
      data:{
        username: e.target["username"].value,
        password: e.target["password"].value
      }
    })
    .then(res =>{
      const { user, token } = res.data;

      dispatch(fetchUser(user));

      sessionStorage.setItem("auth_token", token );
      localStorage.setItem("user", JSON.stringify(user))

      navigate("/");
    })
    .catch(({response}) =>{
      const { message } = response.data;
      setError(message);
    });
  };

  return(
    <div className="login-container">
      <form onSubmit={login} className="login-form">
        <div className="form-item">
        <label htmlFor="username">Username</label>
         <input type="text"  name="username"/>
        </div>

        <div className="form-item">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" />
        </div>

        {error && <span>{error}</span>}

        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login
