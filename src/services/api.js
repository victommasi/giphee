import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.giphy.com/v1/gifs/',
});

// api.interceptors.request.use((request) => {
//   window.loader.show();
//   return request;
// });

// api.interceptors.response.use(
//   (response) => {
//     window.loader.hide();
//     return response;
//   },
//   (error) => {
//     window.loader.hide();
//     return error;
//   }
// );

export default api;
