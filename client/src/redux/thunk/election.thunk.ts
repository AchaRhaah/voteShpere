import { createAsyncThunk } from "@reduxjs/toolkit";
import { ElectionType } from "../../repository/types/election/ElectionType";
import ElectionServices from "../services/election/ElectionService";

export const createElectionThunk = createAsyncThunk(
  "createElection",
  async (data: ElectionType) => {
    try {
      console.log(data);
      return await new ElectionServices().createElection(data);
    } catch (error) {}
  }
);
