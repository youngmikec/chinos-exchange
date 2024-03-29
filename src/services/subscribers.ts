import axios from "./config";
import { BASE_URL } from "./config";

// const url: string | undefined = process.env.REACT_APP_BASE_URL;
const url: string | undefined = BASE_URL;

export const RETREIVE_SUBSCRIBER = async (query: string = "") => {
  return axios.get(`${url}/subscribers/${query}`);
};

export const CREATE_SUBSCRIBER = async (data: { [key: string]: any }) => {
  return axios.post(`${url}/subscribers`, data);
};

export const UPDATE_SUBSCRIBER = async (
  id: string,
  data: { [key: string]: any }
) => {
  return axios.put(`${url}/subscribers/${id}`, data);
};
export const DELETE_SUBSCRIBER = async (id: string) => {
  return axios.delete(`${url}/subscribers/${id}`);
};
