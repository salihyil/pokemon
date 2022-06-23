import axios from "axios";

import store from "../store/store";
import { pokeActions } from "../store/pokemonData/slice";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    store.dispatch(pokeActions.START_LOADING());
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    store.dispatch(pokeActions.FINISH_LOADING());
    return response;
  },
  (error) => {
    store.dispatch(pokeActions.FINISH_LOADING());
    return Promise.reject(error);
  }
);

const axiosGet = (resultUrl) => {
  return axios.get(resultUrl);
};

export { axiosGet };

export default axiosInstance;
