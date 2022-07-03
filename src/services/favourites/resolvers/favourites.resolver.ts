import {addToFavourites, getFavourites, removeFromFavourites} from "../favourites.service";
import {getGenre} from "../../genre/genre.service";
import {getArtist} from "../../artist/artists.service";
import {getBand} from "../../band/bands.service";
import {getTrack} from "../../tracks/tracks.service";

export default {
    Query: {
        favourites: async (_, {limit, offset}) => {
            return await getFavourites(limit, offset)
        }
    },
    Mutation: {
        addTrackToFavourites: async (_, {id}) => {
            return await addToFavourites(id, 'tracks');
        },
        addBandToFavourites: async (_, {id}) => {
            return await addToFavourites(id, 'bands');
        },
        addGenreToFavourites: async (_, {id}) => {
            return await addToFavourites(id, 'genres');
        },
        addArtistToFavourites: async (_, {id}) => {
            return await addToFavourites(id, 'artists');
        },
        removeTrackToFavourites: async (_, {id}) => {
            return await removeFromFavourites(id, 'tracks');
        },
        removeBandToFavourites: async (_, {id}) => {
            return await removeFromFavourites(id, 'bands');
        },
        removeGenreToFavourites: async (_, {id}) => {
            return await removeFromFavourites(id, 'genres');
        },
        removeArtistToFavourites: async (_, {id}) => {
            return await removeFromFavourites(id, 'artists');
        }
    },
    Favourite: {
        genres: async ({genresIds}, args, ctx, info) => {
            return await Promise.all(genresIds.map(id => getGenre(id)));
        },
        artists: async ({artistsIds}, args, ctx, info) => {
            return await Promise.all(artistsIds.map(id => getArtist(id)));
        },
        bands: async ({bandsIds}, args, ctx, info) => {
            return await Promise.all(bandsIds.map(id => getBand(id)));
        },
        tracks: async ({tracksIds}, args, ctx, info) => {
            return await Promise.all(tracksIds.map(id => getTrack(id)));
        },
    }
}
