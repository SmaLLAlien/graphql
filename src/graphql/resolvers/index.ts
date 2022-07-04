import genre from '../../modules/genre/resolvers/genre.resolver';
import artists from '../../modules/artist/resolvers/artists.resolver';
import bands from '../../modules/band/resolvers/bands.resolver';
import favourites from '../../modules/favourites/resolvers/favourites.resolver';
import tracks from '../../modules/tracks/resolvers/tracks.resolver';
import albums from '../../modules/albums/resolvers/album.resolver';
import user from '../../modules/users/resolvers/user.resolver';
export default [genre, artists, bands, favourites, tracks, albums, user];
