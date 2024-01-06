import { AxiosError } from "axios";

interface ErrorResponse {
  email?: string;
  password?: string;
  username?: string;
  network?: string; // Add a network property to capture network-related errors
  // Add other error properties if needed
}

export const handleError = (error: AxiosError) => {
  const errors: ErrorResponse = {
    email: "",
    password: "",
    username: "",
    network: "",
  };

  if (error.isAxiosError) {
    if (error.response) {
      const err = error.response.data as ErrorResponse;

      if (err.email) {
        errors.email = err.email;
      }
      if (err.username) {
        errors.username = err.username;
      }
      if (err.password) {
        errors.password = err.password;
      }
    } else {
      errors.network = "Network error: Please check your connection";
    }
  } else {
    errors.network = "Network error: Unable to reach the server";
  }

  return errors;
};
