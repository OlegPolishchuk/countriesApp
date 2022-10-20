import React from 'react';

import styled from 'styled-components';

import { ReturnComponentType } from 'types';

interface Props {
  name: string;
  info: [{ title: string; description: string }];
  onClick: () => void;
}

export const Card = ({ info, name, onClick }: Props): ReturnComponentType => {
  return (
    <Wrapper onClick={onClick}>
      <CardImage />
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardList>
          {info.map(el => (
            <CardListItem key={el.title}>
              <b>{el.title}:</b> {el.description}
            </CardListItem>
          ))}
        </CardList>
      </CardBody>
    </Wrapper>
  );
};

const Wrapper = styled.article``;

const CardImage = styled.img``;

const CardBody = styled.div``;

const CardTitle = styled.h3``;

const CardList = styled.ul``;

const CardListItem = styled.li``;
