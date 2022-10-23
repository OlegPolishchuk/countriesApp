import React from 'react';

import { useNavigate } from 'react-router-dom';

import { Meta, Tag, TagGroup } from 'components/countryInfo/styles';
import { ReturnComponentType } from 'types';

interface Props {
  isBorderExist: boolean;
  borders: string[];
}

export const NeighborCountries = React.memo(
  ({ isBorderExist, borders }: Props): ReturnComponentType => {
    const navigate = useNavigate();

    return (
      <Meta>
        <b>Border Countries</b>
        {!isBorderExist ? (
          <span>There is no border countries</span>
        ) : (
          <TagGroup>
            {borders.map(border => (
              <Tag key={border} onClick={() => navigate(`/country/${border}`)}>
                {border}
              </Tag>
            ))}
          </TagGroup>
        )}
      </Meta>
    );
  },
);
