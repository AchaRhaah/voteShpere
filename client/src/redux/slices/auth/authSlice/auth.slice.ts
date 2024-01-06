import { createSlice } from "@reduxjs/toolkit";
import { registerFunc, loginFunc } from "../thunk/auth.thunk";
import { AxiosError } from "axios";
import {
  AuthStateType,
  AuthType,
} from "../../../../repository/types/auth/AuthTypes";

const initialState: AuthType = {
  register: {
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
    user: {},
  },
  login: {
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
    user: {},
  },
};

const authSlice = createSlice({
  name: "authSlice",
  initialState: initialState,
  reducers: {
    resetAuthState: (state) => {
      state.register.isError = false;
      state.register.isLoading = false;
      state.register.isSuccess = false;
      state.register.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerFunc.pending, (state) => {
        state.register.isLoading = true;
        state.register.isError = false;
        state.register.isSuccess = false;
      })
      .addCase(registerFunc.rejected, (state, action) => {
        state.register.isLoading = false;
        state.register.isError = true;
        state.register.isSuccess = false;
        state.register.message = action.payload as AxiosError;
      })
      .addCase(registerFunc.fulfilled, (state, action) => {
        state.register.isLoading = false;
        state.register.isError = false;
        state.register.isSuccess = true;
        state.register.message = "";
      })
      .addCase(loginFunc.pending, (state) => {
        state.login.isLoading = true;
        state.login.isError = false;
        state.login.isSuccess = false;
      })
      .addCase(loginFunc.rejected, (state, action) => {
        state.login.isLoading = false;
        state.login.isError = true;
        state.login.isSuccess = false;
        state.login.message = action.payload as AxiosError;
      })
      .addCase(loginFunc.fulfilled, (state, action) => {
        state.login.isLoading = false;
        state.login.isError = false;
        state.login.isSuccess = true;
        state.login.message = "";
      });
  },
});

export const { resetAuthState } = authSlice.actions;
export default authSlice.reducer;
