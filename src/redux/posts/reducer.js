import { GET_POSTS } from "./actions/types";

const initState = {
  posts: []
};

const postReducer = (state = initState, action) =>{
  switch(action.type){
    case GET_POSTS:
      return{
        ...state,
        posts:[...state.posts, ...action.payload]
      }
    default:
      return state
  }
};

export default postReducer;