import {getArtist, getArtists} from "../artists.service";

export default {
    Query: {
        artists: async (_, {limit, offset}) => {
            return await getArtists(limit, offset)
        },
        artist: async (parent, args, context) => {
            return await getArtist(args.id)
        }
    }
}
