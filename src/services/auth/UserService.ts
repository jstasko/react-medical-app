import axios from "axios";
import authHeader from "./AuthHeaders";
import {getCurrentUser} from "./AuthenticationService";

export const API_USER_URL = "http://localhost:8069/api/users/";

export const getUser = (email) => {
  return axios.get(API_USER_URL + `email/${email}`, { headers: authHeader() })
};

export const updateAvatar = (file, onUploadProgress, baseUrl, id?: string) => {
  let formData = new FormData();
  const user = getCurrentUser();
  if (id) {
    formData.append('id', id)
  } else {
    formData.append('email', user.email)
  }
  formData.append('replace', 'true')
  formData.append('file', file)

  return axios.post(baseUrl + "avatar", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      "Authorization": `Bearer ${user.accessToken}`,
    },
    onUploadProgress
  })
}

export const updatePassword = (password: string) => {
  const user = getCurrentUser();
  return axios.post(API_USER_URL + `password/${user.email}`, {
    password
  }, {headers: authHeader()})
}
