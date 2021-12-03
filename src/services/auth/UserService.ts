import axios from "axios";
import authHeader from "./AuthHeaders";
import {getCurrentUser} from "./AuthenticationService";

const API_URL = "http://localhost:8069/api/users/";

export const getUser = (email) => {
  return axios.get(API_URL + `email/${email}`, { headers: authHeader() })
};

export const updateAvatar = (file, onUploadProgress) => {
  const user = getCurrentUser();
  let formData = new FormData();

  formData.append('email', user.email)
  formData.append('replace', 'true')
  formData.append('file', file)

  return axios.post(API_URL + "avatar", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      "Authorization": `Bearer ${user.accessToken}`,
    },
    onUploadProgress
  })
}

export const updatePassword = (password: string) => {
  const user = getCurrentUser();
  return axios.post(API_URL + `password/${user.email}`, {
    password
  }, {headers: authHeader()})
}
