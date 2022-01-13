import { combineReducers, createStore } from "redux";
import postReducer from "./posts/reducer";

const appReducer = combineReducers({
  post:postReducer
});

export default createStore(appReducer);

