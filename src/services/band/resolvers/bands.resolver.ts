import {getBand, getBands} from "../bands.service";
import {getGenre} from "../../genre/genre.service";

export default {
    Query: {
        bands: async (_, {limit, offset}) => {
            return await getBands(limit, offset)
        },
        band: async (parent, args, context) => {
            return await getBand(args.id)
        }
    },
    Band: {
        genres: async ({genresIds}, args, ctx, info) => {
            return await Promise.all(genresIds.map(id => getGenre(id)));
        }
    }
}
