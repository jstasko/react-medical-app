import axios from "axios";
import authHeader from "../auth/AuthHeaders";

const API_URL = 'http://localhost:8069/api/statistics/playersOperations';

export const getOperations = (page, size, additionalData: object) => {
  return axios.post(API_URL + `?size=${size}&page=${page}`, additionalData,
    { headers: authHeader() })
};
