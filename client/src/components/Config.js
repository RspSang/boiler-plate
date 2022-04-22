import axios from "axios";

//SERVER ROUTES
export const USER_SERVER = "/api/users";

export function registerUser(dataToSubmit) {
  const request = axios
    .post(`${USER_SERVER}/register`, dataToSubmit)
    .then((response) => response.data);

  return {
    type: "register_user",
    payload: request,
  };
}

export async function loginUser(dataToSubmit) {
  const request = await axios
    .post(`${USER_SERVER}/login`, dataToSubmit)
    .then((response) => response.data);

  return {
    type: "login_user",
    payload: request,
  };
}

export async function auth() {
  const request = await axios
    .get(`${USER_SERVER}/auth`)
    .then((response) => response.data);

  return {
    userData: request,
  };
}

export function logoutUser() {
  const request = axios
    .get(`${USER_SERVER}/logout`)
    .then((response) => response.data);

  return {
    type: "logout_user",
    payload: request,
  };
}
