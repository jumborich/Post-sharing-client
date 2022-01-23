import { combineReducers, createStore } from "redux";
import postReducer from "./posts/reducer";
import userReducer from "./users/reducer";

const appReducer = combineReducers({
  post:postReducer,
  user:userReducer
});

export default createStore(appReducer);

