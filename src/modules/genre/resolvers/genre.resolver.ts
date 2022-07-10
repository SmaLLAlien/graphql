import { createGenre, deleteGenre, getGenre, getGenres, updateGenre } from '../genre.service';
import { IGenre } from '../config/interfaces';

export default {
  Query: {
    genres: async (_, args): Promise<IGenre[]> => {
      const { limit, offset, ...filter } = args.filter || {};
      return await getGenres(limit, offset, filter);
    },
    genre: async (parent, args): Promise<IGenre> => {
      return await getGenre(args.id);
    },
  },
  Mutation: {
    createGenre: async (parent, args): Promise<IGenre> => {
      return await createGenre(args.genre);
    },
    deleteGenre: async (parent, args) => {
      return await deleteGenre(args.id);
    },
    updateGenre: async (parent, args): Promise<IGenre> => {
      return await updateGenre(args.genre);
    },
  },
};
