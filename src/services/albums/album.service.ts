import axios from "axios";
import {ALBUMS_URL, TOKEN} from "../../utils/enviroment";

export const getAlbums = async (limit = 5, offset = 0) => {
    const url = `${ALBUMS_URL}?limit=${limit}&offset=${offset}`;
    const resp = await axios.get(url);
    return resp.data.items;
}

export const getAlbum = async (id: string) => {
    const url = `${ALBUMS_URL}/${id}`;
    const resp = await axios.get(url);
    return resp.data;
}

export const createAlbum = async (album) => {
    const url = `${ALBUMS_URL}`;
    try {
        const headers = {
            Authorization: `Bearer ${TOKEN}`
        }
        const resp = await axios.post(url, album, {headers});
        return resp.data;
    } catch (e) {
        console.log(e.response.data);
        return null;
    }
}

export const deleteAlbum = async (id: string) => {
    const url = `${ALBUMS_URL}/${id}`;
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

export const updateAlbum = async (album) => {
    const url = `${ALBUMS_URL}/${album.id}`;
    const newGenre = {};
    const values = [
        {key: "name", val: album.name},
        {key: "released", val: album.released},
        {key: "artistsIds", val: album.artistsIds},
        {key: "bandsIds", val: album.bandsIds},
        {key: "trackIds", val: album.trackIds},
        {key: "genresIds", val: album.genresIds},
        {key: "image", val: album.image},
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
