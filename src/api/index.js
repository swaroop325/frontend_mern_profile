const axios = require("axios");
const URI = "https://mern-swaroop325.herokuapp.com/";

export function login(payload) {
  return axios
    .post(URI + "api/auth/login", payload)
    .then(function (response) {
      console.log(response);
      return response?.data;
    })
    .catch(function (error) {
      console.log(error);
      return false;
    });
}

export function register(payload) {
  return axios
    .post(URI + "api/auth/register", payload)
    .then(function (response) {
      console.log(response);
      return response?.data;
    })
    .catch(function (error) {
      console.log(error);
      return false;
    });
}
