import React, { useEffect, useState } from 'react';

import { IoMoon } from 'react-icons/io5';
import styled from 'styled-components';

import { Container } from 'components';
import { ReturnComponentType } from 'types';

const HeaderEl = styled.header`
    box-shadow: var(--shadow);
    background-color: var(--colors-ui-base);
`;
const Wrapper = styled.div``;
const Title = styled.a.attrs({
    href: '/',
})``;

const ModeSwitcher = styled.div``;

export const Header = (): ReturnComponentType => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = (): void => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme]);

    return (
        <HeaderEl>
            <Container>
                <Wrapper>
                    <Title>Where is the World?</Title>
                    <ModeSwitcher onClick={toggleTheme}>
                        <IoMoon /> Light Theme
                    </ModeSwitcher>
                </Wrapper>
            </Container>
        </HeaderEl>
    );
};
