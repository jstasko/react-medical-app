import axios from "axios";
import authHeader from "../auth/AuthHeaders";

export const DOCTOR_API_URL = 'http://localhost:8069/api/persons/doctors/';

export const getDoctors = async (page, size) => {
  return axios.get(`${DOCTOR_API_URL}images/all?size=${size}&page=${page}`, {headers: authHeader()})
};


export const getDoctor = (id) => {
  return axios.get(DOCTOR_API_URL + `rodCislo/${id}`, {headers: authHeader()})
}

export const doctorsRanking = (page, size) => {
  return axios.post(`http://localhost:8069/api/statistics/doctorsRanking?size=${size}&page=${page}`, {}, { headers: authHeader() })
};

export const updateDoctor = (id, body) => {
  return axios.post(DOCTOR_API_URL + `update/${id}`, {
    priezvisko : body.priezvisko,
    meno: body.meno
  }, {headers: authHeader()})
}
