import React, { useEffect, useState } from 'react';

import { API } from 'api';
import { Controls, Header } from 'components';
import { Card } from 'components/card/Card';
import { List } from 'components/list/List';
import { Main } from 'components/main/Main';
import { Country, ReturnComponentType } from 'types';

const App = (): ReturnComponentType => {
  const [countries, setCountries] = useState<Country[]>([]);

  console.log('app rendered');
  console.log(countries);

  useEffect(() => {
    (async () => {
      try {
        const res = await API.fetchAllCountries();

        setCountries(res);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  return (
    <>
      <Header />
      <Main>
        <Controls />
        <List>
          {countries.map(country => {
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

            return <Card key={country.name} {...countryInfo} onClick={() => {}} />;
          })}
        </List>
      </Main>
    </>
  );
};

export default App;
