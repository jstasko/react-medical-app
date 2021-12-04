import axios from "axios";
import authHeader from "./auth/AuthHeaders";

const API_URL = 'http://localhost:8069/api/statistics/';

export const getSpecializations = () => {
  return axios.post(API_URL + `specializations?size=${10}&page=${0}`, {},  { headers: authHeader() })
};
