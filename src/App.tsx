import React, { useEffect, useState } from 'react';

import { API } from 'api';
import { Controls, Header } from 'components';
import { Main } from 'components/main/Main';
import { ReturnComponentType } from 'types';

const App = (): ReturnComponentType => {
  const [countries, setCountries] = useState([]);

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
      </Main>
    </>
  );
};

export default App;
