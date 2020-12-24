import axios from 'axios';
//#TODO need change when env is productions
import env from "../config/env"

const api = axios.create({
  baseURL:  env.DEV_API,
});


export default api;
