import React from 'react';

import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps';
import styled from 'styled-components';

import { ReturnComponentType } from 'types';

interface Props {
  latLng: number[];
}

export const MapWrapper = React.memo(({ latLng }: Props): ReturnComponentType => {
  return (
    <div>
      {latLng.length && (
        <YMaps>
          <StyledMap
            defaultState={{
              center: [latLng[0], latLng[1]],
              zoom: 4,
            }}
          >
            <Placemark geometry={[...latLng]} />
          </StyledMap>
        </YMaps>
      )}
    </div>
  );
});

const StyledMap = styled(Map)`
  width: 100%;
  height: 600px;
  margin-top: 2rem;
`;
