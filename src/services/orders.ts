import axios from './config';
import { BASE_URL } from './config';

// const url: string | undefined = process.env.REACT_APP_BASE_URL;
const url: string | undefined = BASE_URL;

export const RETREIVE_ORDERS = async (query: string = '') => {
    return axios.get(`${url}/orders/${query}`);
};

export const CREATE_ORDER = async (data: {[key: string]: any}) => {
    return axios.post(`${url}/orders`, data);
};

export const UPDATE_ORDER = async (id: string, data: {[key: string]: any}) => {
    return axios.put(`${url}/orders/${id}`, data);
};

export const DELETE_ORDER = async (id: string) => {
    return axios.delete(`${url}/orders/${id}`);
};