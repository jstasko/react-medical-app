import axios from "axios";
import authHeader from "./auth/AuthHeaders";

const API_URL = 'http://localhost:8069/api/statistics/';

export const getCards = () => {
  return axios.post(API_URL + `cards?size=${10}&page=${0}`, {},  { headers: authHeader() })
};
