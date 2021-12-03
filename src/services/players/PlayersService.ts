import axios from "axios";
import authHeader from "../auth/AuthHeaders";

const API_URL = 'http://localhost:8069/api/persons/players';

export const getPlayers = (page, size) => {
  return axios.get(API_URL + `/rodCislo?size=${size}&page=${page}`, { headers: authHeader() })
};

export const getPlayer = (id) => {
  return axios.get(API_URL + `/rodCislo/${id}`, {headers: authHeader()})
}

export const updatePlayer = (id, data) => {
  return axios.post(API_URL + `/${id}`, data, { headers: authHeader()})
}
