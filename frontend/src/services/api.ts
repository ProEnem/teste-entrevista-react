import axios from 'axios';

const api = axios.create({
  baseURL: 'https://staging.api.prodigioeducacao.com/v1',
  headers: {
    'Content-Type': 'application/json',
    'x-brand': 'proenem',
  },
});

export default api;
