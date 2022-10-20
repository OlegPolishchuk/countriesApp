import React, { useState } from 'react';

import { Search } from 'components/search/Search';
import { ReturnComponentType } from 'types';

export const Controls = (): ReturnComponentType => {
    const [search, setSearch] = useState('');

    return (
        <div>
            <Search search={search} setSearch={setSearch} />
        </div>
    );
};
