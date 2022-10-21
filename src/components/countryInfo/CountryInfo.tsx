import React, { useEffect, useState } from 'react';

import { InfoTitle, InfoImage, ListGroup, ListItem, List, Wrapper } from './styles';

import { API } from 'api';
import { NeighborCountries } from 'components/countryInfo/naighborCountries/NeighborCountries';
import { CountryDetails, ReturnComponentType } from 'types';

interface Props {
  country: CountryDetails;
}

export const CountryInfo = ({ country }: Props): ReturnComponentType => {
  const [neighbors, setNeighbors] = useState([] as string[]);

  const {
    name,
    nativeName,
    region,
    capital,
    currencies,
    flags,
    languages,
    population,
    subregion,
    topLevelDomain,
    borders,
  } = country;

  useEffect(() => {
    if (borders) {
      (async () => {
        try {
          const data = await API.filterByCode(borders);

          setNeighbors(data.map(country => country.name));
        } catch (e) {
          console.warn(e);
        }
      })();
    }
  }, [borders]);

  return (
    <Wrapper>
      <InfoImage src={flags.png} alt={name} />
      <ListGroup>
        <List>
          <ListItem>
            <b>Native Name:</b> {nativeName}
          </ListItem>
          <ListItem>
            <b>Population:</b> {population}
          </ListItem>
          <ListItem>
            <b>Region:</b> {region}
          </ListItem>
          <ListItem>
            <b>Sub Region:</b> {subregion}
          </ListItem>
          <ListItem>
            <b>Capital:</b> {capital}
          </ListItem>
        </List>
        <List>
          <ListItem>
            <b>Top Level Domain</b>
            {topLevelDomain.map(domain => (
              <span key={domain}>{domain}</span>
            ))}
          </ListItem>
          <ListItem>
            <b>Currencies</b>
            {currencies.map(currency => (
              <span key={currency.code}>{currency.name}</span>
            ))}
          </ListItem>
          <ListItem>
            <b>Language</b>
            {languages.map(language => (
              <span key={language.name}>{language.name}</span>
            ))}
          </ListItem>
        </List>
      </ListGroup>
      <NeighborCountries borders={neighbors} isBorderExist={!!borders} />
      <div>
        <InfoTitle>{name}</InfoTitle>
      </div>
    </Wrapper>
  );
};
