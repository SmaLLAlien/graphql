import genre from '../../services/genre/resolvers/genre.resolver';
import artists from '../../services/artist/resolvers/artists.resolver';
import bands from '../../services/band/resolvers/bands.resolver';
import favourites from '../../services/favourites/resolvers/favourites.resolver';
import user from '../../services/users/resolvers/user.resolver';
export default [genre, artists, bands, favourites, user];
