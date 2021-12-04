import axios from "axios";
import authHeader from "./auth/AuthHeaders";

const API_URL = 'http://localhost:8069/api/statistics/';

export const propapiblities = (id: string) => {
  return axios.post(API_URL + `propapiblities?size=${10}&page=${0}`, {
    id
  },  { headers: authHeader() })
};
