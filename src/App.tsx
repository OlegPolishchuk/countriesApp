import React from 'react';

import { Controls, Header } from 'components';
import { Main } from 'components/main/Main';
import { ReturnComponentType } from 'types';

const App = (): ReturnComponentType => {
    return (
        <>
            <Header />
            <Main>
                <Controls />
            </Main>
        </>
    );
};

export default App;
