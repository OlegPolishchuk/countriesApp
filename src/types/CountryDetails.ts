export interface CountryDetails {
  name: string;
  nativeName: string;
  flags: { png: string; svg: string };
  capital: string;
  population: number;
  region: string;
  subregion: string;
  topLevelDomain: string[];
  currencies: Currency[];
  languages: Languages[];
  borders: string[];
  independent: boolean;
}

export interface Currency {
  code: string;
  name: string;
  symbol: string;
}

export interface Languages {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
}
