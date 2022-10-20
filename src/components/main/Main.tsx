import React, { ReactNode } from 'react';

import styled from 'styled-components';

import { Container } from 'components/container/Container';
import { ReturnComponentType } from 'types';

const Wrapper = styled.main`
  padding: 2rem 0;

  @media (min-width: 767px) {
    padding: 4rem 0;
  }
`;

interface Props {
  children: ReactNode;
}

export const Main = ({ children }: Props): ReturnComponentType => {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  );
};
