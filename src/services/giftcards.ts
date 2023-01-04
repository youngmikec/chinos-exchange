import axios from './config';
import { BASE_URL } from './config';


const url: string | undefined = BASE_URL;

export const RETREIVE_GIFTCARD = async (query: string = '') => {
    return axios.get(`${url}/giftcards/${query}`);
};

export const CREATE_GIFTCARD = async (data: {[key: string]: any}) => {
    return axios.post(`${url}/giftcards`, data);
};

export const UPDATE_GIFTCARD = async (id: string, data: {[key: string]: any}) => {
    return axios.put(`${url}/giftcards/${id}`, data);
};
export const DELETE_GIFTCARD = async (id: string) => {
    return axios.delete(`${url}/giftcards/${id}`);
};