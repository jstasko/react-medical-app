import axios from "axios";
import authHeader from "./auth/AuthHeaders";

const API_URL = 'http://localhost:8069/api/statistics/playersAddress';

export const getPlayerAddress = (id) => {
  return axios.post(API_URL + `?size=${10}&page=${0}`, {
    id
  }, { headers: authHeader() })
};
