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
      console.log(action.payload);

      Object.assign(state, action.payload);

      return state;
    },
    updateCandidates: (state, action) => {
      state.candidates = action.payload
    }
  },
});

export const { updateData, updateCandidates } = electionInputSlice.actions;
export default electionInputSlice.reducer;
