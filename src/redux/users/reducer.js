import { FETCH_USER } from "././actions/type";

const initState = {
  user: {}
};

const reducer = (state = initState, action) =>{
  switch(action.type){
    case FETCH_USER:
      return {
        ...state,
        user: action.payload
      }
    default:
      return state;
  }
};

export default reducer;