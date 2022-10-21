import React, { useEffect, useState } from 'react';

import { IoArrowBack } from 'react-icons/io5';
import { useNavigate, useParams } from 'react-router-dom';

import { API } from 'api';
import { Button } from 'components/button/Button';
import { CountryInfo } from 'components/countryInfo/CountryInfo';
import { CountryDetails, ReturnComponentType } from 'types';

export const Details = (): ReturnComponentType => {
  const { name } = useParams();
  const navigate = useNavigate();

  const [country, setCountry] = useState<CountryDetails>({
    flags: { png: '', svg: '' },
    region: '',
    name: '',
    capital: '',
    population: 0,
    independent: true,
    currencies: [],
    borders: null,
    languages: [],
    nativeName: '',
    subregion: '',
    topLevelDomain: [],
  });

  const handleMoveBack = (): void => {
    navigate(-1);
  };

  useEffect(() => {
    (async () => {
      try {
        if (name) {
          const data = await API.searchByCountry(name);

          setCountry(data);
        }
      } catch (e) {
        console.log(e);
      }
    })();
  }, [name]);

  return (
    <>
      <Button onClick={handleMoveBack}>
        <IoArrowBack /> Back
      </Button>
      {country && <CountryInfo country={country} />}
    </>
  );
};
