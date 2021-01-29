import Select from 'react-select';
import { countryOptions } from './docs/data';
import './Country.css';

import React from 'react';

export default function Country() {
    return (        
        <div>
            <div className="Country-Container">
                <Select         
                    isMulti
                    name="country"
                    options={countryOptions}
                    className="basic-multi-select"
                    classNamePrefix="select"
                />
            </div>
            
            <div>
                <h1>Added Tags:</h1>
            </div>
        </div>        
    )
}