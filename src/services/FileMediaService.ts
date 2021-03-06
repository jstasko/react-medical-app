import axios from "axios";
import authHeader from "./auth/AuthHeaders";
import {getCurrentUser} from "./auth/AuthenticationService";

const API_URL = "http://localhost:8069/api/files/";

export const getImage = (url) => {
  return axios.get(url, { headers: authHeader() })
};

export const uploadImage = (file, onUploadProgress) => {
  const user = getCurrentUser();
  let formData = new FormData();

  formData.append('file', file)

  return axios.post(API_URL + "upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      "Authorization": `Bearer ${user.accessToken}`,
    },
    onUploadProgress
  })
}

export const getJSONPlayer = (id) => {
  return axios.get(API_URL + `json/generated/gen_js_json/${id}`, {headers: authHeader()})
}
