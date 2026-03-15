import axios from "./config";
import { BASE_URL } from "./config";

const url: string | undefined = BASE_URL;
    

export const RETRIEVE_APP_REPORTS = async (userId: string) => {
    let uri: string = `${url}/reports/${userId}`;
    return axios.get(uri);
}