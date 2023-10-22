import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: `${process.env.VUE_APP_BASE_API_URL}`,
  headers: { 'Content-Type': 'application/json' },
});

axiosInstance.defaults.params = {
  appid: `${process.env.VUE_APP_BASE_API_KEY}`,
};

export default axiosInstance;
