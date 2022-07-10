import { createAlbum, deleteAlbum, getAlbum, getAlbums, updateAlbum } from '../album.service';
import { getGenre } from '../../genre/genre.service';
import { getArtist } from '../../artist/artists.service';
import { getBand } from '../../band/bands.service';
import { getTrack } from '../../tracks/tracks.service';
import { IAlbum } from '../config/interfaces';
import { IGenre } from '../../genre/config/interfaces';
import { IArtist } from '../../artist/config/interfaces';
import { IBand } from '../../band/config/interfaces';
import { ITrack } from '../../tracks/config/interfaces';

export default {
  Query: {
    albums: async (_, args): Promise<IAlbum[]> => {
      const { limit, offset, ...filter } = args.filter || {};
      return await getAlbums(limit, offset, filter);
    },
    album: async (parent, args): Promise<IAlbum> => {
      return await getAlbum(args.id);
    },
  },
  Mutation: {
    createAlbum: async (parent, args): Promise<IAlbum> => {
      return await createAlbum(args.album);
    },
    deleteAlbum: async (parent, args) => {
      return await deleteAlbum(args.id);
    },
    updateAlbum: async (parent, args): Promise<IAlbum> => {
      return await updateAlbum(args.album);
    },
  },
  Album: {
    genres: async ({ genresIds }): Promise<IGenre[]> => {
      return await Promise.all(genresIds.map((id) => getGenre(id)));
    },
    artists: async ({ artistsIds }): Promise<IArtist[]> => {
      return await Promise.all(artistsIds.map((id) => getArtist(id)));
    },
    bands: async ({ bandsIds }): Promise<IBand[]> => {
      return await Promise.all(bandsIds.map((id) => getBand(id)));
    },
    tracks: async ({ trackIds }): Promise<ITrack[]> => {
      return await Promise.all(trackIds.map((id) => getTrack(id)));
    },
  },
};
