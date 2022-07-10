import axios from 'axios';
import { FAVOURITES } from '../../utils/enviroment';
import { IFavorite } from './config/interfaces';
import { tokenInstance } from '../../utils/tokenService';

export const getFavourites = async (): Promise<IFavorite> => {
  try {
    const url = `${FAVOURITES}`;
    const headers = {
      Authorization: `Bearer ${tokenInstance.getToken()}`,
    };
    const resp = await axios.get(url, { headers });

    if (resp.data?._id) {
      resp.data.id = resp.data._id;
    }
    return resp.data;
  } catch (e) {
    console.log(e.response.data);
    return null;
  }
};

export const addToFavourites = async (id: string, type: string): Promise<IFavorite> => {
  try {
    const url = `${FAVOURITES}/add`;
    const body = { id, type };
    const headers = {
      Authorization: `Bearer ${tokenInstance.getToken()}`,
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

export const removeFromFavourites = async (id: string, type: string): Promise<IFavorite> => {
  try {
    const url = `${FAVOURITES}/remove`;
    const body = { id, type };
    const headers = {
      Authorization: `Bearer ${tokenInstance.getToken()}`,
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
