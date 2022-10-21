import React, { useEffect, useState } from 'react';

import styled from 'styled-components';

import { API } from 'api';
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
          console.log(e);
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
      <Meta>
        <b>Border Countries</b>
        {!borders ? (
          <span>There is no border countries</span>
        ) : (
          <TagGroup>
            {neighbors.map(border => (
              <Tag key={border}>{border}</Tag>
            ))}
          </TagGroup>
        )}
      </Meta>
      <div>
        <InfoTitle>{name}</InfoTitle>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 3rem;
  width: 100%;
  display: grid;
  grid-template-columns: 100%;
  gap: 2rem;

  @media (min-width: 767px) {
    grid-template-columns: minmax(100px, 400px) 1fr;
    align-items: center;
    gap: 5rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: minmax(400px, 600px) 1fr;
  }
`;

const InfoImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const InfoTitle = styled.h1`
  margin: 0;
  font-weight: var(--fw-normal);
`;

const ListGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 4rem;
  }
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  line-height: 1.8;

  & > b {
    font-weight: var(--fw-bold);
  }
`;

const Meta = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;

  & > b {
    font-weight: var(--fw-bold);
  }

  @media (min-width: 767px) {
    flex-direction: row;
    align-items: center;
  }
`;

const TagGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const Tag = styled.span`
  padding: 0 1rem;
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  line-height: 1.5;
  cursor: pointer;
`;
