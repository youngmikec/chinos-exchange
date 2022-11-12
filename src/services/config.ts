import axios from 'axios';
import { getItem } from '../utils';

export const BASE_URL: string = 'http://localhost:3000/api';
const token = getItem('clientToken');
// axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
// axios.defaults.baseURL = 'http://localhost:3000/api';
axios.defaults.headers.common = {'Authorization': `bearer ${token}`}

export default axios;

