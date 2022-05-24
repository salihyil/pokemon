import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

const axiosGet = (resultUrl) => {
  return axios.get(resultUrl);
};

export { axiosGet };

export default axiosInstance;
