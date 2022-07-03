import axios from 'axios';
import { GENRE_URL, TOKEN } from '../../utils/enviroment';

export const getGenres = async (limit = 5, offset = 0) => {
  try {
    const url = `${GENRE_URL}?limit=${limit}&offset=${offset}`;
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

export const getGenre = async (id: string) => {
  try {
    const url = `${GENRE_URL}/${id}`;
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

export const createGenre = async ({ name, description, country, year }) => {
  try {
    const url = `${GENRE_URL}`;
    const newGenre = { name, description, country, year };
    const headers = {
      Authorization: `Bearer ${TOKEN}`,
    };
    const resp = await axios.post(url, newGenre, { headers });
    if (resp?.data?._id) {
      resp.data.id = resp.data._id;
    }
    return resp.data;
  } catch (e) {
    console.log(e.response.data);
    return null;
  }
};

export const deleteGenre = async (id: string) => {
  const url = `${GENRE_URL}/${id}`;
  try {
    const headers = {
      Authorization: `Bearer ${TOKEN}`,
    };
    const resp = await axios.delete(url, { headers });
    return { id, deletedCount: resp.data.deletedCount };
  } catch (e) {
    console.log(e.response.data);
    return null;
  }
};

export const updateGenre = async ({ id, name, description, country, year }) => {
  try {
    const url = `${GENRE_URL}/${id}`;
    const newGenre: { name?: string; description?: string; country?: string; year?: number } = {};
    const values = [
      { key: 'name', val: name },
      { key: 'description', val: description },
      { key: 'country', val: country },
      { key: 'year', val: year },
    ].filter((obj) => obj.val !== null && obj.val !== undefined);

    if (!values.length) {
      throw new Error('Nothing to update, please fill at least one field');
    }
    values.forEach((obj) => (newGenre[obj['key']] = obj.val));

    const headers = {
      Authorization: `Bearer ${TOKEN}`,
    };
    const resp = await axios.put(url, newGenre, { headers });
    if (resp?.data?._id) {
      resp.data.id = resp.data._id;
    }
    return resp.data;
  } catch (e) {
    console.log(e.response.data);
    return null;
  }
};
