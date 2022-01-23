import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchUser } from "./../redux/users/actions/creators";

const AuthNav = ({ user }) =>{
  const dispatch = useDispatch();

  const logout = () =>{
    localStorage.removeItem("user");

    sessionStorage.removeItem("auth_token")

    dispatch(fetchUser({ }));
  }
  return(
    !user.id ?(
      <>
        <NavLink className="create-post"
        to={"/login"}>
          login
        </NavLink>

        <NavLink className="create-post"
        to={"/register"}>
          signup
        </NavLink>
      </>
    ):(
      <>
          <NavLink className="create-post"
          to={"/"}>
            Home
          </NavLink>  
          <NavLink className="create-post"
          to={"/create-post"}>
            Create
          </NavLink>
          <NavLink className="create-post"
          onClick={logout}
          to={"/login"}>
            Logout
          </NavLink>
          <div>{user.username }</div>
        </>
    )
  )
}

function NavBar() {
  const { user } = useSelector(state => state.user);
  return (
    <nav className="home-nav">
      <AuthNav user={user}/>
    </nav>
  )
}

export default NavBar
