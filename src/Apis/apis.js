import axios from "axios";
const BASE_URL = "http://localhost:6432/api/";
export const IMG_URL = "http://localhost:6432/uploads/"

export const add_movie_api = (data) => {
  return axios.post(BASE_URL + "app/add-movie", data);
};

export const upd_movie_api = (data) => {
  return axios.post(BASE_URL + "app/upd-movie", data);
};
export const get_movie_api = (data) => {
  return axios.post(BASE_URL + "app/get-movies", data);
};
