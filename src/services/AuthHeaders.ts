import {AxiosRequestHeaders} from "axios";

export default function authHeader(): AxiosRequestHeaders {
  const userStr = localStorage.getItem("user");
  let user: any = null;
  if (userStr)
    user = JSON.parse(userStr);

  if (user && user.accessToken) {
    return {
      Authorization: 'Bearer ' + user.accessToken,
      "Access-Control-Allow-Origin": "*"
    };
  } else {
    return {};
  }
}
