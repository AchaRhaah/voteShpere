import { AxiosError } from "axios";

export interface authDataType {
  password: string;
  email: string;
  username?: string;
}
export interface AuthStateType {
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: AxiosError | any;
  user: any | null;
}

export interface AuthType {
  login: AuthStateType;
  register: AuthStateType;
}
