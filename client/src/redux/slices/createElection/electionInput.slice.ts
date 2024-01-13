import { createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { ElectionType } from "../../../repository/types/election/ElectionType";

const initialState: ElectionType = {
  position: "",
  description: "",
  isOpenToAll: false,
  candidates: [],
  creator: "",
  startDate: "",
  endDate: "",
};

const electionInputSlice = createSlice({
  name: "electionInputSlice",
  initialState,
  reducers: {
    updateData: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateData } = electionInputSlice.actions;
export default electionInputSlice.reducer;
