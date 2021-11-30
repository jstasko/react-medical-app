import axios from "axios";
import authHeader from "./AuthHeaders";

const API_URL = 'http://localhost:8069/api/persons/players';

export const getPlayers = (page, size) => {
  return axios.get(API_URL + `?size=${size}&page=${page}`, { headers: authHeader() })
};
