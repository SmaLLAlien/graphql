import baseDef from './baseDef';
import genre from '../../modules/genre/typeDefs/genre.typedef';
import artists from '../../modules/artist/typeDefs/artists.typedef';
import bands from '../../modules/band/typeDefs/bands.typedef';
import favourites from '../../modules/favourites/typeDefs/favourites.typedef';
import tracks from '../../modules/tracks/typeDefs/tracks.typedef';
import albums from '../../modules/albums/typeDefs/album.typedef';
import user from '../../modules/users/typeDefs/user.typedef';
export default [baseDef, genre, artists, bands, favourites, tracks, albums, user];
