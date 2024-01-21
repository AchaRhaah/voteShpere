import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "../slices/auth/authSlice/auth.slice";
import CreateElectionSlice from "../slices/createElection/electionInput.slice";

export const rootReducer = combineReducers({
  authSlice,
  CreateElectionSlice,
});
