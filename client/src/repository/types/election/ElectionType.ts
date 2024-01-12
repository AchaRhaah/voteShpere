export interface ElectionType {
  position: string;
  description: string;
  isOpenToAll: boolean;
  candidates: string[];
  creator: string;
  startDate: string;
  endDate: string;
}
