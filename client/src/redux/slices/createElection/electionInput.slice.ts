import { createSlice } from "@reduxjs/toolkit";
import { electionStates } from "../../../repository/types/election/ElectionType";
import { createElectionThunk } from "../../thunk/election.thunk";
import { AxiosError } from "axios";

const initialState: electionStates = {
  data: {
    position: "",
    description: "",
    isOpenToAll: false,
    candidates: [],
    voters: [],
    creator: "",
    startDate: "",
    endDate: "",
  },
  states: {
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
  },
};

const CreateElectionSlice = createSlice({
  name: "CreateElectionSlice",
  initialState,
  reducers: {
    updateData: (state, action) => {
      Object.assign(state.data, action.payload);
      return state;
    },
    updateCandidates: (state, action) => {
      state.data.candidates = action.payload;
    },
    updateVoters: (state, action) => {
      // console.log("voters:", action.payload);
      state.data.voters = action.payload;
    },
    updateCreateor: (state, action) => {
      state.data.creator = action.payload;
    },
    clearState: (state) => {
      state.data.position = "";
      state.data.description = "";
      state.data.isOpenToAll = false;
      state.data.candidates = [];
      state.data.voters = [];
      state.data.creator = "";
      state.data.startDate = "";
      state.data.endDate = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createElectionThunk.pending, (state) => {
        state.states.isLoading = true;
        state.states.isError = false;
        state.states.isSuccess = false;
      })
      .addCase(createElectionThunk.rejected, (state, action) => {
        state.states.isLoading = false;
        state.states.isError = true;
        state.states.isSuccess = false;
        state.states.message = action.payload as AxiosError;
      })
      .addCase(createElectionThunk.fulfilled, (state) => {
        state.states.isLoading = true;
        state.states.isError = false;
        state.states.isSuccess = false;
      });
  },
});

export const {
  updateData,
  updateCandidates,
  updateVoters,
  updateCreateor,
  clearState,
} = CreateElectionSlice.actions;
export default CreateElectionSlice.reducer;
