import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { API } from 'api';
import { Controls } from 'components';
import { Card } from 'components/card/Card';
import { List } from 'components/list/List';
import { Country, ReturnComponentType } from 'types';

interface Props {
  countries: Country[];
  setCountries: (countries: Country[]) => void;
}

export const HomePage = ({ countries, setCountries }: Props): ReturnComponentType => {
  const navigate = useNavigate();

  const [filteredCountries, setFilteredCountries] = useState(countries);

  const handleSearch = (search: string, region: string | null): void => {
    let allCountries = [...countries];

    if (region) {
      allCountries = allCountries.filter(country => country.region.includes(region));
    }

    if (search) {
      allCountries = allCountries.filter(country =>
        country.name.toLowerCase().includes(search.toLowerCase()),
      );
    }

    setFilteredCountries(allCountries);
  };

  useEffect(() => {
    if (!countries.length) {
      (async () => {
        try {
          const res = await API.fetchAllCountries();

          setCountries(res);
        } catch (e) {
          console.log(e);
        }
      })();
    }
  }, []);

  useEffect(() => {
    setFilteredCountries(countries);
  }, [countries]);

  return (
    <>
      <Controls onSearch={handleSearch} />
      <List>
        {filteredCountries.map(country => {
          const countryInfo = {
            img: country.flags.png,
            name: country.name,
            info: [
              {
                title: 'Population',
                description: country.population.toLocaleString(),
              },
              {
                title: 'Region',
                description: country.region,
              },
              {
                title: 'Capital',
                description: country.capital,
              },
            ],
          };

          return (
            <Card
              key={country.name}
              {...countryInfo}
              onClick={() => navigate(`country/${country.name}`)}
            />
          );
        })}
      </List>
    </>
  );
};
