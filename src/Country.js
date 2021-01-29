import Select from 'react-select';
import { countryOptions } from './docs/data';

import React from 'react';

export default function Country() {
    return (
        <div>
            <Select        
                isMulti
                name="country"
                options={countryOptions}
                className="basic-multi-select"
                classNamePrefix="select"/>
        </div>
    )
}
