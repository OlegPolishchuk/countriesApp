import React, { useState } from 'react';

import { CustomSelect } from 'components/customSelect/CustomSelect';
import { Search } from 'components/search/Search';
import { ReturnComponentType } from 'types';

const options = [
    { value: 'Africa', label: 'Africa' },
    { value: 'America', label: 'America' },
    { value: 'Asia', label: 'Asia' },
    { value: 'Europe', label: 'Europe' },
    { value: 'Oceania', label: 'Oceania' },
];

export const Controls = (): ReturnComponentType => {
    const [search, setSearch] = useState('');

    return (
        <div>
            <Search search={search} setSearch={setSearch} />
            <CustomSelect options={options} />
        </div>
    );
};
