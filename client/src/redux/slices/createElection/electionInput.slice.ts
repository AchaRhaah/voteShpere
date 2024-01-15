import { createSlice } from "@reduxjs/toolkit";
import { ElectionType } from "../../../repository/types/election/ElectionType";

const initialState: ElectionType = {
  position: "",
  description: "",
  isOpenToAll: false,
  candidates: [],
  voters: [],
  creator: "",
  startDate: "",
  endDate: "",
};

const electionInputSlice = createSlice({
  name: "electionInputSlice",
  initialState,
  reducers: {
    updateData: (state, action) => {
      Object.assign(state, action.payload);

      return state;
    },
    updateCandidates: (state, action) => {
      state.candidates = action.payload;
    },
    updateVoters: (state, action) => {
      state.voters = action.payload;
    },
  },
});

export const { updateData, updateCandidates, updateVoters } =
  electionInputSlice.actions;
export default electionInputSlice.reducer;
