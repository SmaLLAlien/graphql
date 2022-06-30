import axios from "axios";
import {ARTISTS_URL} from "../../utils/enviroment";

export const getArtists = async (limit = 5, offset = 0) => {
    const url = `${ARTISTS_URL}?limit=${limit}&offset=${offset}`;
    const resp = await axios.get(url);
    return resp.data.items;
}

export const getArtist = async (id: string) => {
    const url = `${ARTISTS_URL}/${id}`;
    const resp = await axios.get(url);
    return resp.data;
}
