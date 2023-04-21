import { HYDRATE } from "next-redux-wrapper";
import user from "./user";
import post from "./post";
import { combineReducers } from "redux";

// const initialState = {
//   name: "yul",
//   age: 30,
//   password: "pw",
// };

// const changeNickname = {
//   type: "CHANGE_NICKNAME",
// 	data : 'hoho'
// };

// const changeNickname = {
//   type: "CHANGE_NICKNAME",
// 	data : 'hoho'
// };

// const changeNickname = {
//   type: "CHANGE_NICKNAME",
// 	data : 'hoho'
// };

const initialState = {
  user: {},
  post: {},
};

//action creator
const changeNickname = (data) => {
  return {
    type: "LOG_IN",
    data,
  };
};

const rootReducer = combineReducers({
  index: (state = initialState, action) => {
    switch (action.type) {
      case HYDRATE:
        console.log("HYDRATE", action);
        return { ...state, ...action.payload };
      default:
        return state;
    }
  },
  user,
  post,
});

export default rootReducer;
