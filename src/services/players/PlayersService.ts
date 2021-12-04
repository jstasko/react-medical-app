import axios from "axios";
import authHeader from "../auth/AuthHeaders";

const API_URL = 'http://localhost:8069/api/persons/players';

export const getPlayers = (page, size) => {
  return axios.get(API_URL + `/rodCislo?size=${size}&page=${page}`, { headers: authHeader() })
};

export const getPlayer = (id) => {
  return axios.post(`http://localhost:8069/api/statistics/players?size=1&page=0`,
    { id: id },
    {headers: authHeader()}
    )
}

export const getCount = (nazov, page, size) => {
  return axios.post(`http://localhost:8069/api/statistics/kraj?size=${size}&page=${page}`,
    {kraj: nazov},
    {headers: authHeader()}
  )
}

export const updatePlayer = (id, data) => {
  return axios.post(API_URL + `/${id}`, data, { headers: authHeader()})
}
