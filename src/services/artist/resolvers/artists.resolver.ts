import {createArtist, deleteArtist, getArtist, getArtists, updateArtist} from "../artists.service";
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
    Mutation: {
        createArtist: async (parent, args, context) => {
            return await createArtist(args.artist)
        },
        deleteArtist: async (parent, args, context) => {
            return await deleteArtist(args.id)
        },
        updateArtist: async (parent, args, context) => {
            return await updateArtist(args.artist)
        }
    },
    Artist: {
        bands: async (parent, args, ctx, info) => {
            const ids = parent.bandsIds
                ? parent.bandsIds
                : parent.bands
                    ? parent.bands
                    : [];
            return await Promise.all(ids.map(id => getBand(id)));
        }
    }
}
