import { combineReducers } from "@reduxjs/toolkit";

const accessToken = { token: null };
const userName = { name: null };

function accessTokenReducer(state = accessToken, action) {
  switch (action.type) {
    case "SET_ACCESS_TOKEN":
      return { ...state, token: action.payload };
    default:
      return state;
  }
}

function userNameReducer(state = userName, action) {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  accessToken: accessTokenReducer,
  userName: userNameReducer,
});

export default rootReducer;
