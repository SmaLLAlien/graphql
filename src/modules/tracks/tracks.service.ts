import axios from 'axios';
import { TOKEN, TRACKS_URL } from '../../utils/enviroment';
import { IFilterTrack, ITrack } from './config/interfaces';
import { addQueryParams } from '../../utils/addQueryParams';

export const getTracks = async (limit = 5, offset = 0, filter: IFilterTrack): Promise<ITrack[]> => {
  try {
    let url = `${TRACKS_URL}?limit=${limit}&offset=${offset}`;
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

export const getTrack = async (id: string): Promise<ITrack> => {
  try {
    const url = `${TRACKS_URL}/${id}`;
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

export const createTrack = async (track: ITrack): Promise<ITrack> => {
  try {
    const url = `${TRACKS_URL}`;
    const newBand = { ...track };
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

export const deleteTrack = async (id: string) => {
  const url = `${TRACKS_URL}/${id}`;
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

export const updateTrack = async (track: ITrack): Promise<ITrack> => {
  try {
    const url = `${TRACKS_URL}/${track.id}`;
    const newBand: ITrack = {};

    const values = [
      { key: 'title', val: track.title },
      { key: 'albumId', val: track.albumId },
      { key: 'bandsIds', val: track.bandsIds },
      { key: 'artistsIds', val: track.artistsIds },
      { key: 'duration', val: track.duration },
      { key: 'released', val: track.released },
      { key: 'genresIds', val: track.genresIds },
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
