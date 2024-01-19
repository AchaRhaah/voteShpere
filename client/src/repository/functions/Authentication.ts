import { jwtDecode } from "jwt-decode";

const isAuthenticated = () => {
  const token = "";
  if (!token) {
    return false;
  }

  try {
    const decodedToken: { exp?: number } = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    return decodedToken.exp !== undefined && decodedToken.exp > currentTime;
  } catch (error) {
    console.error("Error decoding token:", error);
    return false;
  }
};
