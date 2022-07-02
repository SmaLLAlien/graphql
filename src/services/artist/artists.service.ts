import axios from "axios";
import {ARTISTS_URL, TOKEN} from "../../utils/enviroment";

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

export const createArtist = async (artist) => {
    const url = `${ARTISTS_URL}`;
    const newArtist = {...artist};

    try {
        const headers = {
            Authorization: `Bearer ${TOKEN}`
        }
        const resp = await axios.post(url, newArtist, {headers});
        return resp.data;
    } catch (e) {
        console.log(e.response.data);
        return null;
    }
}

export const deleteArtist = async (id: string) => {
    const url = `${ARTISTS_URL}/${id}`;
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

export const updateArtist = async (artist) => {
    const url = `${ARTISTS_URL}/${artist.id}`;
    const newArtist: {[key: string]: any} = {};

    const values = [
        {key: "firstName", val: artist.firstName},
        {key: "secondName", val: artist.secondName},
        {key: "middleName", val: artist.middleName},
        {key: "birthDate", val: artist.birthDate},
        {key: "birthPlace", val: artist.birthPlace},
        {key: "country", val: artist.country},
        {key: "bandsIds", val: artist.bandsIds},
        {key: "instruments", val: artist.instruments},
    ].filter(obj => obj.val !== null && obj.val !== undefined);

    if (!values.length) {
        throw new Error('Nothing to update, please fill at least one field');
    }
    values.forEach(obj => newArtist[obj["key"]] = obj.val);

    try {
        const headers = {
            Authorization: `Bearer ${TOKEN}`
        }
        const resp = await axios.put(url, newArtist, {headers});
        return resp.data;
    } catch (e) {
        console.log(e.response.data);
        return null;
    }
}
