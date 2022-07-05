export interface IBand {
  _id?: string;
  id?: string;
  name?: string;
  origin?: string;
  membersId?: string[];
  website?: string;
  genresIds?: string[];
}

export interface IFilterBand {
  limit?: number;
  offset?: number;
  name?: string;
  origin?: string;
  website?: string;
}
