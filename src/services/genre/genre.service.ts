import axios from "axios";
import {GENRE_URL} from "../../utils/enviroment";

export const getGenres = async (limit = 5, offset = 0) => {
    const url = `${GENRE_URL}?limit=${limit}&offset=${offset}`;
    const resp = await axios.get(url);
    return resp.data.items;
}

export const getGenre = async (id: string) => {
    const url = `http://localhost:3001/v1/genres/${id}`;
    const resp = await axios.get(url);
    return resp.data;
}
