import axios from "./config";
import { BASE_URL } from "./config";

const url: string | undefined = BASE_URL;
const bankApiKey: string | undefined = process.env.REACT_APP_BANK_API_KEY;

export const RETREIVE_BANKS = async (query: string = "") => {
  return axios.get(`${url}/banks/${query}`);
};

export const VERIFY_ACCOUNT_NUMBER = async (bankCode: string, accountNumber: string) => {
  return axios.get(`https://nubapi.com/api/verify?account_number=${accountNumber}&bank_code=${bankCode}`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${bankApiKey}`
    }
  })
}