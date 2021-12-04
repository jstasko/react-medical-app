import axios, {AxiosResponse} from "axios";
import authHeader from "../auth/AuthHeaders";

const API_URL = 'http://localhost:8069/api/persons/doctors';

export const getDoctors = async (page, size) => {
  // return axios.get(`${API_URL}/images?size=${size}&page=${page}`, {headers: authHeader()})
  const help = {
    totalPages: 1,
    totalItems: 1,
    data: [
      {
        id: 'AAAAAAAAA',
        rodCislo: '9611128560',
        meno: 'Jozef',
        priezvisko: 'Stasko',
        image: 'http://localhost:8069/api/files/download/7'
      }
    ],
    currentPage: 0,
  }
  const response : AxiosResponse = {
    data: help,
    headers: {},
    status: 200,
    config: {},
    statusText: ""

  }

  return response
};


export const getDoctor = (id) => {
  return axios.get(API_URL + `/rodCislo/${id}`, {headers: authHeader()})
}
