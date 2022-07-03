import axios from "axios";
import {ARTISTS_URL, TOKEN} from "../../utils/enviroment";

export const getArtists = async (limit = 5, offset = 0) => {
    try {
        const url = `${ARTISTS_URL}?limit=${limit}&offset=${offset}`;
        const resp = await axios.get(url);
        return resp.data.items.map(item => {
            if (item?._id) {
                item.id = item._id;
            }
            return item;
        });
    } catch (e) {
        console.log(e.response.data);
        return [];
    }
}

export const getArtist = async (id: string) => {
    try {
        const url = `${ARTISTS_URL}/${id}`;
        const resp = await axios.get(url);
        if (resp?.data?._id) {
            resp.data.id = resp.data._id;
        }

        return resp.data ? resp.data : null;
    } catch (e) {
        console.log(e.response.data);
        return null;
    }
}

export const createArtist = async (artist) => {
    try {
        const url = `${ARTISTS_URL}`;
        const newArtist = {...artist};
        const headers = {
            Authorization: `Bearer ${TOKEN}`
        }
        const resp = await axios.post(url, newArtist, {headers});
        if (resp?.data?._id) {
            resp.data.id = resp.data._id;
        }
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
        return {id, deletedCount: resp.data.deletedCount};
    } catch (e) {
        console.log(e.response.data);
        return null;
    }
}

export const updateArtist = async (artist) => {
    try {
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

        const headers = {
            Authorization: `Bearer ${TOKEN}`
        }
        const resp = await axios.put(url, newArtist, {headers});
        if (resp?.data?._id) {
            resp.data.id = resp.data._id;
        }
        return resp.data;
    } catch (e) {
        console.log(e.response.data);
        return null;
    }
}
