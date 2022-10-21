import { instance } from 'api/config';
import { Country, CountryDetails, CountryNeighbors } from 'types';

export class API {
  static fetchAllCountries(): Promise<Country[]> {
    return instance
      .get<Country[]>('all?fields=name,capital,flags,population,region')
      .then(res => res.data);
  }

  static searchByCountry(country: string): Promise<CountryDetails> {
    return instance.get<CountryDetails[]>(`name/${country}`).then(res => res.data[0]);
  }

  static filterByCode(codes: string[]): Promise<CountryNeighbors[]> {
    return instance
      .get('alpha', {
        params: {
          codes: codes.join(','),
        },
      })
      .then(res => res.data);
  }
}
