import { config } from 'dotenv';

const { parsed } = config();
export const PORT = parsed.PORT || 8000;
export const GENRE_URL = parsed.GENRES;
export const ARTISTS_URL = parsed.ARTISTS;
export const BANDS_URL = parsed.BANDS;
export const USERS_URL = parsed.USERS;
export const TRACKS_URL = parsed.TRACKS;
export const ALBUMS_URL = parsed.ALBUMS;
export const FAVOURITES = parsed.FAVOURITES;
export const TOKEN = parsed.TOKEN;
