import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.giphy.com/v1/gifs/',
});

api.interceptors.request.use((request) => {
  request.params = request.params || {};
  request.params['api_key'] = 'Ykd0y68FN92mO1Lc6jR8iCnYhtEKL6Ze';
  return request;
});



export default api;
