import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import {
  registerThunk,
  loginThunk,
  LogoutThunk,
} from "../../../thunk/auth.thunk";
import { AxiosError } from "axios";
import { AuthType } from "../../../../repository/types/auth/AuthTypes";

const initialState: AuthType = {
  register: {
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
  },
  login: {
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
  },
  logout: {
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
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
      .addCase(registerThunk.pending, (state) => {
        state.register.isLoading = true;
        state.register.isError = false;
        state.register.isSuccess = false;
      })
      .addCase(registerThunk.rejected, (state, action) => {
        state.register.isLoading = false;
        state.register.isError = true;
        state.register.isSuccess = false;
        state.register.message = action.payload as AxiosError;
      })
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.register.isLoading = false;
        state.register.isError = false;
        state.register.isSuccess = true;
        // state.register.user.userId = action.payload.data.user;
        state.register.message = "";
        Cookies.set("accessToken", action.payload.token);
        Cookies.set("user", action.payload.user);

        console.log("fulfilled login");
      })
      .addCase(loginThunk.pending, (state) => {
        state.login.isLoading = true;
        state.login.isError = false;
        state.login.isSuccess = false;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.login.isLoading = false;
        state.login.isError = true;
        state.login.isSuccess = false;
        state.login.message = action.payload as AxiosError;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        console.log("fulfilled login", action.payload);
        state.login.isLoading = false;
        state.login.isError = false;
        state.login.isSuccess = true;
        // state.login.user.userId = action.payload.user;
        state.login.message = "";
        Cookies.set("accessToken", action.payload.token);
        Cookies.set("user", action.payload.user);
      })
      .addCase(LogoutThunk.pending, (state) => {
        console.log("Processing");
        state.logout.isLoading = true;
        state.logout.isError = false;
        state.logout.isSuccess = false;
      })
      .addCase(LogoutThunk.rejected, (state, action) => {
        state.logout.isLoading = false;
        state.logout.isError = true;
        state.logout.isSuccess = false;
        state.logout.message = action.payload as AxiosError;
        console.log("Rejected");
      })
      .addCase(LogoutThunk.fulfilled, (state, action) => {
        console.log("logged out");
        state.logout.isLoading = false;
        state.logout.isError = false;
        state.logout.isSuccess = true;
        Cookies.set("accessToken", action.payload.token);
        Cookies.set("user", action.payload.user);
        state.logout.message = "";
      });
  },
});

export const { resetAuthState } = authSlice.actions;
export default authSlice.reducer;
