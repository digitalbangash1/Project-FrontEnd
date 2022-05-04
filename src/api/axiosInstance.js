import axios from 'axios';

export default axios.create({
    //baseURL: 'https://localhost:7109',
    baseURL: 'https://engineersacadamy-api.azurewebsites.net',
    timeout: 10000
  });