import axios from "axios";
import {BANDS_URL, TOKEN} from "../../utils/enviroment";

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

export const createBand = async ({name, origin, website, genresIds}) => {
    const url = `${BANDS_URL}`;
    const newBand = {name, origin, website, genresIds};
    try {
        const headers = {
            Authorization: `Bearer ${TOKEN}`
        }
        const resp = await axios.post(url, newBand, {headers});
        return resp.data;
    } catch (e) {
        console.log(e.response.data);
        return null;
    }
}

export const deleteBand = async (id: string) => {
    const url = `${BANDS_URL}/${id}`;
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

export const updateBand = async ({id, name, origin, website, genresIds}) => {
    const url = `${BANDS_URL}/${id}`;
    const newBand: {name?: string, description?: string, country?: string, year?: number} = {};

    const values = [
        {key: "name", val: name},
        {key: "origin", val: origin},
        {key: "website", val: website},
        {key: "genresIds", val: genresIds}
    ].filter(obj => obj.val !== null && obj.val !== undefined);

    if (!values.length) {
        throw new Error('Nothing to update, please fill at least one field');
    }
    values.forEach(obj => newBand[obj["key"]] = obj.val);

    try {
        const headers = {
            Authorization: `Bearer ${TOKEN}`
        }
        const resp = await axios.put(url, newBand, {headers});
        return resp.data;
    } catch (e) {
        console.log(e.response.data);
        return null;
    }
}
