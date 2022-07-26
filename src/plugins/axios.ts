import axios from "axios";
import { UserAuthentificated } from "../types";

const activeUser: UserAuthentificated = JSON.parse(
  localStorage?.getItem("userActive") || "{}"
);
axios.defaults.headers.common = { Authorization: `Bearer ${activeUser.token}` };

axios.interceptors.request.use(
  (res) => {
    return res;
  },
  (error) => {
    console.log("ERROR HANDLE => ", JSON.stringify(JSON.parse(error), null, 4));
  }
);

axios.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    // console.log(message, status);
    // console.log(JSON.stringify(error, null, 4), status, message)
    return error;
  }
);
