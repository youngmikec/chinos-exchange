import axios from './config';
import { BASE_URL } from './config';


// const url: string | undefined = process.env.REACT_APP_BASE_URL;
const url: string | undefined = BASE_URL;

export const RETREIVE_MAILs = async (query: string = '') => {
    return axios.get(`${url}/mails/${query}`);
};

export const CREATE_MAIL = async (data: {[key: string]: any}) => {
    return axios.post(`${url}/mails`, data);
};

export const UPDATE_MAIL = async (id: string, data: {[key: string]: any}) => {
    return axios.put(`${url}/mails/${id}`, data);
};
export const DELETE_MAIL = async (id: string) => {
    return axios.delete(`${url}/mails/${id}`);
};