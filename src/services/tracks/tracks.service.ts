import axios from "axios";
import {TOKEN, TRACKS_URL} from "../../utils/enviroment";

export const getTracks = async (limit = 5, offset = 0) => {
    const url = `${TRACKS_URL}?limit=${limit}&offset=${offset}`;
    const resp = await axios.get(url);
    return resp.data.items;
}

export const getTrack = async (id: string) => {
    const url = `${TRACKS_URL}/${id}`;
    const resp = await axios.get(url);
    return resp.data;
}

export const createTrack = async (track) => {
    const url = `${TRACKS_URL}`;
    const newBand = {...track};
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

export const deleteTrack = async (id: string) => {
    const url = `${TRACKS_URL}/${id}`;
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

export const updateTrack= async (track) => {
    const url = `${TRACKS_URL}/${track.id}`;
    const newBand = {};

    const values = [
        {key: "title", val: track.title},
        {key: "albumId", val: track.albumId},
        {key: "bandsIds", val: track.bandsIds},
        {key: "artistsIds", val: track.artistsIds},
        {key: "duration", val: track.duration},
        {key: "released", val: track.released},
        {key: "genresIds", val: track.genresIds}
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
