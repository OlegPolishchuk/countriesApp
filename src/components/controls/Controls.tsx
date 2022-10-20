import React, { useState } from 'react';

import styled from 'styled-components';

import { CustomSelect } from 'components/customSelect/CustomSelect';
import { Search } from 'components/search/Search';
import { ReturnComponentType } from 'types';

interface IOption {
  value: string;
  label: string;
}
const options: IOption[] = [
  { value: 'Africa', label: 'Africa' },
  { value: 'America', label: 'America' },
  { value: 'Asia', label: 'Asia' },
  { value: 'Europe', label: 'Europe' },
  { value: 'Oceania', label: 'Oceania' },
];

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Controls = (): ReturnComponentType => {
  const [search, setSearch] = useState('');
  const [region, setRegion] = useState<IOption | null>(null);

  const handleChangeOption = (option: unknown): void => {
    const value = option as IOption;

    setRegion(value);
  };

  return (
    <Wrapper>
      <Search search={search} setSearch={setSearch} />
      <CustomSelect
        options={options}
        placeholder="Filter by Region"
        isClearable
        isSearchable={false}
        value={region}
        onChange={handleChangeOption}
      />
    </Wrapper>
  );
};
