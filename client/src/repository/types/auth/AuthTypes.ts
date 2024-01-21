import { AxiosError } from "axios";

export interface authDataType {
  password: string;
  email: string;
  username?: string;
}
export interface UserType {
  userId: string;
}
export interface RequestTypes {
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: AxiosError | any;
}

export interface AuthType {
  login: RequestTypes;
  register: RequestTypes;
  logout: RequestTypes;
}
