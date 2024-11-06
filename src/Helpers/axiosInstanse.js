import axios from 'axios';
const BASE_URL = "http://localhost:5175/";
const axiosInstanse = axios.create();
axiosInstanse.defaults.baseURL = BASE_URL;
axiosInstanse.defaults.withCredentials = true;
export default axiosInstanse;  