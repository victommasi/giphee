import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.giphy.com/v1/gifs/',
});

api.interceptors.request.use((request) => {
  request.params = request.params || {};
  request.params['api_key'] = 'dc6zaTOxFJmzC';
  return request;
});



export default api;
