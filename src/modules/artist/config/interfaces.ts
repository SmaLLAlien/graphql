export interface IArtist {
  _id?: string;
  id?: string;
  firstName?: string;
  secondName?: string;
  middleName?: string;
  birthDate?: string;
  birthPlace?: string;
  country?: string;
  bandsIds?: string[];
  instruments?: string[];
}

export interface IFilterArtist {
  limit: number;
  offset: number;
  firstName: string;
  secondName: string;
  middleName: string;
  birthDate: string;
  birthPlace: string;
  country: string;
}
