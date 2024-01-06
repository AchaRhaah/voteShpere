import { createAsyncThunk } from "@reduxjs/toolkit";
import { authDataType } from "../../../../repository/types/auth/AuthTypes";
import AuthServices from "../../../services/auth/AuthServices";

export const registerFunc = createAsyncThunk(
  "auth/register",
  async (data: authDataType, thunkAPI) => {
    try {
      console.log("from thunk", data);
      return await new AuthServices().registerService(data);
    } catch (error: any) {
      console.log("REQUEST ERROR: \t", error.response.data);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const loginFunc = createAsyncThunk(
  "auth/login",
  async (data: authDataType, thunkAPI) => {
    try {
      return await new AuthServices().loginService(data);
    } catch (error: any) {
      console.log("REQUEST ERROR: \t", error.response.data);
      return thunkAPI.rejectWithValue(error);
    }
  }
);
