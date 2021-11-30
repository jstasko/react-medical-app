import axios, {AxiosRequestHeaders} from "axios";
import authHeader from "./AuthHeaders";

const API_URL = "http://localhost:8069/api/files/";

export const getImage = (url) => {
  return axios.get(url, { headers: authHeader() })
};

export const uploadImage = (file, email, replace,onUploadProgress) => {
  let formData = new FormData();

  formData.append('file', file)
  formData.append('email', email)
  formData.append('replace', replace)

  const header: AxiosRequestHeaders = authHeader();

  return axios.post(API_URL + "upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",

    },
    onUploadProgress
  })
}
