import axios from 'axios';
import { BASE_URL } from './consts';

const instance = axios.create({
  baseURL: BASE_URL,
});

export default instance;
