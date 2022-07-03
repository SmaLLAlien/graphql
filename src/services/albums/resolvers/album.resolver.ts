import { createAlbum, deleteAlbum, getAlbum, getAlbums, updateAlbum } from '../album.service';
import { getGenre } from '../../genre/genre.service';
import { getArtist } from '../../artist/artists.service';
import { getBand } from '../../band/bands.service';
import { getTrack } from '../../tracks/tracks.service';

export default {
  Query: {
    albums: async (_, { limit, offset }) => {
      return await getAlbums(limit, offset);
    },
    album: async (parent, args, context) => {
      return await getAlbum(args.id);
    },
  },
  Mutation: {
    createAlbum: async (parent, args, context) => {
      return await createAlbum(args.album);
    },
    deleteAlbum: async (parent, args, context) => {
      return await deleteAlbum(args.id);
    },
    updateAlbum: async (parent, args, context) => {
      return await updateAlbum(args.album);
    },
  },
  Album: {
    genres: async ({ genresIds }, args, ctx, info) => {
      return await Promise.all(genresIds.map((id) => getGenre(id)));
    },
    artists: async ({ artistsIds }, args, ctx, info) => {
      return await Promise.all(artistsIds.map((id) => getArtist(id)));
    },
    bands: async ({ bandsIds }, args, ctx, info) => {
      return await Promise.all(bandsIds.map((id) => getBand(id)));
    },
    tracks: async ({ trackIds }, args, ctx, info) => {
      return await Promise.all(trackIds.map((id) => getTrack(id)));
    },
  },
};
