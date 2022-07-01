import {getGenre, getGenres} from "../genre.service";

export default {
    Query: {
        genres: async (_, {limit, offset}) => {
            return await getGenres(limit, offset)
        },
        genre: async (parent, args, context) => {
            return await getGenre(args.id)
        }
    }
}


