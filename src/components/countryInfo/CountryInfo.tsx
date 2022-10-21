import React from 'react';

import styled from 'styled-components';

import { CountryDetails, ReturnComponentType } from 'types';

interface Props {
  country: CountryDetails;
  push: () => void;
}

export const CountryInfo = ({ country, push }: Props): ReturnComponentType => {
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

  console.log(push);

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
        {!borders.length ? (
          <span>There is no border countries</span>
        ) : (
          <TagGroup>
            {borders.map(border => (
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

const Wrapper = styled.section``;

const InfoImage = styled.img``;

const InfoTitle = styled.h1``;

const ListGroup = styled.div``;

const List = styled.ul``;

const ListItem = styled.li``;

const Meta = styled.div``;

const TagGroup = styled.div``;

const Tag = styled.span``;
