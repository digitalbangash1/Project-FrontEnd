import axios from 'axios';

export default axios.create({
    baseURL: 'https://localhost:7109',
    timeout: 10000
  });