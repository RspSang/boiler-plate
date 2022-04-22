import axios from "axios";

//SERVER ROUTES
export const USER_SERVER = "/api/users";

export async function registerUser(dataToSubmit) {
  const request = await axios
    .post(`${USER_SERVER}/register`, dataToSubmit)
    .then((response) => response.data);

  return {
    registerUser: request,
  };
}

export async function loginUser(dataToSubmit) {
  const request = await axios
    .post(`${USER_SERVER}/login`, dataToSubmit)
    .then((response) => response.data);

  return {
    loginUser: request,
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
    logout_user: request,
  };
}
