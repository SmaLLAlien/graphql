import axios from "axios";
import {GENRE_URL, TOKEN} from "../../utils/enviroment";

export const getGenres = async (limit = 5, offset = 0) => {
    const url = `${GENRE_URL}?limit=${limit}&offset=${offset}`;
    const resp = await axios.get(url);
    return resp.data.items;
}

export const getGenre = async (id: string) => {
    const url = `${GENRE_URL}/${id}`;
    const resp = await axios.get(url);
    return resp.data;
}

export const createGenre = async ({name, description, country, year}) => {
    const url = `${GENRE_URL}`;
    const newGenre = {name, description, country, year};
    try {
        const headers = {
            Authorization: `Bearer ${TOKEN}`
        }
        const resp = await axios.post(url, newGenre, {headers});
        return resp.data;
    } catch (e) {
        console.log(e.response.data);
        return null;
    }
}

export const deleteGenre = async (id: string) => {
    const url = `${GENRE_URL}/${id}`;
    try {
        const headers = {
            Authorization: `Bearer ${TOKEN}`
        }
        const resp = await axios.delete(url, {headers});
        return {_id: id, deletedCount: resp.data.deletedCount};
    } catch (e) {
        console.log(e.response.data);
        return null;
    }
}

export const updateGenre = async ({id, name, description, country, year}) => {
    const url = `${GENRE_URL}/${id}`;
    const newGenre: {name?: string, description?: string, country?: string, year?: number} = {};
    const values = [
        {key: "name", val: name},
        {key: "description", val: description},
        {key: "country", val: country},
        {key: "year", val: year}
    ].filter(obj => obj.val !== null && obj.val !== undefined);

    if (!values.length) {
        throw new Error('Nothing to update, please fill at least one field');
    }
    values.forEach(obj => newGenre[obj["key"]] = obj.val);

    try {
        const headers = {
            Authorization: `Bearer ${TOKEN}`
        }
        const resp = await axios.put(url, newGenre, {headers});
        return resp.data;
    } catch (e) {
        console.log(e.response.data);
        return null;
    }
}
