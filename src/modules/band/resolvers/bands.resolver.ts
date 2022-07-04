import { createBand, deleteBand, getBand, getBands, updateBand } from '../bands.service';
import { getGenre } from '../../genre/genre.service';

export default {
  Query: {
    bands: async (_, { limit, offset }) => {
      return await getBands(limit, offset);
    },
    band: async (parent, args, context) => {
      return await getBand(args.id);
    },
  },
  Mutation: {
    createBand: async (parent, args, context) => {
      return await createBand(args.band);
    },
    deleteBand: async (parent, args, context) => {
      return await deleteBand(args.id);
    },
    updateBand: async (parent, args, context) => {
      return await updateBand(args.band);
    },
  },
  Band: {
    genres: async ({ genresIds }, args, ctx, info) => {
      return await Promise.all(genresIds.map((id) => getGenre(id)));
    },
  },
};
