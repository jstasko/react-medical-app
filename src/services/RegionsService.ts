import axios from "axios";
import authHeader from "./auth/AuthHeaders";

const API_URL = 'http://localhost:8069/api/locations/regions';

export const getRegions = () => {
  return axios.get(API_URL + `?size=20&page=0`, { headers: authHeader() })
};
