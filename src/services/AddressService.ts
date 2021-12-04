import axios from "axios";
import authHeader from "./auth/AuthHeaders";

const API_URL = 'http://localhost:8069/api/statistics/';

export const getPlayerAddress = (id) => {
  return axios.post(API_URL + `playersAddress?size=${10}&page=${0}`, {
    id
  }, { headers: authHeader() })
};

export const getDoctorAddresses = (id) => {
  return axios.post(API_URL + `doctorsAddress?size=${10}&page=${0}`, {
    id
  }, { headers: authHeader() })
};
