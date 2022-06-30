import {getGenre, getGenres} from "../genre.service";

export default {
    Query: {
        genres: async (_, {limit, offset}) => {
            console.log(2);
            return await getGenres(limit, offset)
        },
        genre: async (parent, args, context) => {
            console.log(1);
            return await getGenre(args.id)
        }
    }
}


