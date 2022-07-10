import { createTrack, deleteTrack, getTrack, getTracks, updateTrack } from '../tracks.service';
import { getGenre } from '../../genre/genre.service';
import { getBand } from '../../band/bands.service';
import { getArtist } from '../../artist/artists.service';
import { getAlbum } from '../../albums/album.service';
import { ITrack } from '../config/interfaces';
import { IGenre } from '../../genre/config/interfaces';
import { IBand } from '../../band/config/interfaces';
import { IArtist } from '../../artist/config/interfaces';
import { IAlbum } from '../../albums/config/interfaces';

export default {
  Query: {
    tracks: async (_, args): Promise<ITrack[]> => {
      const { limit, offset, ...filter } = args.filter || {};
      return await getTracks(limit, offset, filter);
    },
    track: async (parent, args): Promise<ITrack> => {
      return await getTrack(args.id);
    },
  },
  Mutation: {
    createTrack: async (parent, args): Promise<ITrack> => {
      return await createTrack(args.track);
    },
    deleteTrack: async (parent, args) => {
      return await deleteTrack(args.id);
    },
    updateTrack: async (parent, args): Promise<ITrack> => {
      return await updateTrack(args.track);
    },
  },
  Track: {
    genres: async ({ genresIds }): Promise<IGenre[]> => {
      return await Promise.all(genresIds.map((id) => getGenre(id)));
    },
    bands: async ({ bandsIds }): Promise<IBand[]> => {
      return await Promise.all(bandsIds.map((id) => getBand(id)));
    },
    artists: async ({ artistsIds }): Promise<IArtist[]> => {
      return await Promise.all(artistsIds.map((id) => getArtist(id)));
    },
    album: async ({ albumId }): Promise<IAlbum> => {
      return await getAlbum(albumId);
    },
  },
};
