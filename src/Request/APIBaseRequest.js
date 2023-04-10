import axios from 'axios';

const api = axios.create({
  baseURL: 'https://example.com/api',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});