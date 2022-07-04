import axios from 'axios';
import { FAVOURITES, TOKEN } from '../../utils/enviroment';

export const getFavourites = async (limit = 5, offset = 0) => {
  try {
    const url = `${FAVOURITES}?limit=${limit}&offset=${offset}`;
    const headers = {
      Authorization: `Bearer ${TOKEN}`,
    };
    const resp = await axios.get(url, { headers });

    if (resp.data?._id) {
      resp.data.id = resp.data._id;
    }
    return resp.data;
  } catch (e) {
    console.log(e.response.data);
    return [];
  }
};

export const addToFavourites = async (id: string, type: string) => {
  try {
    const url = `${FAVOURITES}/add`;
    const body = { id, type };
    const headers = {
      Authorization: `Bearer ${TOKEN}`,
    };
    const resp = await axios.put(url, body, { headers });

    if (resp?.data?._id) {
      resp.data.id = resp.data._id;
    }
    return resp.data;
  } catch (e) {
    console.log(e.response.data, 2);
    return null;
  }
};

export const removeFromFavourites = async (id: string, type: string) => {
  try {
    const url = `${FAVOURITES}/remove`;
    const body = { id, type };
    const headers = {
      Authorization: `Bearer ${TOKEN}`,
    };
    const resp = await axios.put(url, body, { headers });

    if (resp?.data?._id) {
      resp.data.id = resp.data._id;
    }
    return resp.data;
  } catch (e) {
    console.log(e.response.data, 2);
    return null;
  }
};
