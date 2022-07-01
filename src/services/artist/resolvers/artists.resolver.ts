import {getArtist, getArtists} from "../artists.service";
import {getBand} from "../../band/bands.service";

export default {
    Query: {
        artists: async (_, {limit, offset}) => {
            return await getArtists(limit, offset)
        },
        artist: async (parent, args, context) => {
            return await getArtist(args.id)
        }
    },
    Artist: {
        bands: async ({bandsIds}, args, ctx, info) => {
            return await Promise.all(bandsIds.map(id => getBand(id)));
        }
    }
}
