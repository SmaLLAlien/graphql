import {createGenre, deleteGenre, getGenre, getGenres, updateGenre} from "../genre.service";

export default {
    Query: {
        genres: async (_, {limit, offset}) => {
            return await getGenres(limit, offset)
        },
        genre: async (parent, args, context) => {
            return await getGenre(args.id)
        }
    },
    Mutation: {
        createGenre: async (parent, args, context) => {
            return await createGenre(args.genre)
        },
        deleteGenre: async (parent, args, context) => {
            return await deleteGenre(args.id)
        },
        updateGenre: async (parent, args, context) => {
            return await updateGenre(args.genre)
        }
    }
}


