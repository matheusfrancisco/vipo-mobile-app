import axios from 'axios';

//#TODO need change when env is productions
const api = axios.create({
  baseURL: 'http://10.0.2.2:3000',
});


export default api;
