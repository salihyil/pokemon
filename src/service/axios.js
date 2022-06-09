import axios from "axios";

import store from "../store/store";
import { START_LOADING, FINISH_LOADING } from "../store/pokemonData/slice";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

/* axiosInstance.interceptors.request.use(
  (config) => {
    console.log("interceptors request çalıştı.");

    store.dispatch(START_LOADING());
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    console.log("interceptors response çalıştı.");

    store.dispatch(FINISH_LOADING());
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
); */

const axiosGet = (resultUrl) => {
  return axios.get(resultUrl);
};

export { axiosGet };

export default axiosInstance;
