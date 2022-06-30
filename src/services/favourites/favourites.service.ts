import axios from "axios";
import {BANDS_URL} from "../../utils/enviroment";

export const getFavourites = async (limit = 5, offset = 0) => {
    const url = `${BANDS_URL}?limit=${limit}&offset=${offset}`;
    const resp = await axios.get(url);
    return resp.data.items;
}
