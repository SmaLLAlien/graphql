import axios from 'axios';
import { BANDS_URL, TOKEN } from '../../utils/enviroment';
import { IBand, IFilterBand } from './config/interfaces';
import { LIMIT, OFFSET } from '../artist/config/config';
import { addQueryParams } from '../../utils/addQueryParams';

export const getBands = async (limit = LIMIT, offset = OFFSET, filter: IFilterBand): Promise<IBand[]> => {
  try {
    let url = `${BANDS_URL}?limit=${limit}&offset=${offset}`;
    url = addQueryParams(url, filter);

    const resp = await axios.get(url);
    return resp.data.items.map((item) => {
      if (item?._id) {
        item.id = item._id;
      }
      return item;
    });
  } catch (e) {
    console.log(e.response.data);
    return [];
  }
};

export const getBand = async (id: string): Promise<IBand> => {
  try {
    const url = `${BANDS_URL}/${id}`;
    const resp = await axios.get(url);
    if (resp?.data?._id) {
      resp.data.id = resp.data._id;
    }
    return resp.data ? resp.data : null;
  } catch (e) {
    console.log(e.response.data);
    return null;
  }
};

export const createBand = async ({ name, origin, website, genresIds }): Promise<IBand> => {
  try {
    const url = `${BANDS_URL}`;
    const newBand: IBand = { name, origin, website, genresIds };
    const headers = {
      Authorization: `Bearer ${TOKEN}`,
    };
    const resp = await axios.post(url, newBand, { headers });
    if (resp?.data?._id) {
      resp.data.id = resp.data._id;
    }
    return resp.data;
  } catch (e) {
    console.log(e.response.data);
    return null;
  }
};

export const deleteBand = async (id: string) => {
  const url = `${BANDS_URL}/${id}`;
  try {
    const headers = {
      Authorization: `Bearer ${TOKEN}`,
    };
    const resp = await axios.delete(url, { headers });
    return { id: id, deletedCount: resp.data.deletedCount };
  } catch (e) {
    console.log(e.response.data);
    return null;
  }
};

export const updateBand = async ({ id, name, origin, website, genresIds }): Promise<IBand> => {
  try {
    const url = `${BANDS_URL}/${id}`;
    const newBand: { name?: string; description?: string; country?: string; year?: number } = {};

    const values = [
      { key: 'name', val: name },
      { key: 'origin', val: origin },
      { key: 'website', val: website },
      { key: 'genresIds', val: genresIds },
    ].filter((obj) => obj.val !== null && obj.val !== undefined);

    if (!values.length) {
      throw new Error('Nothing to update, please fill at least one field');
    }
    values.forEach((obj) => (newBand[obj['key']] = obj.val));

    const headers = {
      Authorization: `Bearer ${TOKEN}`,
    };
    const resp = await axios.put(url, newBand, { headers });
    if (resp?.data?._id) {
      resp.data.id = resp.data._id;
    }
    return resp.data;
  } catch (e) {
    console.log(e.response.data);
    return null;
  }
};
