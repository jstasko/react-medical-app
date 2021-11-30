import axios from "axios";
import authHeader from "./AuthHeaders";

export const getImage = (url) => {
  return axios.get(url, { headers: authHeader() })
};
