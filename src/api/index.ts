import { instance } from 'api/config';
import { Country } from 'types';

export class API {
  static fetchAllCountries(): any {
    return instance
      .get<Country[]>('all?fields=name,capital,flags,population,region')
      .then(res => res.data);
  }

  static searchByCountry(country: string): any {
    return instance.get<Country>(`name/${country}`).then(res => res.data);
  }

  static filterByCode(codes: any): any {
    return instance
      .get<Country[]>('alpha', {
        params: {
          codes: codes.json(','),
        },
      })
      .then(res => res.data);
  }
}
