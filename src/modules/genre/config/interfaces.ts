export interface IGenre {
  _id?: string;
  id?: string;
  name?: string;
  description?: string;
  country?: string;
  year?: string;
}

export interface IFilterGenre {
  limit?: number;
  offset?: number;
  name?: string;
  description?: string;
  country?: string;
  year?: string;
}
