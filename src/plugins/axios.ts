import axios from "axios";
import { UserAuthentificated } from "../types";

const activeUser: UserAuthentificated = JSON.parse(
  localStorage?.getItem("userActive") || "{}"
);

export const setToken = (token: string) => {
  axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
  // axios.defaults.headers.common = { Authorization: `Bearer ${activeUser.token}` };
};

setToken(activeUser?.token);

axios.interceptors.request.use(
  (res) => res,
  (error) => error
);

axios.interceptors.response.use(
  (res) => res,
  (error) => error
);
