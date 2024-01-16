import authSlice from "../slices/auth/authSlice/auth.slice";
import { combineReducers } from "@reduxjs/toolkit";
import electionInputSlice from "../slices/createElection/electionInput.slice";

const rootReducer = combineReducers({
  authSlice,
  electionInputSlice,
});

export default rootReducer;