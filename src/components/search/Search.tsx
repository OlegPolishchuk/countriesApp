import React from 'react';

import { IoSearch } from 'react-icons/io5';
import styled from 'styled-components';

import { ReturnComponentType } from 'types';

interface Props {
    search: string;
    setSearch: (value: string) => void;
}

const InputContainer = styled.label`
    background-color: var(--colors-ui-base);
    padding: 1rem 2rem;
    display: flex;
    align-items: center;

    border-radius: var(--radii);
    box-shadow: var(--shadow);
    width: 100%;
    margin-bottom: 1.5rem;

    @media (min-width: 767px) {
        margin-bottom: 0;
        width: 280px;
    }
`;

const Input = styled.input.attrs({
    type: 'search',
    placeholder: 'Search for a country...',
})`
    margin-left: 2rem;
    border: none;
    outline: none;
    color: var(--colors-text);
`;

export const Search = ({ setSearch, search }: Props): ReturnComponentType => {
    return (
        <InputContainer>
            <IoSearch />
            <Input onChange={e => setSearch(e.currentTarget.value)} value={search} />
        </InputContainer>
    );
};
