import axios from 'axios';

const publicKeys = [
  'u2AOZsmlHlP5hXjazamB9Ew0scser5VW',
  '0QUd0TfVGJQSkxletkWjnagHeQSgwTU4',
  'Bw2YLOAHZCQNkh4snQTv9cBD98WpU80I',
  'ivVTH3dDkQoM7NuttLDp6pFg83wYQss8',
  'Qyr4YoQEdVfICWNhG95bfDWjT5B05bdq',
  'aORSyh3OYX52nRTFnKFPMTC6ijlqSOee'
]

const api = axios.create({
  baseURL: 'https://api.giphy.com/v1/gifs/',
});

api.interceptors.request.use((request) => {
  request.params = request.params || {};
  request.params['api_key'] = publicKeys[Math.floor(Math.random() * publicKeys.length)];
  return request;
});



export default api;
