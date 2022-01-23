import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
import store from "./redux/store";
import {fetchUser} from "./redux/users/actions/creators"
import reportWebVitals from './reportWebVitals';
import { BrowserRouter  } from "react-router-dom";
import NavBar from "./pages/NavBar";

const Index = () => {

  const user = localStorage.getItem("user");
  if(user){
    store.dispatch(fetchUser(JSON.parse(user)));
  };
  return(
   <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <NavBar/>
        <App />
      </BrowserRouter>
    </Provider>
   </React.StrictMode>
  )
};

ReactDOM.render(
  <Index/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
