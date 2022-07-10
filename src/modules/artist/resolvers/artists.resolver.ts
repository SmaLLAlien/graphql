import { createArtist, deleteArtist, getArtist, getArtists, updateArtist } from '../artists.service';
import { getBand } from '../../band/bands.service';
import { IArtist } from '../config/interfaces';
import { IBand } from '../../band/config/interfaces';

export default {
  Query: {
    artists: async (_, args): Promise<IArtist[]> => {
      const { limit, offset, ...filter } = args.filter || {};
      return await getArtists(limit, offset, filter);
    },
    artist: async (parent, args): Promise<IArtist> => {
      return await getArtist(args.id);
    },
  },
  Mutation: {
    createArtist: async (parent, args): Promise<IArtist> => {
      return await createArtist(args.artist);
    },
    deleteArtist: async (parent, args) => {
      return await deleteArtist(args.id);
    },
    updateArtist: async (parent, args): Promise<IArtist> => {
      return await updateArtist(args.artist);
    },
  },
  Artist: {
    bands: async (parent): Promise<IBand[]> => {
      const ids = parent.bandsIds ? parent.bandsIds : parent.bands ? parent.bands : [];
      return await Promise.all(ids.map((id) => getBand(id)));
    },
  },
};
