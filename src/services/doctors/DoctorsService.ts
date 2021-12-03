import axios from "axios";
import authHeader from "../auth/AuthHeaders";

const API_URL = 'http://localhost:8069/api/persons/doctors';

export const getDoctors = (page, size) => {
  return axios.get(`${API_URL}?size=${size}&page=${page}`, {headers: authHeader()})
};
