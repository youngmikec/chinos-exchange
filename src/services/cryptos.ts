import axios from './config';
import { BASE_URL } from './config';


// const url: string | undefined = process.env.REACT_APP_BASE_URL;
const url: string | undefined = BASE_URL;

export const RETREIVE_CRYPTO = async (query: string = '') => {
    return axios.get(`${url}/cryptos/${query}`);
};

export const CREATE_CRYPTO = async (data: {[key: string]: any}) => {
    return axios.post(`${url}/cryptos`, data);
};

export const UPDATE_CRYPTO = async (id: string, data: {[key: string]: any}) => {
    return axios.put(`${url}/cryptos/${id}`, data);
};
export const DELETE_CRYPTO = async (id: string) => {
    return axios.delete(`${url}/cryptos/${id}`);
};