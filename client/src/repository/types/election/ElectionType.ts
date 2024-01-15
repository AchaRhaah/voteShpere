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
