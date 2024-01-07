import axios from "axios";
import { authDataType } from "../../../repository/types/auth/AuthTypes";
import { AuthApis } from "../apis/AuthApis/AuthApis";

export default class AuthServices {
  public async registerService(body: authDataType) {
    const response = await axios.post(AuthApis.register, body);
    console.log(response);
    return response?.data;
  }
  public async loginService(body: authDataType) {
    const response = await axios.post(AuthApis.login, body);
    return response?.data;
  }
  public async logoutService() {
    const response = await axios.get(AuthApis.logout);
    return response?.data;
  }
}
