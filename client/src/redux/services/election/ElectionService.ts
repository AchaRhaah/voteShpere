import axios from "axios";
import { ElectionType } from "../../../repository/types/election/ElectionType";
import { ElectionApis } from "../apis/ElectionApis/ElectionApis";

export default class ElectionServices {
  public async createElection(body: ElectionType) {
    const response = await axios.post(ElectionApis.createELection, body);
    console.log(response);
    return response?.data;
  }
}
