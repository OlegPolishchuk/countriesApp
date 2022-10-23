import React, { useState } from 'react';

import { Routes, Route } from 'react-router-dom';

import { Header } from 'components';
import { Main } from 'components/main/Main';
import { Details } from 'pages/details/Details';
import { HomePage } from 'pages/homePage/HomePage';
import { NotFound } from 'pages/notFound/NotFound';
import { Country, ReturnComponentType } from 'types';

const App = (): ReturnComponentType => {
  const [countries, setCountries] = useState<Country[]>([]);

  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route
            path="/"
            element={<HomePage countries={countries} setCountries={setCountries} />}
          />
          <Route path="/country/:name" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Main>
    </>
  );
};

export default App;
