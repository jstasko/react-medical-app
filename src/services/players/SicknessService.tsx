import axios from "axios";
import authHeader from "../auth/AuthHeaders";

const API_URL = 'http://localhost:8069/api/statistics/playersSickness';

export const getSickness = (page, size, additionalParameters: object|null) => {
  return axios.post(API_URL + `?size=${size}&page=${page}`, additionalParameters, {
    headers: authHeader()
  })
};
