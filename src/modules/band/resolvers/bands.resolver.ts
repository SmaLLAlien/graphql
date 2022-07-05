import { createBand, deleteBand, getBand, getBands, updateBand } from '../bands.service';
import { getGenre } from '../../genre/genre.service';
import { IBand } from '../config/interfaces';
import { IGenre } from '../../genre/config/interfaces';

export default {
  Query: {
    bands: async (_, args): Promise<IBand[]> => {
      const { limit, offset, ...filter } = args.filter || {};
      return await getBands(limit, offset, filter);
    },
    band: async (parent, args): Promise<IBand> => {
      return await getBand(args.id);
    },
  },
  Mutation: {
    createBand: async (parent, args): Promise<IBand> => {
      return await createBand(args.band);
    },
    deleteBand: async (parent, args) => {
      return await deleteBand(args.id);
    },
    updateBand: async (parent, args): Promise<IBand> => {
      return await updateBand(args.band);
    },
  },
  Band: {
    genres: async ({ genresIds }): Promise<IGenre[]> => {
      return await Promise.all(genresIds.map((id) => getGenre(id)));
    },
  },
};
