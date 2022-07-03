import {createTrack, deleteTrack, getTrack, getTracks, updateTrack} from "../tracks.service";
import {getGenre} from "../../genre/genre.service";
import {getBand} from "../../band/bands.service";
import {getArtist} from "../../artist/artists.service";
import {getAlbum} from "../../albums/album.service";

export default {
    Query: {
        tracks: async (_, {limit, offset}) => {
            return await getTracks(limit, offset)
        },
        track: async (parent, args, context) => {
            return await getTrack(args.id)
        }
    },
    Mutation: {
        createTrack: async (parent, args, context) => {
            return await createTrack(args.track)
        },
        deleteTrack: async (parent, args, context) => {
            return await deleteTrack(args.id)
        },
        updateTrack: async (parent, args, context) => {
            return await updateTrack(args.track)
        }
    },
    Track: {
        genres: async ({genresIds}, args, ctx, info) => {
            return await Promise.all(genresIds.map(id => getGenre(id)));
        },
        bands: async ({bandsIds}, args, ctx, info) => {
            return await Promise.all(bandsIds.map(id => getBand(id)));
        },
        artists: async ({artistsIds}, args, ctx, info) => {
            return await Promise.all(artistsIds.map(id => getArtist(id)));
        },
        album: async ({albumId}, args, ctx, info) => {
            return await getAlbum(albumId);
        }
    }
}
