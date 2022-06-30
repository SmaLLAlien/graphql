import axios from "axios";
import {BANDS_URL} from "../../utils/enviroment";

export const getBands = async (limit = 5, offset = 0) => {
    const url = `${BANDS_URL}?limit=${limit}&offset=${offset}`;
    const resp = await axios.get(url);
    return resp.data.items;
}

export const getBand = async (id: string) => {
    const url = `${BANDS_URL}/${id}`;
    const resp = await axios.get(url);
    return resp.data;
}
