import { RequestTypes } from "../auth/AuthTypes";
export interface ElectionType {
  position: string;
  description: string;
  isOpenToAll: boolean;
  candidates: string[];
  voters?: string[];
  creator: string;
  startDate: string;
  endDate: string;
}

export interface electionStates {
  data: ElectionType;
  states: RequestTypes;
}
