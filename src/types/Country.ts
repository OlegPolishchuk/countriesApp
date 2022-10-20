export interface Country {
  name: string;
  capital: string;
  region: string;
  population: number;
  flags: CountryFlags;
  independent: boolean;
}
export interface CountryFlags {
  svg: string;
  png: string;
}
