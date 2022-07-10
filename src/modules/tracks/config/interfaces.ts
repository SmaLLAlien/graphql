export interface ITrack {
  id?: string;
  _id?: string;
  title?: string;
  albumId?: string;
  artistsIds?: string[];
  bandsIds?: string[];
  duration?: number;
  released?: number;
  genresIds?: string[];
}

export interface IFilterTrack {
  limit?: number;
  offset?: number;
  title?: string;
  albumId?: string;
  duration?: number;
  released?: number;
}
