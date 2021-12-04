import axios from "axios";
import authHeader from "./auth/AuthHeaders";

const API_URL = 'http://localhost:8069/api/statistics/';

export const getAphotecaries = (size, page) => {
  return axios.post(API_URL + `aphotecary?size=${size}&page=${page}`, {},  { headers: authHeader() })
};
