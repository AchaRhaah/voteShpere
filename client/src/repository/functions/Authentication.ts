import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";

const isAuthenticated = () => {
  const token = Cookies.get("accessToken");
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

export default isAuthenticated;