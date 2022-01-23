import { useEffect } from 'react';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Protect({ children }){
  const navigate = useNavigate();
  const { user  } = useSelector(state => state.user);
  
  useEffect(() =>{
    if(!user.id){
      navigate("/login");
    }
  });

  return (
    user.id ? children: null
  )
}

export default Protect
