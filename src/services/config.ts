import axios from 'axios';
import { getItem } from '../utils';

export const BASE_URL: any = process.env.REACT_APP_BASE_URL;
const token = getItem('clientToken');
axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
// axios.defaults.baseURL = 'http://localhost:3000/api';
axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}

export default axios;

