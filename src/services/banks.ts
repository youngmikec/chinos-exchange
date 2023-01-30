import axios from "./config";
import { BASE_URL } from "./config";

const url: string | undefined = BASE_URL;

export const RETREIVE_BANKS = async (query: string = "") => {
  return axios.get(`${url}/banks/${query}`);
};
