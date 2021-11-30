import axios from "axios";
import authHeader from "./AuthHeaders";

const API_URL = "http://localhost:8069/api/users/";

export const getUser = (email) => {
  return axios.get(API_URL + `email/${email}`, { headers: authHeader() })
};
