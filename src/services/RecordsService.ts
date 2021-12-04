import axios from "axios";
import authHeader from "./auth/AuthHeaders";

const API_URL = 'http://localhost:8069/api/statistics/';

export const getMedicalRecords = () => {
  return axios.post(API_URL + `records?size=${10}&page=${0}`, {},  { headers: authHeader() })
};
